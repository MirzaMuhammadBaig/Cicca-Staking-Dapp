import React from 'react'

const SideBar = () => {
   return (
      <div>

         <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
         </button>

         <aside id="default-sidebar" className="fixed bg-white left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 text-black" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto ">
               <ul className="space-y-2 font-small">

                  <li className='p-1 bg-slate-100 rounded-lg'>
                     <a href="#" className="flex items-center p-2 rounded-lg group">
                        <svg className="flex-shrink-0 w-5 h-5 text-black transition duration-75 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                           <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
                     </a>
                  </li>
                  <li className='p-1 bg-slate-100 rounded-lg'>
                     <a href="#" className="flex items-center p-2 rounded-lg group">
                        <svg className="flex-shrink-0 w-5 h-5 text-black transition duration-75 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
                     </a>
                  </li>
                  <li className='p-1 bg-slate-100 rounded-lg'>
                     <a href="#" className="flex items-center p-2 rounded-lg group">
                        <svg className="flex-shrink-0 w-5 h-5 text-black transition duration-75 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
                     </a>
                  </li>
               </ul>
            </div>
         </aside>



      </div>
   )
}

export default SideBar