import React from 'react'
import Image from 'next/image'

import Wallet from '../wallet-connect/Wallet.tsx'
import nav_icon from "../../assets/nav-icon.png"


const Navbar = () => {
  return (
    <>

      <nav className="bg-gray-900 flex border-gray-200 justify-between">
        <div className="flex flex-wrap items-center ps-10 p-2">
          <Image
            className="h-8 w-auto"
            src={nav_icon}
            alt="Website Logo"
            width={180}
            height={37}
            priority
          />
          <p className='text-white ps-1'>SeiCloud</p>
        </div>
        <div className="flex items-center pe-10 p-2">
          <Wallet />
        </div>
      </nav>
    </>
  )
}

export default Navbar