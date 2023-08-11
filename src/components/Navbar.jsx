import React, { useContext, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';


import { TooltipComponent } from "@syncfusion/ej2-react-popups";



import { allData } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

function Navbar() {
  const {
    activeMenu,
    setActiveMenu,
    setScreenSize,
    screenSize,
    currentColor,
  } = useContext(allData);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);
  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={handleActiveMenu}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
      <NavButton title="Cart"  color={currentColor} icon={<FiShoppingCart />} />
        <NavButton title="Chat" dotColor="#03C9D7" color={currentColor} icon={<BsChatLeft />} />
        <NavButton title="Notification" dotColor="rgb(254, 201, 15)" color={currentColor} icon={<RiNotification3Line />} />
        <TooltipComponent content="Profile" position="BottomCenter">
          <img
            className="rounded-full w-8 h-8"
            src="https://avatars.githubusercontent.com/u/127290543?v=4"
            alt="user-profile"
          />
        </TooltipComponent>
        <MdKeyboardArrowDown className="text-gray-400 text-14" />
      </div>
    </div>
  );
}

export default Navbar;