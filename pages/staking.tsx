import Navbar from './navbar/Navbar.tsx'
import SideBar from './sidebar/SideBar.tsx'
import Link from 'next/link'
import Image from 'next/image'
import icon from "../assets/nav-icon.png"

const Staking = () => {
  return (
    <>
      <Navbar />
      <SideBar />
      <div >
        <div className="flex items-center justify-center p-5">
          <div className="block max-w-lg p-3 bg-white border border-gray-200 rounded-lg shadow ">
            <div className='flex justify-between pb-3'>
              <p className='text-xs font-medium'>Stake SeiCloud</p>
              <p className='text-gray-700' style={{ fontSize: "11px" }}>Stake SeiCloud and receive SeiCloud while staking</p>
            </div>

            <div className="w-full rounded-lg" style={{ background: "rgba(241,245,249,255)" }}>
              <div className='flex justify-between rounded-lg'>
                <p className='text-gray-700 p-3' style={{ fontSize: "11px" }}>Available To Stake</p>
                <p className='text-xs font-medium p-3'>0 SeiCloud</p>
              </div>
              <div className='ps-3 pe-3'>
                <hr />
                <hr />
              </div>
              <div className='flex justify-between rounded-lg p-3' >
                <div className='text-gray-700' style={{ fontSize: "11px" }}>Staked Amount</div>
                <div className='text-xs font-medium '>0 SeiCloud</div>
              </div>
              <div className='flex flex-row justify-between rounded-lg p-3 pt-0'  >
                <div className='text-gray-700 mt-1' style={{ fontSize: "11px" }}>SeiCloud APY</div>
                <div className=''>
                  <span className="text-black bg-white border font-thin hover:cursor-pointer hover:bg-gray-100  font-xs rounded-full text-sm  p-1" style={{ fontSize: "9px" }}>1 Month (100%)</span>
                  <span className="text-black bg-white border font-thin hover:cursor-pointer hover:bg-gray-100 font-xs rounded-full text-sm  p-1" style={{ fontSize: "9px" }}>3 Months (400%)</span>
                  <span className="text-black bg-white border font-thin hover:cursor-pointer hover:bg-gray-100 font-xs rounded-full text-sm  p-1" style={{ fontSize: "9px" }}>6 Month (1000%)</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-3 rounded-lg" style={{ background: "rgba(241, 245, 249, 255)" }}>
              <div className="flex ">
                <Image className='m-1 mt-1.5' src={icon} alt="Input Icon" style={{ width: "32px", height: "32px" }}></Image>
                <input
                  type="text"
                  name="amount"
                  id="amount"
                  className="text-black text-xs rounded-lg block w-full mt-1.5 pt-2 p-2.5 focus:outline-none"
                  placeholder="Amount"
                  style={{ background: "rgba(241, 245, 249, 255)" }}
                  required
                />
              </div>
              <div>
              <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm m-2 p-1 ps-3 pe-3 ">Max</button>

              </div>
            </div>

            <p className="font-normal text-gray-700 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </div>

        </div>
      </div>

    </>
  )
}

export default Staking