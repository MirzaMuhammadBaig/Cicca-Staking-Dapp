import Navbar from './navbar/Navbar.tsx'
import SideBar from './sidebar/SideBar.tsx'
import Image from 'next/image'
import icon from "../assets/nav-icon.png"
import { useEffect, useState } from 'react'
import { ethers } from "ethers";
import { BsArrowUpRight } from "react-icons/bs"

import img from "../assets/stakePagePic.webp"

const Staking = () => {
  const [activeBtn, setActiceBtn] = useState<string | undefined>('')
  const [activeIndex, setActiveIndex] = useState<null | string | number>(null);

  const handleOnclick = (btn: string) => {
    setActiceBtn(btn)
  }

  useEffect(() => {
    setActiceBtn("1")
    if ((window as any).ethereum) {
      console.log("Ethereum", (window as any).ethereum.chainId);
    } else {
      console.log("Ethereum provider not detected.");
    }
  }, [])

  const isLinkBtn = (btn: string | undefined) => {
    return activeBtn === btn;
  };

  const faqs = [
    {
      question: 'What are SeiCloud Staking DApps?',
      answer: "SeiCloud Staking DApps are decentralized applications that enable users to participate in the staking process of the SeiCloud network. By staking $SEICLOUD tokens, users contribute to the network's security, consensus, and overall functionality.",
    },
    {
      question: 'How does Staking Work in SeiCloud?',
      answer: 'Staking in SeiCloud involves locking a certain amount of $SEICLOUD tokens as collateral to support network operations. This contributes to transaction validation and security. In return, stakers receive rewards in the form of additional $SEICLOUD tokens.',
    },
    {
      question: 'What are the Benefits of Staking in SeiCloud?',
      answer: "Staking in SeiCloud offers a dual benefit: you earn rewards for your contribution to the network's health and security while supporting the ecosystem's growth. Additionally, you play a role in shaping the network's governance decisions.",
    },
    {
      question: 'How Can I Stake My $SEICLOUD Tokens?',
      answer: "To stake your $SEICLOUD tokens, interact with the Staking DApp on the SeiCloud platform. Connect your compatible wallet, choose the amount to stake, and confirm the transaction. Your staked tokens will contribute to the network's consensus."
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
      <div className='flex'>
        <SideBar />
        <div className='flex flex-col w-full -ml-4 sm:'>
          <div className="flex justify-center p-5 ps-10 pe-1" >
            <div className="p-3 bg-white border border-gray-200 rounded-lg shadow w-full">
              <div className='flex justify-between pb-3 w-full'>
                <p className='text-xs font-medium' style={{ fontSize: "14px" }}>Stake SeiCloud</p>
                <p className='text-gray-700' style={{ fontSize: "13px" }}>Stake SeiCloud and receive SeiCloud while staking</p>
              </div>

              <div className="w-full rounded-lg" style={{ background: "rgba(241,245,249,255)" }}>
                <div className='flex justify-between rounded-lg'>
                  <p className='text-gray-700 p-3' style={{ fontSize: "13px" }}>Available To Stake</p>
                  <p className='text-xs font-medium p-3' style={{ fontSize: "14px" }}>0 SeiCloud</p>
                </div>
                <div className='ps-3 pe-3'>
                  <hr />
                  <hr />
                </div>
                <div className='flex justify-between rounded-lg p-3' >
                  <div className='text-gray-700' style={{ fontSize: "13px" }}>Staked Amount</div>
                  <div className='text-xs font-medium' style={{ fontSize: "14px" }}>0 SeiCloud</div>
                </div>
                <div className='flex justify-between rounded-lg p-3 pt-0'  >
                  <div className='text-gray-700 mt-[2px]' style={{ fontSize: "13px" }}>SeiCloud APY</div>
                  <div className=''>
                    <span className={`text-black  font-thin hover:cursor-pointer hover:bg-gray-100  font-xs rounded-full text-sm ps-1 pe-1 p-[2px] me-[4px] ${isLinkBtn('1') ? 'bg-white text-red-700 border border-red-700' : 'bg-gray-100 text-black border border-gray-300'
                      }`} style={{ fontSize: "12px" }} onClick={() => { handleOnclick("1") }} >1 Month (100%)</span>
                    <span className={`text-black font-thin hover:cursor-pointer hover:bg-gray-100  font-xs rounded-full text-sm  ps-1 pe-1 p-[2px] me-[4px] ${isLinkBtn('2') ? 'bg-white text-red-700 border border-red-700' : 'bg-gray-100 text-black border border-gray-300'
                      }`} style={{ fontSize: "12px" }} onClick={() => { handleOnclick("2") }}>3 Months (400%)</span>
                    <span className={`text-black bg-gray-100  font-thin hover:cursor-pointer hover:bg-gray-100  font-xs rounded-full text-sm  ps-1 pe-1 p-[2px]  ${isLinkBtn('3') ? 'bg-white text-red-700 border border-red-700' : 'bg-gray-100 text-black border border-gray-300'
                      }`} style={{ fontSize: "12px" }} onClick={() => { handleOnclick("3") }}>6 Month (1000%)</span>
                  </div>
                </div>
              </div>

              <div className="flex   justify-between mt-3 rounded-lg" style={{ background: "rgba(241, 245, 249, 255)" }}>
                <div className="flex">
                  <Image className='m-3 mt-3.5 ' src={icon} alt="Input Icon" style={{ width: "24px", height: "24px" }}></Image>
                  <input
                    type="text"
                    name="amount"
                    id="amount"
                    className="text-black text-xs rounded-lg block w-auto mt-1.5 pt-2 p-2.5 focus:outline-none"
                    placeholder="Amount"
                    style={{ background: "rgba(241, 245, 249, 255)" }}
                    required
                  />
                </div>
                <div>
                  <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm m-3 p-1 ps-3 pe-3 ">Max</button>
                </div>
              </div>
              <button type="submit" className="w-full mt-3 flex justify-center text-red-700 border border-red-700 hover:bg-gray-100 focus:outline-none  font-normal rounded-lg text-sm px-5 py-2.5 text-center" >SWITCH TO BINANACE SMART CHAIN
                <div className='ms-4 mt-1'>
                  <BsArrowUpRight />
                </div>
              </button>
            </div>


          </div>

          <div className="flex justify-center p-5 pt-0 ps-10 pe-1" >
            <div className="p-5 pt-3 bg-white border border-gray-200 rounded-lg shadow w-full">
              <p className='text-xs font-medium pb-2' style={{ fontSize: "14px" }}>Claim/Unstake</p>
              <div className="w-full flex justify-center items-center border border-gray-300 rounded" >
                <button type="button" className="text-white  bg-red-700 hover:bg-red-800 m-[50px]  font-normal rounded-full text-sm p-1 ps-2 pe-2 text-center ">Switch To Binance Smart Chain</button>
              </div>
            </div>
          </div>

          <div className="flex justify-center p-5 pt-0 ps-10 pe-1" >
            <div className="p-5 pt-3 bg-white border border-gray-200 rounded-lg shadow w-full">
              <p className='text-xs font-medium pb-2' style={{ fontSize: "14px" }}>Claim Monthly Reward</p>
              <div className="w-full flex justify-center items-center border border-gray-300  rounded" >
                <button type="button" className="text-white  bg-red-700 hover:bg-red-800 m-[50px]  font-normal rounded-full text-sm p-1 ps-2 pe-2 text-center ">Switch To Binance Smart Chain</button>
              </div>
            </div>
          </div>

          <div className="flex justify-center p-5 pt-0 ps-10 pe-1" >
            <div className="p-5 pt-3 bg-white border border-gray-200 rounded-lg shadow w-full">
              <p className='text-xs font-medium pb-2' style={{ fontSize: "14px" }}>Withdraw All</p>
              <div className="w-full flex justify-center items-center border border-gray-300  rounded" >
                <button type="button" className="text-white  bg-red-700 hover:bg-red-800 m-[50px]  font-normal rounded-full text-sm p-1 ps-2 pe-2 text-center ">Switch To Binance Smart Chain</button>
              </div>
            </div>
          </div>

          <div className="flex justify-center p-5 pt-0 ps-10 pe-1" >
            <div className="p-5 pt-3 bg-white border border-gray-200 rounded-lg shadow w-full">
              <p className='text-xs font-medium pb-2' style={{ fontSize: "14px" }}>Withdraw Specific Amount</p>
              <div className="w-full flex justify-center items-center border border-gray-300  rounded" >
                <button type="button" className="text-white  bg-red-700 hover:bg-red-800 m-[50px]  font-normal rounded-full text-sm p-1 ps-2 pe-2 text-center ">Switch To Binance Smart Chain</button>
              </div>
            </div>
          </div>

          <div className="flex justify-center p-5 pt-0 ps-10 pe-1" >
            <div className="p-5 pt-3 bg-white border border-gray-200 rounded-lg shadow w-full">
              <p className='text-xs font-medium pb-2' style={{ fontSize: "14px" }}>Clear Stuck BNB Balance</p>
              <div className="w-full flex justify-center items-center border border-gray-300  rounded" >
                <button type="button" className="text-white  bg-red-700 hover:bg-red-800 m-[50px]  font-normal rounded-full text-sm p-1 ps-2 pe-2 text-center ">Switch To Binance Smart Chain</button>
              </div>
            </div>
          </div>

          <div className="flex justify-center p-5 pt-0 ps-10 pe-1" >
            <div className="p-5 pt-3 bg-white border border-gray-200 rounded-lg shadow w-full">
              <p className='text-xs font-medium pb-2' style={{ fontSize: "14px" }}>Get User Stake Info</p>
              <div className="w-full flex justify-center items-center border border-gray-300  rounded" >
                <button type="button" className="text-white  bg-red-700 hover:bg-red-800 m-[50px]  font-normal rounded-full text-sm p-1 ps-2 pe-2 text-center ">Switch To Binance Smart Chain</button>
              </div>
            </div>
          </div>

          <div className="flex justify-center p-5 pt-0 ps-10 pe-1" >
            <div className="p-5 pt-3 bg-white border border-gray-200 rounded-lg shadow w-full">
              <p className='text-xs font-medium pb-2' style={{ fontSize: "14px" }}>FAQs</p>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="mb-2 border bg-white border-gray-200 rounded-lg cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex p-2 ps-4 pe-4 bg-white hover:bg-gray-50 justify-between items-center">
                    <h3 className="text-sm font-small">{faq.question}</h3>
                    <span className="text-gray-500">
                      {activeIndex === index ? '-' : '+'}
                    </span>
                  </div>
                  {activeIndex === index && <p className="mt-2 pb-2 ps-4 pe-4 bg-white text-sm text-gray-500 cursor-text">{faq.answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='flex -ml-4'>
          <div className="ms-4 p-3 bg-white border border-gray-200 rounded-lg shadow m-5 h-max w-[25vw]">
            <div className='flex justify-between pb-3'>
              <p className='text-xs font-medium' style={{ fontSize: "14px" }}>SeiCloud Statistic</p>
              <p className='text-gray-700' style={{ fontSize: "13px" }}> <a href="https://seicloud.io/staking" target='blank'>View on Seiscan</a></p>
            </div>
            <div className='flex justify-between pb-3'>
              <p className='text-gray-700 pe-3' style={{ fontSize: "13px" }}> Total staked with SeiCloud</p>
              <p className='text-gray-700 ps-3' style={{ fontSize: "13px" }}> 0 SeiCloud</p>
            </div>
            <div className='flex justify-between pb-3'>
              <p className='text-gray-700' style={{ fontSize: "13px" }}> SeiCloud market cap</p>
              <p className='text-gray-700' style={{ fontSize: "13px" }}> $0</p>
            </div>
            <div className='flex justify-between pb-3'>
              <p className='text-gray-700' style={{ fontSize: "13px" }}> APY</p>
              <p className='text-gray-700' style={{ fontSize: "13px" }}> 3500</p>
            </div>
            <div className='flex justify-between pb-3'>
              <p className='text-gray-700' style={{ fontSize: "13px" }}> First Time Reward</p>
              <p className='text-gray-700' style={{ fontSize: "13px" }}> 3</p>
            </div>
            <div className='flex justify-between pb-3'>
              <p className='text-gray-700' style={{ fontSize: "13px" }}> Stake Time</p>
              <p className='text-gray-700' style={{ fontSize: "13px" }}> 31536000</p>
            </div>
            <div className='flex justify-between pb-3'>
              <p className='text-gray-700' style={{ fontSize: "13px" }}> Claim Time</p>
              <p className='text-gray-700' style={{ fontSize: "13px" }}> 3888000</p>
            </div>
            <div className='flex justify-center '>
              <Image src={img} alt="img" className='h-[150px] w-[130px]'></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Staking