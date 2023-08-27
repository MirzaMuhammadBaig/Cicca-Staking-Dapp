import Image from "next/image";

import Wallet from "../../wallet-connect/Wallet.tsx";
import nav_icon from "../../assets/nav-icon.png";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { TiFlashOutline } from "react-icons/ti";
import { FaArrowsAltV } from "react-icons/fa";
import { RiTokenSwapLine } from "react-icons/ri";
import { useRouter } from "next/router";

const Navbar = () => {
  const [open, setOpen] = useState<any>(false);

  const toggleOpen = () => {
    setOpen((prevOpen: any) => !prevOpen); // Using the functional update form
  };

  const [activeLink, setActiveLink] = useState<string | undefined>("");

  const router = useRouter();
  const [] = useState();

  // Access the current URL
  const currentUrl = router.asPath;

  console.log("currentUrl", currentUrl);

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
          <p className="text-white ps-1">SeiCloud</p>
        </div>
        <div className="items-center pe-10 p-2 hidden md:flex">
          <Wallet />
        </div>
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          onClick={toggleOpen}
          className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden  focus:outline-none "
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
      </nav>
      {/* SideBar Mobile */}
      <div className="sm:hidden">
        <aside
          id="default-sidebar"
          onClick={toggleOpen}
          className={`${
            open
              ? "top-0 bg-white left-0 absolute md:relative h-full z-40 w-64 transition-transform translate-x-0 text-black"
              : "top-0 bg-white left-0 absolute md:relative h-full z-40 w-64 transition-transform -translate-x-full sm:translate-x-0 text-black"
          }`}
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto ">
            <ul className="space-y-2 font-small">
              <li>
                <Link
                  className={`p-2 flex items-center rounded-lg group m-2 ${
                    isLinkActive("/staking")
                      ? "bg-red-700 text-white"
                      : "bg-slate-100"
                  }`}
                  onClick={() => handleLinkClick("/staking")}
                  href="/staking"
                >
                  <TiFlashOutline
                    size="1.4em"
                    color={isLinkActive("/staking") ? "white" : "black"}
                  />
                  <div className="flex-1 ml-3 whitespace-nowrap">Staking</div>
                </Link>
              </li>

              <li>
                <Link
                  className={`p-2 flex items-center rounded-lg group m-2 ${
                    isLinkActive("/bridge")
                      ? "bg-red-700 text-white"
                      : "bg-slate-100"
                  }`}
                  onClick={() => handleLinkClick("/bridge")}
                  href="/bridge"
                >
                  <FaArrowsAltV
                    size="1.4em"
                    color={isLinkActive("/bridge") ? "white" : "black"}
                  />
                  <div className="flex-1 ml-3 whitespace-nowrap">Bridge</div>
                </Link>
              </li>

              <li>
                <Link
                  className={`p-2 flex items-center rounded-lg group m-2 ${
                    isLinkActive("/swap")
                      ? "bg-red-700 text-white"
                      : "bg-slate-100"
                  }`}
                  onClick={() => handleLinkClick("/swap")}
                  href="/swap"
                >
                  <RiTokenSwapLine
                    size="1.4em"
                    color={isLinkActive("/swap") ? "white" : "black"}
                  />
                  <div className="flex-1 ml-3 whitespace-nowrap">Swap</div>
                </Link>
              </li>
              <li>
                <div className="items-center pe-10 p-2 flex">
                  <Wallet />
                </div>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Navbar;
