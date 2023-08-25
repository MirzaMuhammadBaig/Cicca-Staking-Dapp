import React, { useState } from 'react';
import Link from 'next/link';

import { TiFlashOutline } from 'react-icons/ti'
import { FaArrowsAltV } from 'react-icons/fa'
import { RiTokenSwapLine } from 'react-icons/ri'


const SideBar = () => {

   const [activeItem, setActiveItem] = useState<string | null>(null);

   const handleItemClick = (itemName: string) => {
      setActiveItem(itemName);
   };

   return (
      <div>
         <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path clipRule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
         </button>

         <aside id="default-sidebar" className="fixed bg-white left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 text-black" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto ">
               <ul className="space-y-2 font-small">

                  <li className={`p-1 ${activeItem === 'staking' ? 'bg-red-700' : 'bg-slate-100'} rounded-lg`}>
                     <p className="flex items-center p-2 rounded-lg group" onClick={() => handleItemClick('staking')}>
                        <TiFlashOutline size="1.4em" color={activeItem === 'staking' ? 'white' : 'black'} />
                        <Link className={`flex-1 ml-3 whitespace-nowrap ${activeItem === 'staking' ? 'text-white' : ''}`} href="/staking">Staking</Link>
                     </p>
                  </li>
                  <li className={`p-1 ${activeItem === 'bridge' ? 'bg-red-700' : 'bg-slate-100'} rounded-lg`}>
                     <p className="flex items-center p-2 rounded-lg group" onClick={() => handleItemClick('bridge')}>
                        <FaArrowsAltV size="1.4em" color={activeItem === 'bridge' ? 'white' : 'black'} />
                        <Link className={`flex-1 ml-3 whitespace-nowrap ${activeItem === 'bridge' ? 'text-white' : ''}`} href="/bridge">Bridge</Link>
                     </p>
                  </li>
                  <li className={`p-1 ${activeItem === 'swap' ? 'bg-red-700' : 'bg-slate-100'} rounded-lg`}>
                     <p className="flex items-center p-2 rounded-lg group" onClick={() => handleItemClick('swap')}>
                        <RiTokenSwapLine size="1.4em" color={activeItem === 'swap' ? 'white' : 'black'} />
                        <Link className={`flex-1 ml-3 whitespace-nowrap ${activeItem === 'swap' ? 'text-white' : ''}`} href="/swap">Swap</Link>
                     </p>
                  </li>
               </ul>
            </div>
         </aside>



      </div>
   )
}

export default SideBar