import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { LuAlignRight } from "react-icons/lu";
import NavLinks from "./NavLinks";

const Header = ({ sideBarOpen, toggleSideBar }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className=" bg-black text-white md:py-5 text-lg">
        <ul className="hidden md:flex space-x-16 justify-center">
          <NavLinks />
        </ul>

        <div className="flex justify-between md:hidden">
          <div className="flex space-x-3">
            <p>Menu</p>
            <button onClick={toggleSideBar} className="">
              {sideBarOpen ? <AiOutlineClose /> : <FaBars />}
            </button>
          </div>
          <div className="flex justify-end pr-4 space-x-3 items-center text-right">
            <p>Sidebar</p>
            <button onClick={toggleNavbar} className="">
              {isOpen ? <AiOutlineClose /> : <LuAlignRight />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="fixed top-0 right-0 h-full w-48 bg-neutral-700 transition-transform translate-x-0 ease-in-out duration-300 md:hidden">
            <button className="fixed top-0 right-0 p-3" onClick={toggleNavbar}>
              <AiOutlineClose />
            </button>
            <div className="flex flex-col items-center space-y-6 mt-28">
              <NavLinks />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
