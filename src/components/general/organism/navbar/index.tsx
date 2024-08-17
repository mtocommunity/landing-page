import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { MTOTransparentBackground } from "../../../../assets";

import "./style.css";

function NavBar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div
        className={`flex justify-between items-center h-14 sticky top-0 px-4 transition-colors z-50 ${
          !toggle ? "bg-mto_gray" : "bg-transparent"
        } lg:bg-transparent`}
      >
        <div className="h-full aspect-square">
          <MTOTransparentBackground />
        </div>
        <div className="text-white lg:hidden" onClick={handleToggle}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="hidden lg:flex nav-desktop">
          {/* Nav Desktop */}
          <a href="#home">Home</a>
          <a href="#home">About us</a>
          <a href="#home">Events</a>
          <a href="#home">News</a>
          <a href="#home">Contact us</a>
        </div>
      </div>
      <div
        className={`nav-mobile fixed w-full top-14 bg-mto_gray text-mto_blue_light z-20 flex-col items-center justify-between py-4 text-xl lg:hidden ${
          toggle ? "hidden" : "flex"
        }`}
      >
        {/* Mobile nav */}
        <a href="#home">Home</a>
        <a href="#home">About us</a>
        <a href="#home">Events</a>
        <a href="#home">News</a>
        <a href="#home">Contact us</a>
      </div>
    </>
  );
}

export default NavBar;
