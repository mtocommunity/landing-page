import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { MTOTransparentBackground } from "../../../../assets";

import "./style.css";

function NavBar() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <header
        className={`flex justify-between items-center h-14 sticky top-0 px-4 transition-colors z-50 ${!toggle ? "bg-mto_gray" : "bg-transparent"
          } lg:bg-transparent lg:w-[95%] lg:mx-auto lg:top-6`}
      >
        <a className="h-full lg:h-[150%] aspect-square" href="/">
          <MTOTransparentBackground />
        </a>
        <div className="text-white lg:hidden" onClick={handleToggle}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <nav className="hidden lg:flex nav-desktop">
          {/* Nav Desktop */}
          <a href="/#home">Inicio</a>
          <a href="/#about-us">Nosotros</a>
          <a href="/#teams">Equipos</a>
          <a href="/#schedule">Agenda</a>
          <a href="/#leaders">Líderes</a>
          <a href="/#blog">Blog</a>
        </nav>
      </header>
      <div
        className={`nav-mobile fixed w-full top-14 bg-mto_gray text-mto_blue_light z-20 flex-col items-center justify-between py-4 text-xl lg:hidden ${toggle ? "hidden" : "flex"
          }`}
      >
        {/* Mobile nav */}
        <a href="/#home">Home</a>
        <a href="/#about-us">About us</a>
        <a href="/#teams">Teams</a>
        {/*<a href="/#events">Events</a>*/}
        <a href="/staff">Staff</a>
        <a href="/#contactus">Contact us</a>
      </div>
    </>
  );
}

export default NavBar;
