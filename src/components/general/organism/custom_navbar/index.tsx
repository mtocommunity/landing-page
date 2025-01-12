import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { MTOTransparentBackground } from "../../../../assets";
import { ButtonType } from "../../../general/attoms/button/types";
import Button from "../../../general/attoms/button";

import "./style.css";

type Props = {
  children: React.ReactNode;
  fixed: boolean;
  full?: boolean;
};

function CustomNavBar({ children, fixed = false, full }: Props) {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", !toggle);
  }, [toggle]);

  const renderButton = (additionalClasses = "") => (
    <Button
      type={ButtonType.LINK}
      link="https://discord.mtocommunity.com/"
      className={`font-onest text-xs px-6 py-2 border-2 rounded-full border-cyan-700 bg-transparent transition-transform duration-300 hover:scale-110 hover:text-white ${additionalClasses}`}
    >
      Contáctanos <FontAwesomeIcon icon={faArrowRight} className="ml-2 mt-0.5" />
    </Button>
  );

  return (
    <>
      <header
        className={`flex items-center w-full h-14${fixed ? " fixed" : ""} top-0 px-4 transition-colors z-50 lg:bg-transparent lg:w-[95%] lg:mx-auto lg:top-6`}
      >
        <a className={`h-full flex items-center ${!toggle ? "hidden" : ""}`} href="/">
          <MTOTransparentBackground className="h-full lg:h-[150%] aspect-square" />
          {full && (
            <span className="font-main_sans flex items-center font-semibold ml-2">
              MTO Community
            </span>
          )}
        </a>
        <div className="text-white lg:hidden ml-auto" onClick={handleToggle}>
          <FontAwesomeIcon icon={toggle ? faBars : faTimes} />
        </div>
        <nav className="nav-desktop hidden lg:flex justify-center items-center font-onest flex-1">
          {children}
        </nav>
        {renderButton("hidden lg:flex ml-4")}
      </header>
      <div
        className={`nav-mobile min-h-screen flex fixed w-full h-full bg-mto_gray text-mto_blue_light z-20 flex-col items-center justify-center text-xl lg:hidden ${!toggle ? "active" : ""}`}
      >
        {children}
        {renderButton("mt-4")}
      </div>
    </>
  );
}

export default CustomNavBar;