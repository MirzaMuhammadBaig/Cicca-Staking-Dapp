import Navbar from './navbar/Navbar.tsx'
import SideBar from './sidebar/SideBar.tsx'
import Image from 'next/image'
import icon from "../assets/nav-icon.png"
import { useEffect, useState } from 'react'
import { BsArrowUpRight } from "react-icons/bs"

const Staking = () => {
  const [activeBtn, setActiceBtn] = useState<string | undefined>('')

  const handleOnclick = (btn: string) => {
    setActiceBtn(btn)
  }

  useEffect(() => {
    setActiceBtn("1")
  }, [])

  const isLinkBtn = (btn: string | undefined) => {
    return activeBtn === btn;
  };

  return (
    <>
      <Navbar />
      <SideBar />
      <div className=''>
        <div className="flex justify-center p-5" >
          <div className="block max-w-lg p-3 bg-white border border-gray-200 rounded-lg shadow w-full">
            <div className='flex justify-between pb-3'>
              <p className='text-xs font-medium' style={{ fontSize: "11px" }}>Stake SeiCloud</p>
              <p className='text-gray-700' style={{ fontSize: "10px" }}>Stake SeiCloud and receive SeiCloud while staking</p>
            </div>

            <div className="w-full rounded-lg" style={{ background: "rgba(241,245,249,255)" }}>
              <div className='flex justify-between rounded-lg'>
                <p className='text-gray-700 p-3' style={{ fontSize: "10px" }}>Available To Stake</p>
                <p className='text-xs font-medium p-3' style={{ fontSize: "11px" }}>0 SeiCloud</p>
              </div>
              <div className='ps-3 pe-3'>
                <hr />
                <hr />
              </div>
              <div className='flex justify-between rounded-lg p-3' >
                <div className='text-gray-700' style={{ fontSize: "10px" }}>Staked Amount</div>
                <div className='text-xs font-medium' style={{ fontSize: "11px" }}>0 SeiCloud</div>
              </div>
              <div className='flex justify-between rounded-lg p-3 pt-0'  >
                <div className='text-gray-700 mt-[7px]' style={{ fontSize: "10px" }}>SeiCloud APY</div>
                <div className=''>
                  <span className={`text-black  font-thin hover:cursor-pointer hover:bg-gray-100  font-xs rounded-full text-sm ps-[2px] pe-[2px] p[1px] me-[2px] ${isLinkBtn('1') ? 'bg-white text-red-700 border border-red-700' : 'bg-gray-100 text-black border border-gray-300'
                    }`} style={{ fontSize: "9px" }} onClick={() => { handleOnclick("1") }} >1 Month (100%)</span>
                  <span className={`text-black font-thin hover:cursor-pointer hover:bg-gray-100  font-xs rounded-full text-sm  ps-[2px] pe-[2px] p[1px] me-[2px] ${isLinkBtn('2') ? 'bg-white text-red-700 border border-red-700' : 'bg-gray-100 text-black border border-gray-300'
                    }`} style={{ fontSize: "9px" }} onClick={() => { handleOnclick("2") }}>3 Months (400%)</span>
                  <span className={`text-black bg-gray-100  font-thin hover:cursor-pointer hover:bg-gray-100  font-xs rounded-full text-sm  ps-[2px] pe-[2px] p[1px] ${isLinkBtn('3') ? 'bg-white text-red-700 border border-red-700' : 'bg-gray-100 text-black border border-gray-300'
                    }`} style={{ fontSize: "9px" }} onClick={() => { handleOnclick("3") }}>6 Month (1000%)</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-3 rounded-lg" style={{ background: "rgba(241, 245, 249, 255)" }}>
              <div className="flex ">
                <Image className='m-3 mt-3.5 ' src={icon} alt="Input Icon" style={{ width: "24px", height: "24px" }}></Image>
                <input
                  type="text"
                  name="amount"
                  id="amount"
                  className="text-black text-xs rounded-lg block w-max mt-1.5 pt-2 p-2.5 focus:outline-none"
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

        <div className="flex justify-center p-5" >
          <div className=" max-w-lg p-3 bg-white border border-gray-200 rounded-lg shadow w-full">
            <p className='text-xs font-medium pb-2' style={{ fontSize: "11px" }}>Claim/Unstake</p>
            <div className="w-full flex justify-center items-center border border-gray-300  rounded" >
              <button type="button" className="text-white  bg-red-700 hover:bg-red-800 m-[50px]  font-normal rounded-full text-sm p-1 ps-2 pe-2 text-center ">Switch To Binance Smart Chain</button>
            </div>
          </div>
        </div>

        <div className="flex justify-center p-5" >
          <div className=" max-w-lg p-3 bg-white border border-gray-200 rounded-lg shadow w-full">
            <p className='text-xs font-medium pb-2' style={{ fontSize: "11px" }}>Withdraw</p>
            <div className="w-full flex justify-center items-center border border-gray-300  rounded" >
              <button type="button" className="text-white  bg-red-700 hover:bg-red-800 m-[50px]  font-normal rounded-full text-sm p-1 ps-2 pe-2 text-center ">Switch To Binance Smart Chain</button>
            </div>
          </div>
        </div>

      </div>



    </>
  )
}

export default Staking