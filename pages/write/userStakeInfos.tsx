import { ContractABI, ContractAddress } from "@/lib/constant";
import { ethers } from "ethers";
import React, { useState } from "react";

export default function UserStakeInfos() {
  const [infoDetails, setInfoDetails] = useState<string | number>('');
  const [loading, setLoading] = useState(false);

  let provider: any;

  if ((window as any).ethereum) {
    provider = new ethers.providers.Web3Provider((window as any).ethereum);
  }

  const contract = new ethers.Contract(
    ContractAddress,
    ContractABI,
    provider
  );

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const certificate = formData.get("info");

    try {
      if ((window as any).ethereum) {

        setLoading(true)
        const certificateData = await contract
          .userStakeInfos(certificate);
        setInfoDetails(certificateData);
        setLoading(false)

        console.log("infoDetails", infoDetails)

      } else {
        setLoading(false)
        alert("Please connect to a wallet.");
      }
    } catch (error) {
      setLoading(false)
      alert(`Something went wrong.\n${error}`);
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="flex flex-col justify-center items-center m-6">
          <div>
            <input
              type="text"
              name="info"
              className="bg-gray-50 border focus:outline-none  border-gray-300 text-gray-900 text-sm rounded-lg block w-60 p-2.5 mb-5"
              placeholder="address"
              required
            />
            {infoDetails ?
              <div className="flex justify-center items-center pb-3">
                amount: {String(infoDetails.amount)}
                <br />
                totalStaked: {String(infoDetails.totalStaked)}
                <br />
                totalClaimed: {String(infoDetails.totalClaimed)}
                <br />
                pendingReward: {String(infoDetails.pendingReward)}
                <br />
                FinalTimestamp: {String(infoDetails.FinalTimestamp)}
                <br />
                lastUpdatedTimestamp: {String(infoDetails.lastUpdatedTimestamp)}
                <br />
                NextRewardClaimTimeStamp: {String(infoDetails.NextRewardClaimTimeStamp)}

              </div> : ""
            }
          </div>
          <div>
            <button
              type="submit"
              className={`text-white bg-red-700 hover:bg-red-800  font-normal rounded-full text-sm p-1 ps-2 pe-2 text-center ${loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
              {loading ? "Processing..." : "Stake Info"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
