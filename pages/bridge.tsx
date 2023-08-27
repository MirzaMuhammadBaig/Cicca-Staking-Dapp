import React from 'react'
import Navbar from './navbar/Navbar.tsx'
import SideBar from './sidebar/SideBar.tsx'
import Image from 'next/image'

import img from "../assets/bridge.jpeg"

const Bridge = () => {
  return (
    <>
      <Navbar />

      <div >
        <div className="flex items-center justify-center pt-10">
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg hover:shadow-xl shadow-lg p-8 pb-0">
            <Image className="rounded-lg hover:shadow-lg " src={img} alt="bridge image" />
            <div className="pb-5 pt-3">
              <h5 className="text-xl text-center font-semibold tracking-tight text-black">Bridging Will Come Soon</h5>
            </div>
            <div className='ps-4 pe-4'>
              <hr /><hr />
            </div>
            <div className='flex items-center justify-center'>
              <SideBar />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bridge