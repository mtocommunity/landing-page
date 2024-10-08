import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { MTOTransparentBackground } from "../../../../assets";

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

  return (
    <>
      <header
        className={`flex justify-between items-center w-full h-14${
          fixed ? " fixed" : null
        } top-0 px-4 transition-colors z-50 lg:bg-transparent lg:w-[95%] lg:mx-auto lg:top-6`}
      >
        <a className="h-full flex items-centers" href="/">
          <MTOTransparentBackground className="h-full lg:h-[150%] aspect-square" />
          {full && (
            <span className="font-main_sans flex items-center font-semibold">
              MTO Community
            </span>
          )}
        </a>
        <div className="text-white lg:hidden" onClick={handleToggle}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <nav className="hidden lg:flex nav-desktop">{children}</nav>
      </header>
      <div
        className={`nav-mobile flex fixed w-full bg-mto_gray text-mto_blue_light z-20 flex-col items-center justify-between text-xl lg:hidden ${
          !toggle ? "active" : ""
        }`}
      >
        {children}
      </div>
    </>
  );
}

export default CustomNavBar;
