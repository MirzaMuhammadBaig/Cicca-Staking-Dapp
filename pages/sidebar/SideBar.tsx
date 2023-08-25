import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { TiFlashOutline } from 'react-icons/ti'
import { FaArrowsAltV } from 'react-icons/fa'
import { RiTokenSwapLine } from 'react-icons/ri'
import { useRouter } from 'next/router';


const SideBar = () => {

   const [activeLink, setActiveLink] = useState<string | undefined>('');
   const router = useRouter();

   // Access the current URL
  const currentUrl = router.asPath;

   console.log("currentUrl",currentUrl)

   const handleLinkClick = (link: string) => {
      setActiveLink(link);
   };

   useEffect(() => {
         setActiveLink(currentUrl);
   }, []);

   const isLinkActive = (link: string | undefined) => {
      return activeLink === link;
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
                  <li>
                     <Link className={`p-2 flex items-center rounded-lg group m-2 ${isLinkActive('/staking') ? 'bg-red-700 text-white' : 'bg-slate-100'
                        }`}
                        onClick={() => handleLinkClick('/staking')} href="/staking">

                        <TiFlashOutline size="1.4em" color={isLinkActive('/staking') ? 'white' : 'black'} />
                        <div className="flex-1 ml-3 whitespace-nowrap">Staking</div>
                     </Link>
                  </li>

                  <li>
                     <Link className={`p-2 flex items-center rounded-lg group m-2 ${isLinkActive('/bridge') ? 'bg-red-700 text-white' : 'bg-slate-100'
                        }`}
                        onClick={() => handleLinkClick('/bridge')} href="/bridge">

                        <FaArrowsAltV size="1.4em" color={isLinkActive('/bridge') ? 'white' : 'black'} />
                        <div className="flex-1 ml-3 whitespace-nowrap">Bridge</div>
                     </Link>
                  </li>

                  <li>
                     <Link className={`p-2 flex items-center rounded-lg group m-2 ${isLinkActive('/swap') ? 'bg-red-700 text-white' : 'bg-slate-100'
                        }`}
                        onClick={() => handleLinkClick('/swap')} href="/swap">

                        <RiTokenSwapLine size="1.4em" color={isLinkActive('/swap') ? 'white' : 'black'} />
                        <div className="flex-1 ml-3 whitespace-nowrap">Swap</div>
                     </Link>
                  </li>
               </ul>
            </div>
         </aside>



      </div>
   )
}

export default SideBar

// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';

// import { TiFlashOutline } from 'react-icons/ti'
// import { FaArrowsAltV } from 'react-icons/fa'
// import { RiTokenSwapLine } from 'react-icons/ri'


// const SideBar = () => {

//    return (
//       <div>
//          <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
//             <span className="sr-only">Open sidebar</span>
//             <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                <path clipRule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
//             </svg>
//          </button>

//          <aside id="default-sidebar" className="fixed bg-white left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 text-black" aria-label="Sidebar">
//             <div className="h-full px-3 py-4 overflow-y-auto ">
//                <ul className="space-y-2 font-small">
//                   <Link href="/staking">
//                      <li className='p-2 flex items-center bg-slate-100 rounded-lg group m-2'>
//                         <TiFlashOutline size="1.4em" color="black" />
//                         <Link className="flex-1 ml-3 whitespace-nowrap" href="/staking">Staking</Link>
//                      </li>
//                   </Link>

//                   <Link href="/bridge">
//                      <li className='p-2 flex items-center bg-slate-100 rounded-lg group m-2'>
//                         <FaArrowsAltV size="1.4em" color="black" />
//                         <Link className="flex-1 ml-3 whitespace-nowrap" href="/bridge">Bridge</Link>
//                      </li>
//                   </Link>

//                   <Link href="/swap">
//                      <li className='p-2 flex items-center bg-slate-100 rounded-lg group m-2'>
//                         <RiTokenSwapLine size="1.4em" color="black" />
//                         <Link className="flex-1 ml-3 whitespace-nowrap" href="/swap">Swap</Link>
//                      </li>
//                   </Link>
//                </ul>
//             </div>
//          </aside>



//       </div>
//    )
// }

// export default SideBar