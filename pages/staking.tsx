import React from 'react'
import Navbar from './navbar/Navbar.tsx'
import SideBar from './sidebar/SideBar.tsx'

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

            <div className="w-full bg-gray-100 rounded-lg">
              <div className='flex justify-between bg-gray-100 rounded-lg'>
                <p className='text-gray-700 p-3' style={{ fontSize: "11px" }}>Available To Stake</p>
                <p className='text-xs font-medium p-3'>0 SeiCloud</p>
              </div>
              <div className='ps-3 pe-3'>

                <hr />
                <hr />
              </div>
              <div className='flex justify-between bg-gray-100 rounded-lg'>
                <p className='text-gray-700 p-3 pb-0' style={{ fontSize: "11px" }}>Staked Amount</p>
                <p className='text-xs font-medium p-3'>0 SeiCloud</p>
              </div>
              <p className='text-gray-700 p-3 pt-0' style={{ fontSize: "11px" }}>SeiCloud APY</p>



              <button type="button" className="text-white bg-gray-800 hover:bg-gray-100 focus:outline-none font-xs rounded-full text-sm  ps-2 pe-2" style={{ fontSize: "9px" }}>1 Month (100%)</button>
              <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Light</button>
              <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Green</button>



              <div id="defaultTabContent">
                <div className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
                  <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Powering innovation & trust at 200,000+ companies worldwide</h2>
                  <p className="mb-3 text-gray-500 dark:text-gray-400">Empower Developers, IT Ops, and business teams to collaborate at high velocity. Respond to changes and deliver great customer and employee service experiences fast.</p>
                  <a href="#" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
                    Learn more
                    <svg className="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                    </svg>
                  </a>
                </div>
                <div className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="services" role="tabpanel" aria-labelledby="services-tab">
                  <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">We invest in the world’s potential</h2>

                  <ul role="list" className="space-y-4 text-gray-500 dark:text-gray-400">
                    <li className="flex space-x-2 items-center">
                      <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      <span className="leading-tight">Dynamic reports and dashboards</span>
                    </li>
                    <li className="flex space-x-2 items-center">
                      <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      <span className="leading-tight">Templates for everyone</span>
                    </li>
                    <li className="flex space-x-2 items-center">
                      <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      <span className="leading-tight">Development workflow</span>
                    </li>
                    <li className="flex space-x-2 items-center">
                      <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      <span className="leading-tight">Limitless business automation</span>
                    </li>
                  </ul>
                </div>
                <div className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="statistics" role="tabpanel" aria-labelledby="statistics-tab">
                  <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                    <div className="flex flex-col">
                      <dt className="mb-2 text-3xl font-extrabold">73M+</dt>
                      <dd className="text-gray-500 dark:text-gray-400">Developers</dd>
                    </div>
                    <div className="flex flex-col">
                      <dt className="mb-2 text-3xl font-extrabold">100M+</dt>
                      <dd className="text-gray-500 dark:text-gray-400">Public repositories</dd>
                    </div>
                    <div className="flex flex-col">
                      <dt className="mb-2 text-3xl font-extrabold">1000s</dt>
                      <dd className="text-gray-500 dark:text-gray-400">Open source projects</dd>
                    </div>
                  </dl>
                </div>
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