import React, { useEffect, useState } from "react";
import Link from "next/link";

import { TiFlashOutline } from "react-icons/ti";
import { FaArrowsAltV } from "react-icons/fa";
import { RiTokenSwapLine } from "react-icons/ri";
import { useRouter } from "next/router";

const SideBar = () => {
  const [activeLink, setActiveLink] = useState<string | undefined>("");

  const router = useRouter();
  const [] = useState();

  // Access the current URL
  const currentUrl = router.asPath;

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
      <div className="hidden lg:flex">
        <aside
          id="default-sidebar"
          className="top-0 bg-white left-0 absolute lg:relative h-full z-40 w-64 transition-transform -translate-x-full md:translate-x-0 text-black"
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
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
};

export default SideBar;
