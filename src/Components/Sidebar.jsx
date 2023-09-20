import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";

const Sidebar = ({ sideBarOpen, toggleSideBar }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(index === activeDropdown ? null : index);
  };

  const menuItems = ["Item 1", "Item 2", "Item 3"];

  return (
    <div>
      <div className="font-medium bg-teal-600 min-h-screen px-3 pt-10 hidden md:block">
        <h1 className="mb-4">Sidebar</h1>
        <ul className="flex flex-col space-y-2">
          {menuItems.map((item, index) => (
            <li key={index} className="">
              <button
                className="flex justify-between items-center bg-white w-full py-2 px-2 rounded"
                onClick={() => toggleDropdown(index)}
              >
                {item}
                {activeDropdown === index ? (
                  <RiArrowDropDownLine className="ml-2" />
                ) : (
                  <RiArrowDropDownLine className="ml-2 transform rotate-180" />
                )}
              </button>
              <ul
                className={`transition-all duration-300 text-center  ${
                  activeDropdown === index ? "block" : "hidden"
                }`}
              >
                <li className="bg-gray-500 ml-12 my-2 pr-2">Item A</li>
                <li className="bg-gray-500 ml-12 pr-2">Item B</li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
      {sideBarOpen && (
        <div className="fixed top-0 left-0 h-full w-48 bg-teal-700 transition-transform translate-x-0 ease-in-out duration-300 md:hidden">
          <div className="font-medium px-3 pt-10 ">
            <button className="fixed top-0 right-0 p-3" onClick={toggleSideBar}>
              <AiOutlineClose />
            </button>
            <h1 className="mb-4 mt-16">Sidebar</h1>
            <ul className="flex flex-col space-y-2">
              {menuItems.map((item, index) => (
                <li key={index} className="">
                  <button
                    className="flex justify-between items-center bg-white w-full py-2 px-2 rounded"
                    onClick={() => toggleDropdown(index)}
                  >
                    {item}
                    {activeDropdown === index ? (
                      <RiArrowDropDownLine className="ml-2" />
                    ) : (
                      <RiArrowDropDownLine className="ml-2 transform rotate-180" />
                    )}
                  </button>
                  <ul
                    className={`transition-all duration-300 text-center  ${
                      activeDropdown === index ? "block" : "hidden"
                    }`}
                  >
                    <li className="bg-gray-500 ml-12 my-2 pr-2">Item A</li>
                    <li className="bg-gray-500 ml-12 pr-2">Item B</li>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
