import logo from "../../assets/logo.png";
import menu from "../../assets/menu-outline.svg";
import closeMenu from "../../assets/close-outline.svg";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-cyan text-white h-24">
      <nav className="flex relative justify-between items-center max-w-6xl mx-auto h-24 ">
        <div className="flex items-center">
          <a href="/">
            <img
              src={logo}
              alt="Logo"
              className="w-42 h-28 px-4 sm:px-6 lg:px-8"
            />
          </a>
        </div>
        <div className="hidden sm:block">
          <ul className="flex items-center text-lg underline font-bold">
            <li className="p-5 hover:scale-125 active:scale-95">
              <a href="#" className="">
                BUY NFT
              </a>
            </li>
            <li className="p-5 hover:scale-125 active:scale-95">
              <a href="#" className="">
                BUY $DAWG
              </a>
            </li>
            <li className="p-5 hover:scale-125 active:scale-95">
              <a href="#" className="">
                BLOG
              </a>
            </li>
            <li></li>
          </ul>
        </div>
        <div className="sm:hidden mr-4">
          <img src={menu} className="text-black h-8 w-8" onClick={toggleMenu} />
        </div>
        {isMenuOpen && (
          <div className="sm:hidden absolute h-screen w-full top-0 right-0 bg-white text-black">
            <img
              src={closeMenu}
              className="text-black h-8 w-8 absolute top-8 right-4"
              onClick={toggleMenu}
            />
            <ul className="flex flex-col items-center justify-center text-lg underline font-bold mt-14">
              <li className="p-5 hover:scale-125 active:scale-95">
                <a href="#" className="">
                  BUY NFT
                </a>
              </li>
              <li className="p-5 hover:scale-125 active:scale-95">
                <a href="#" className="">
                  BUY $DAWG
                </a>
              </li>

              <li className="p-5 hover:scale-125 active:scale-95">
                <a href="#" className="">
                  BLOG
                </a>
              </li>
              <li></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
