import React from 'react'
import Image from 'next/image'

import Wallet from '../wallet-connect/Wallet.tsx'
import nav_icon from "../../assets/nav-icon.png"


const Navbar = () => {
    return (
        <>
        <div className='bg-black'>
            <nav className="bg-black-800 ps-5 pe-5">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-shrink-0 items-center">
                        <Image
                            className="h-8 w-auto"
                            src={nav_icon}
                            alt="Website Logo"
                            width={180}
                            height={37}
                            priority
                        />
                        <p className='text-white'>SeiCloud</p>
                    </div>

                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 ">
                            <Wallet />
                    </div>
                </div>
            </nav>

        </div>
        </>
    )
}

export default Navbar