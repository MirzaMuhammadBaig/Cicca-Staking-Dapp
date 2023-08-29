import { ContractABI, ContractAddress } from "../../lib/constant.ts";
import { ethers } from "ethers";
import React, { useState } from "react";

function ClaimMonthlyReward() {
  const [loading, setLoading] = useState(false);

  async function claimMonthlyReward() {
    if ((window as any).ethereum) {
      try {
        setLoading(true);

        const data = ContractAddress;
        const provider = new ethers.providers.Web3Provider(
          (window as any).ethereum
        );
        const signer = provider.getSigner();
        const contract = new ethers.Contract(data, ContractABI, signer);

        await contract.claimMonthlyReward();

        console.log("claimMonthlyReward successful");
      } catch (error: any) {
        if (
          error.message &&
          error.error.data.message.includes(
            "Cicca_Staking: You don't have any reward to claim"
          )
        ) {
          alert("You don't have any reward to claim");
        } else {
          alert(error)
        }
        console.log(error)
      } finally {
        setLoading(false);
      }
    } else {
      console.log("Connect to Binance Chain");
    }
  }

  return (
    <button
      type="submit"
      className={`text-white bg-red-700 hover:bg-red-800 m-[50px] font-normal rounded-full text-sm p-1 ps-2 pe-2 text-center ${loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      onClick={claimMonthlyReward}
      disabled={loading}
    >
      {loading ? "Processing..." : "Claim Monthly Reward"}
    </button>
  );
}

export default ClaimMonthlyReward;
