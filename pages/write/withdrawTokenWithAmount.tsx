import { ContractABI, ContractAddress } from "../../lib/constant.ts";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";

export default function WithdrawTokenWithAmount() {
  const [loading, setLoading] = useState(false);

  let provider: any;
  let signer: any;

  const data = ContractAddress;
  const contract = new ethers.Contract(data, ContractABI, signer);

  useEffect(() => {
    if (typeof window !== "undefined") {
      provider = new ethers.providers.Web3Provider((window as any).ethereum);
      if (typeof provider.getSigner !== "undefined") {
        signer = provider.getSigner();
      }
    } else {
      console.log(
        "This code should only be executed in a browser environment."
      );
    }
  });

  const withdrawAllToken = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const tokenAddr = formData.get("tokenAddr");
    const toAddr = formData.get("toAddr");
    const amount = formData.get("amount");

    try {
      if ((window as any).ethereum) {
        provider = new ethers.providers.Web3Provider((window as any).ethereum);

        const accounts = await (window as any).ethereum.request({
          method: "eth_requestAccounts",
        });
        if (accounts.length === 0) {
          throw new Error("User denied account access.");
        }

        const signer = provider.getSigner();

        try {
          setLoading(true);

          const tx = await contract
            .connect(signer)
            .withdrawTokenWithAmount(tokenAddr, toAddr, amount);

          console.log("tx", tx);
          await tx.wait();

          setLoading(false);
          alert("Staked");
        } catch (error: any) {
          console.log(error);
          setLoading(false);
          if (
            error.message &&
            error.error.data.message.includes(
              "Ownable: caller is not the owner"
            )
          ) {
            alert("Caller is not the owner");
          } else if (error.error.data.message) {
            alert(error.error.data.message);
          } else {
            alert(error);
          }
        }
      } else {
        setLoading(false);
        alert("Please connect to a wallet.");
      }
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={withdrawAllToken}>
        <div className="flex flex-col justify-center items-center m-6">
          <div>
            <input
              type="text"
              name="tokenAddr"
              className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-60 p-2.5  mb-5"
              placeholder="token address"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="toAddr"
              className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-60 p-2.5 mb-5"
              placeholder="to address"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="amount"
              className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-60 p-2.5 mb-5"
              placeholder="amount"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className={`text-white bg-red-700 hover:bg-red-800  font-normal rounded-full text-sm p-1 ps-2 pe-2 text-center ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Processing..." : "withdraw Token Amount"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
