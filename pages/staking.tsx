import Navbar from "./navbar/Navbar.tsx";
import SideBar from "./sidebar/SideBar.tsx";
import Image from "next/image";
import icon from "../assets/nav-icon.png";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { BsArrowUpRight } from "react-icons/bs";
import { useAccount, useConnect, useNetwork, useSwitchNetwork } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import img from "../assets/stakePagePic.webp";
import { ContractABI, ContractAddress } from "../lib/constant.ts";
import UnStake from "./write/unstake.tsx";
import ClaimMonthlyReward from "./write/claimMonthlyRewars.tsx";
import WithdrawAll from "./write/withdrawAll.tsx";
import WithdrawTokenWithAmount from "./write/withdrawTokenWithAmount.tsx";
import ClearStuckBNBBalance from "./write/clearStuckBNBBalance.tsx";
import UserStakeInfos from "./write/userStakeInfos.tsx";
import { useWeb3Modal } from "@web3modal/react";

const Staking = () => {
  // wagmi hooks
  const { address } = useAccount();
  const { switchNetwork } = useSwitchNetwork();
  const { chain } = useNetwork();
  const { connect } = useConnect();

  const { open, close } = useWeb3Modal();

  // read Use States
  const [stakeAmount, setTotalStakedAmount] = useState<any>("");
  const [amount, setAmount] = useState<number | string>("");
  const [apy, setAPY] = useState<any>("");
  const [firstTimeReward, setFirstTimeReward] = useState<any>("");
  const [stakeTime, setStakeTime] = useState<any>("");
  const [claimTime, setClaimTime] = useState<any>("");

  const [activeBtn, setActiceBtn] = useState<string | undefined>("");
  const [activeIndex, setActiveIndex] = useState<null | string | number>(null);
  const [sending, setSending] = useState(false);

  let provider: any;
  let signer: any;

  const handleOnclick = (btn: string) => {
    setActiceBtn(btn);
  };

  const STAKEAMOUNT = (e: any) => {
    setAmount(e.target.value);
  };

  useEffect(() => {
    setActiceBtn("1");
    if (typeof window !== "undefined") {
      provider = "wedrf";
      // provider = new ethers.providers.Web3Provider((window as any).ethereum);
      if (typeof provider.getSigner !== "undefined") {
        signer = provider.getSigner();
      }
    } else {
      console.log(
        "This code should only be executed in a browser environment."
      );
    }

    async function readSeiCloudStatistic() {
      if ((window as any).ethereum) {
        if (chain?.id === 56) {
          try {
            provider = new ethers.providers.Web3Provider(
              (window as any).ethereum
            );
            const contract = new ethers.Contract(
              ContractAddress,
              ContractABI,
              signer
            );
            const totalStakedAmount = await contract.totalStakedAmount();
            setTotalStakedAmount(totalStakedAmount);
            const APY = await contract.APY();
            setAPY(APY);
            const firstTimeReward = await contract.FirstTimeReward();
            setFirstTimeReward(firstTimeReward);
            const stakeTime = await contract.StakeTime();
            setStakeTime(stakeTime);
            const claimTime = await contract.claimTime();
            setClaimTime(claimTime);
          } catch (err: any) {
            console.log("Error", err);
          }
        } else {
          console.log("Connect to Binance Chain");
        }
      }
    }
    readSeiCloudStatistic();
  }, []);

  const submitForm = async (e: any) => {
    e.preventDefault();
    setSending(true);

    const formData = new FormData(e.target);
    const stakingAmount = formData.get("amount");

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
        const contract = new ethers.Contract(
          ContractAddress,
          ContractABI,
          signer
        );

        try {
          const tx = await contract.connect(signer).stake(stakingAmount);

          console.log("tx", tx);
          await tx.wait();

          setSending(false);
          alert("Staked");
        } catch (error: any) {
          console.log("error", error.error.data.message);
          if (
            error.message &&
            error.error.data.message.includes(
              "Cicca_Staking: You don't have enought Tokens to stake"
            )
          ) {
            alert("You don't have enought Tokens to stake");
          }
        }
      } else {
        alert("Please connect to a wallet.");
      }
    } catch (error) {
      setSending(false);
    }
  };

  const isLinkBtn = (btn: string | undefined) => {
    return activeBtn === btn;
  };

  const faqs = [
    {
      question: "What are Cicca-Defi Staking DApps?",
      answer:
        "Cicca-Defi Staking DApps are decentralized applications that enable users to participate in the staking process of the CICCA-DEFI network. By staking $CICCA-DEFI tokens, users contribute to the network's security, consensus, and overall functionality.",
    },
    {
      question: "How does Staking Work in Cicca-Defi?",
      answer:
        "Staking in Cicca-Defi involves locking a certain amount of $CICCA-DEFI tokens as collateral to support network operations. This contributes to transaction validation and security. In return, stakers receive rewards in the form of additional $CICCA-DEFI tokens.",
    },
    {
      question: "What are the Benefits of Staking in Cicca-Defi?",
      answer:
        "Staking in Cicca-Defi offers a dual benefit: you earn rewards for your contribution to the network's health and security while supporting the ecosystem's growth. Additionally, you play a role in shaping the network's governance decisions.",
    },
    {
      question: "How Can I Stake My $CICCA-DEFI Tokens?",
      answer:
        "To stake your $CICCA-DEFI tokens, interact with the Staking DApp on the Cicca-Defi platform. Connect your compatible wallet, choose the amount to stake, and confirm the transaction. Your staked tokens will contribute to the network's consensus.",
    },
  ];

  const toggleFAQ = (index: null | string | number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
      <Navbar />
      <div className="sm:flex">
        <SideBar />
        <div className="lg:flex lg:justify-center lg:w-full block ">
          {/* First Column */}
          <div className="flex order-2 lg:order-1">
            {/* <div className="flex flex-col lg:w-[500px] md:w-[768px]"> */}
            <div className="flex flex-col lg:w-full md:w-[768px]">
              <div className="flex justify-center align-middle p-5 w-full">
                <form onSubmit={submitForm}>
                  <div className="p-3 bg-white border border-gray-200 rounded-lg shadow  lg:w-[460px] md:w-[725px] w-[410px]">
                    <div className="flex flex-col sm:flex-row justify-between align-middle pb-3">
                      <p
                        className="text-xs font-medium  whitespace-nowrap"
                        style={{ fontSize: "14px" }}
                      >
                        Stake Cicca-Defi
                      </p>
                      <p
                        className="flex justify-between text-gray-700  whitespace-nowrap"
                        style={{ fontSize: "13px" }}
                      >
                        Stake Cicca-Defi and receive Cicca-Defi while staking
                      </p>
                    </div>

                    <div
                      className="w-full rounded-lg"
                      style={{ background: "rgba(241,245,249,255)" }}
                    >
                      <div className="flex justify-between rounded-lg">
                        <p
                          className="text-gray-700 p-3"
                          style={{ fontSize: "13px" }}
                        >
                          Available To Stake
                        </p>
                        <p
                          className="text-xs font-medium p-3"
                          style={{ fontSize: "14px" }}
                        >
                          0 Cicca-Defi
                        </p>
                      </div>
                      <div className="ps-3 pe-3">
                        <hr />
                        <hr />
                      </div>
                      <div className="flex justify-between rounded-lg p-3">
                        <div
                          className="text-gray-700"
                          style={{ fontSize: "13px" }}
                        >
                          Staked Amount
                        </div>
                        <div
                          className="text-xs font-medium"
                          style={{ fontSize: "14px" }}
                        >
                          0 Cicca-Defi
                        </div>
                      </div>
                      <div className="flex justify-between rounded-lg p-3 pt-0">
                        <div
                          className="text-gray-700 mt-[2px]"
                          style={{ fontSize: "13px" }}
                        >
                          Cicca-Defi APY
                        </div>
                        <div className="">
                          <span
                            className={`text-black  font-thin hover:cursor-pointer hover:bg-gray-100  font-xs rounded-full text-sm ps-1 pe-1 p-[2px] me-[4px] ${
                              isLinkBtn("1")
                                ? "bg-white text-red-700 border border-red-700"
                                : "bg-gray-100 text-black border border-gray-300"
                            }`}
                            style={{ fontSize: "10px" }}
                            onClick={() => {
                              handleOnclick("1");
                            }}
                          >
                            1 Month (100%)
                          </span>
                          <span
                            className={`text-black font-thin hover:cursor-pointer hover:bg-gray-100  font-xs rounded-full text-sm  ps-1 pe-1 p-[2px] me-[4px] ${
                              isLinkBtn("2")
                                ? "bg-white text-red-700 border border-red-700"
                                : "bg-gray-100 text-black border border-gray-300"
                            }`}
                            style={{ fontSize: "10px" }}
                            onClick={() => {
                              handleOnclick("2");
                            }}
                          >
                            3 Months (400%)
                          </span>
                          <span
                            className={`text-black bg-gray-100  font-thin hover:cursor-pointer hover:bg-gray-100  font-xs rounded-full text-sm  ps-1 pe-1 p-[2px]  ${
                              isLinkBtn("3")
                                ? "bg-white text-red-700 border border-red-700"
                                : "bg-gray-100 text-black border border-gray-300"
                            }`}
                            style={{ fontSize: "10px" }}
                            onClick={() => {
                              handleOnclick("3");
                            }}
                          >
                            6 Month (1000%)
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      className="flex   justify-between mt-3 rounded-lg"
                      style={{ background: "rgba(241, 245, 249, 255)" }}
                    >
                      <div className="flex">
                        <Image
                          className="m-3 mt-3.5 "
                          src={icon}
                          alt="Input Icon"
                          style={{ width: "24px", height: "24px" }}
                        ></Image>

                        <input
                          type="text"
                          name="amount"
                          id="amount"
                          value={amount}
                          onChange={STAKEAMOUNT}
                          className="text-black text-xs rounded-lg block w-auto mt-1.5 pt-2 p-2.5 focus:outline-none"
                          placeholder="Amount"
                          style={{ background: "rgba(241, 245, 249, 255)" }}
                        />
                      </div>
                      <div>
                        <button
                          type="button"
                          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm m-3 p-1 ps-3 pe-3 "
                        >
                          Max
                        </button>
                      </div>
                    </div>
                    <div>
                      {address && chain?.id === 56 ? (
                        <button
                          type="submit"
                          // onClick={() => submitForm}
                          // onClick={() => switchNetwork?.(56)}
                          className="w-full mt-3 flex justify-center text-red-700 border border-red-700 hover:bg-gray-100 focus:outline-none font-normal rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                          Stake
                          <div className="ms-4 mt-1">
                            <BsArrowUpRight />
                          </div>
                        </button>
                      ) : address && chain?.id !== 56 ? (
                        <button
                          // type="submit"
                          onClick={() => open()}
                          className="w-full mt-3 flex justify-center text-red-700 border border-red-700 hover:bg-gray-100 focus:outline-none font-normal rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                          SWITCH TO BINANCE SMART CHAIN
                          <div className="ms-4 mt-1">
                            <BsArrowUpRight />
                          </div>
                        </button>
                      ) : (
                        <>
                          <button
                            onClick={() =>
                              connect({ connector: new InjectedConnector() })
                            }
                            className="w-full mt-3 flex justify-center text-red-700 border border-red-700 hover:bg-gray-100 focus:outline-none font-normal rounded-lg text-sm px-5 py-2.5 text-center"
                          >
                            Connect wallet
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </form>
              </div>
              {/* UnStake */}
              <div className="flex justify-center p-5 pt-0 ">
                <div className="p-5 pt-3 bg-white border border-gray-200 rounded-lg shadow w-full">
                  <p
                    className="text-xs font-medium pb-2"
                    style={{ fontSize: "14px" }}
                  >
                    Claim/Unstake
                  </p>
                  {address && chain?.id === 56 ? (
                    <div className="w-full flex justify-center items-center border border-gray-300 rounded">
                      <UnStake />
                    </div>
                  ) : address && chain?.id !== 56 ? (
                    <div className="w-full flex justify-center items-center border border-gray-300 rounded">
                      <button
                        // type="submit"
                        onClick={() => switchNetwork?.(56)}
                        className="text-white bg-red-700 hover:bg-red-800 m-[50px] font-normal rounded-full text-sm p-1 ps-2 pe-2 text-center"
                      >
                        Switch To Binance Smart Chain
                      </button>
                    </div>
                  ) : (
                    <div className="w-full flex justify-center items-center border border-gray-300 rounded">
                      <button
                        onClick={() =>
                          connect({ connector: new InjectedConnector() })
                        }
                        className="text-white bg-red-700 hover:bg-red-800 m-[50px] font-normal rounded-full text-sm p-1 ps-2 pe-2 text-center"
                      >
                        Connect wallet
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Claim Monthly Reward */}
              <div className="flex justify-center p-5 pt-0">
                <div className="p-5 pt-3 bg-white border border-gray-200 rounded-lg shadow w-full">
                  <p
                    className="text-xs font-medium pb-2"
                    style={{ fontSize: "14px" }}
                  >
                    Claim Monthly Reward
                  </p>
                  {address && chain?.id === 56 ? (
                    <div className="w-full flex justify-center items-center border border-gray-300 rounded">
                      <ClaimMonthlyReward />
                    </div>
                  ) : address && chain?.id !== 56 ? (
                    <div className="w-full flex justify-center items-center border border-gray-300 rounded">
                      <button
                        // type="submit"
                        onClick={() => switchNetwork?.(56)}
                        className="text-white bg-red-700 hover:bg-red-800 m-[50px] font-normal rounded-full text-sm p-1 ps-2 pe-2 text-center"
                      >
                        Switch To Binance Smart Chain
                      </button>
                    </div>
                  ) : (
                    <div className="w-full flex justify-center items-center border border-gray-300 rounded">
                      <button
                        onClick={() =>
                          connect({ connector: new InjectedConnector() })
                        }
                        className="text-white bg-red-700 hover:bg-red-800 m-[50px] font-normal rounded-full text-sm p-1 ps-2 pe-2 text-center"
                      >
                        Connect wallet
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* withdraw All */}
              <div className="flex justify-center p-5 pt-0">
                <div className="p-5 pt-3 bg-white border border-gray-200 rounded-lg shadow w-full">
                  <p
                    className="text-xs font-medium pb-2"
                    style={{ fontSize: "14px" }}
                  >
                    Withdraw All
                  </p>
                  {address && chain?.id === 56 ? (
                    <div className="w-full flex justify-center items-center border border-gray-300 rounded">
                      <WithdrawAll />
                    </div>
                  ) : address && chain?.id !== 56 ? (
                    <div className="w-full flex justify-center items-center border border-gray-300 rounded">
                      <button
                        type="submit"
                        onClick={() => switchNetwork?.(56)}
                        className="text-white bg-red-700 hover:bg-red-800 m-[50px] font-normal rounded-full text-sm p-1 ps-2 pe-2 text-center"
                      >
                        Switch To Binance Smart Chain
                      </button>
                    </div>
                  ) : (
                    <div className="w-full flex justify-center items-center border border-gray-300 rounded">
                      <button
                        onClick={() =>
                          connect({ connector: new InjectedConnector() })
                        }
                        className="text-white bg-red-700 hover:bg-red-800 m-[50px] font-normal rounded-full text-sm p-1 ps-2 pe-2 text-center"
                      >
                        Connect wallet
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-center p-5 pt-0">
                <div className="p-5 pt-3 bg-white border border-gray-200 rounded-lg shadow w-full">
                  <p
                    className="text-xs font-medium pb-2"
                    style={{ fontSize: "14px" }}
                  >
                    Withdraw Specific Amount
                  </p>
                  {address && chain?.id === 56 ? (
                    <div className="w-full flex justify-center items-center border border-gray-300 rounded">
                      <WithdrawTokenWithAmount />
                    </div>
                  ) : address && chain?.id !== 56 ? (
                    <div className="w-full flex justify-center items-center border border-gray-300 rounded">
                      <button
                        type="submit"
                        onClick={() => switchNetwork?.(56)}
                        className="text-white bg-red-700 hover:bg-red-800 m-[50px] font-normal rounded-full text-sm p-1 ps-2 pe-2 text-center"
                      >
                        Switch To Binance Smart Chain
                      </button>
                    </div>
                  ) : (
                    <div className="w-full flex justify-center items-center border border-gray-300 rounded">
                      <button
                        onClick={() =>
                          connect({ connector: new InjectedConnector() })
                        }
                        className="text-white bg-red-700 hover:bg-red-800 m-[50px] font-normal rounded-full text-sm p-1 ps-2 pe-2 text-center"
                      >
                        Connect wallet
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-center p-5 pt-0">
                <div className="p-5 pt-3 bg-white border border-gray-200 rounded-lg shadow w-full">
                  <p
                    className="text-xs font-medium pb-2"
                    style={{ fontSize: "14px" }}
                  >
                    Clear Stuck BNB Balance
                  </p>
                  {address && chain?.id === 56 ? (
                    <div className="w-full flex justify-center items-center border border-gray-300 rounded">
                      <ClearStuckBNBBalance />
                    </div>
                  ) : address && chain?.id !== 56 ? (
                    <div className="w-full flex justify-center items-center border border-gray-300 rounded">
                      <button
                        type="submit"
                        onClick={() => switchNetwork?.(56)}
                        className="text-white bg-red-700 hover:bg-red-800 m-[50px] font-normal rounded-full text-sm p-1 ps-2 pe-2 text-center"
                      >
                        Switch To Binance Smart Chain
                      </button>
                    </div>
                  ) : (
                    <div className="w-full flex justify-center items-center border border-gray-300 rounded">
                      <button
                        onClick={() =>
                          connect({ connector: new InjectedConnector() })
                        }
                        className="text-white bg-red-700 hover:bg-red-800 m-[50px] font-normal rounded-full text-sm p-1 ps-2 pe-2 text-center"
                      >
                        Connect wallet
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-center p-5 pt-0">
                <div className="p-5 pt-3 bg-white border border-gray-200 rounded-lg shadow w-full">
                  <p
                    className="text-xs font-medium pb-2"
                    style={{ fontSize: "14px" }}
                  >
                    Get User Stake Info
                  </p>
                  {address && chain?.id === 56 ? (
                    <div className="w-full flex justify-center items-center border border-gray-300 rounded">
                      <UserStakeInfos />
                    </div>
                  ) : address && chain?.id !== 56 ? (
                    <div className="w-full flex justify-center items-center border border-gray-300 rounded">
                      <button
                        type="submit"
                        onClick={() => switchNetwork?.(56)}
                        className="text-white bg-red-700 hover:bg-red-800 m-[50px] font-normal rounded-full text-sm p-1 ps-2 pe-2 text-center"
                      >
                        Switch To Binance Smart Chain
                      </button>
                    </div>
                  ) : (
                    <div className="w-full flex justify-center items-center border border-gray-300 rounded">
                      <button
                        onClick={() =>
                          connect({ connector: new InjectedConnector() })
                        }
                        className="text-white bg-red-700 hover:bg-red-800 m-[50px] font-normal rounded-full text-sm p-1 ps-2 pe-2 text-center"
                      >
                        Connect wallet
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-center p-5 pt-0">
                <div className="p-5 pt-3 bg-white border border-gray-200 rounded-lg shadow w-full">
                  <p
                    className="text-xs font-medium pb-2"
                    style={{ fontSize: "14px" }}
                  >
                    FAQs
                  </p>
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="mb-2 border bg-white border-gray-200 rounded-lg cursor-pointer"
                      onClick={() => toggleFAQ(index)}
                    >
                      <div className="flex p-2 ps-4 pe-4 bg-white hover:bg-gray-50 justify-between items-center">
                        <h3 className="text-sm font-small">{faq.question}</h3>
                        <span className="text-gray-500">
                          {activeIndex === index ? "-" : "+"}
                        </span>
                      </div>
                      {activeIndex === index && (
                        <p className="mt-2 pb-2 ps-4 pe-4 bg-white text-sm text-gray-500 cursor-text">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className="flex order-1 lg:order-2  lg:w-full md:w-[748px] w-[432px]">
            {/* <div className="flex order-1 lg:order-2  lg:w-[432px] md:w-[748px] w-[432px]"> */}
            <div className=" p-5 bg-white border border-gray-200 rounded-lg shadow lg:-ml-3 ml-5 mb-5 sm:mt-5 h-max w-full">
              <div className="flex justify-between pb-3">
                <p className="text-xs font-medium" style={{ fontSize: "14px" }}>
                  Cicca-Defi Statistic
                </p>
                <p className="text-gray-700" style={{ fontSize: "13px" }}>
                  <a href="https://seicloud.io/staking" target="blank">
                    View on Cicca-Defi
                  </a>
                </p>
              </div>
              <div className="flex justify-between pb-3">
                <p
                  className="text-gray-700 pe-3 whitespace-nowrap"
                  style={{ fontSize: "13px" }}
                >
                  Total staked with Cicca-Defi
                </p>
                <p
                  className="text-gray-700 ps-3  whitespace-nowrap"
                  style={{ fontSize: "13px" }}
                >
                  {String(stakeAmount) || 0} Cicca-Defi
                </p>
              </div>
              <div className="flex justify-between pb-3">
                <p
                  className="text-gray-700  whitespace-nowrap"
                  style={{ fontSize: "13px" }}
                >
                  {" "}
                  Cicca-Defi market cap
                </p>
                <p
                  className="text-gray-700  whitespace-nowrap"
                  style={{ fontSize: "13px" }}
                >
                  {" "}
                  $0
                </p>
              </div>
              <div className="flex justify-between pb-3">
                <p
                  className="text-gray-700  whitespace-nowrap"
                  style={{ fontSize: "13px" }}
                >
                  APY
                </p>
                <p
                  className="text-gray-700  whitespace-nowrap"
                  style={{ fontSize: "13px" }}
                >
                  {String(apy) || 0}
                </p>
              </div>
              <div className="flex justify-between pb-3">
                <p
                  className="text-gray-700  whitespace-nowrap"
                  style={{ fontSize: "13px" }}
                >
                  First Time Reward
                </p>
                <p
                  className="text-gray-700  whitespace-nowrap"
                  style={{ fontSize: "13px" }}
                >
                  {String(firstTimeReward) || 0}
                </p>
              </div>
              <div className="flex justify-between pb-3">
                <p
                  className="text-gray-700  whitespace-nowrap"
                  style={{ fontSize: "13px" }}
                >
                  Stake Time
                </p>
                <p
                  className="text-gray-700  whitespace-nowrap"
                  style={{ fontSize: "13px" }}
                >
                  {String(stakeTime) || 0}
                </p>
              </div>
              <div className="flex justify-between pb-3">
                <p className="text-gray-700" style={{ fontSize: "13px" }}>
                  Claim Time
                </p>
                <p className="text-gray-700" style={{ fontSize: "13px" }}>
                  {String(claimTime) || 0}
                </p>
              </div>
              <div className="flex justify-center ">
                <Image
                  src={img}
                  alt="img"
                  className="h-[150px] w-[130px]"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Staking;
