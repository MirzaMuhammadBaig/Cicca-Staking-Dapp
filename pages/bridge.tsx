import React from 'react'
import Navbar from './navbar/Navbar.tsx'
import SideBar from './sidebar/SideBar.tsx'
import Image from 'next/image'

import img from "../assets/bridge.jpeg"

const Bridge = () => {
  return (
    <>
      <Navbar />
      <SideBar />

      <div >
        <div className="flex items-center justify-center p-5">
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg">
              <Image className="p-8 rounded-t-lg" src={img} alt="bridge image" />
            <div className=" pb-5">
                <h5 className="text-xl text-center font-semibold tracking-tight text-black">Bridge Will Come Soon</h5>             
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bridge