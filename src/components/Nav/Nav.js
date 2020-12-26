import Link from 'next/link';
import React from 'react';
// import MenuSvg from '@/components/Svg/menu.svg';

const Nav = () => {
  const [navOpen, setNavOpen] = React.useState(false);

  const toggleNav = React.useCallback(
    () => setNavOpen((navOpen) => navOpen),
    []
  );

  return (
    <div className="bg-black bg-opacity-80 z-20 py-8 fixed top-0 left-0 right-0">
      <nav className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <Link href="/">
            <a className="flex items-center">
              <div className="rounded-full bg-white text-black text-xs mr-4 flex items-center justify-center h-10 w-10">
                U·K
              </div>
              <h1 className="text-sm">Ulfiati Khasanah</h1>
            </a>
          </Link>

          {/* right */}
          <div className="flex items-center">
            {/* hamburger menu */}
            {/* 
            <div className="w-8 h-full block lg:hidden cursor-pointer">
              <MenuSvg className="w-full h-full" />
            </div> */}

            <div className="lg:flex flex flex-row items-center">
              <Link href="/me">
                <a className="flex flex-col relative text-center lg:text-right">
                  <h3 className="text-xs">About</h3>
                  <span className="text-xxs text-gray-400 hidden lg:block">
                    Get to know more about me
                  </span>
                </a>
              </Link>
              <Link href="/me">
                <a className="flex flex-col relative text-center lg:text-right ml-0 lg:ml-8">
                  <h3 className="text-xs">Portfolio</h3>
                  <span className="text-xxs text-gray-400 hidden lg:block">
                    What have I achieved
                  </span>
                </a>
              </Link>
              <Link href="/me">
                <a className="flex flex-col relative text-center lg:text-right ml-0 lg:ml-8">
                  <h3 className="text-xs">Contact</h3>
                  <span className="text-xxs text-gray-400 hidden lg:block">
                    Where you can find me
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
