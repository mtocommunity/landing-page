import React from "react";
import Button from "../../attoms/button";
import { ButtonType } from "../../attoms/button/types";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="grid grid-cols-1 bg-mto_dark_gray w-full py-8 px-4 md:px-20 md:gap-x-12 md:grid-cols-5">
        <div className="flex flex-col items-center mb-4 md:items-start md:col-span-5 lg:col-span-1">
          <div className="flex flex-row justify-center items-center">
            <img
              src="/mto/mto_transparent_background.svg"
              className="w-12"
              alt="mto_logo"
            />
            <span className="text-white text-xl font-bold font-main_sans pl-2">
              ManyToOne
            </span>
          </div>
        </div>

        <div className="flex flex-col text-white items-center md:items-start">
          <span className="text-white font-semibold px-3 py-1 relative before:content-[''] border-mto_red border-b-2 md:border-b-0 md:pb-3 md:border-l-2 mb-3 select-none">
            Explora
          </span>
          <Button
            type={ButtonType.NAV}
            link="/#home"
            className="text-white opacity-50 mb-2 hover:text-mto_red_light transition-colors"
          >
            Home
          </Button>
          <Button
            type={ButtonType.NAV}
            link="/#about-us"
            className="text-white opacity-50 mb-2 hover:text-mto_red_light transition-colors"
          >
            About Us
          </Button>
          <Button
            type={ButtonType.NAV}
            link="/#events"
            className="text-white opacity-50 mb-2 hover:text-mto_red_light transition-colors"
          >
            Events
          </Button>
          <Button
            type={ButtonType.NAV}
            link="/#teams"
            className="text-white opacity-50 mb-2 hover:text-mto_red_light transition-colors"
          >
            Teams
          </Button>
          <Button
            type={ButtonType.NAV}
            link="/staff"
            className="text-white opacity-50 hover:text-mto_red_light transition-colors"
          >
            Staff
          </Button>
        </div>

        <div className="flex flex-col text-white items-center md:items-start">
          <span className="text-white font-semibold px-3 py-1 relative before:content-[''] border-mto_red border-b-2 md:border-b-0 md:pb-3 md:border-l-2 mb-3 select-none">
            Redes Sociales
          </span>
          <a
            href="https://www.facebook.com/mtocommunity"
            className="text-white opacity-50 mb-2 hover:text-mto_red_light transition-colors"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/mtocommunity"
            className="text-white opacity-50 mb-2 hover:text-mto_red_light transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/@mtocommunity"
            className="text-white opacity-50 mb-2 hover:text-mto_red_light transition-colors"
          >
            YouTube
          </a>
          <a
            href="https://www.twitch.tv/mtocommunity"
            className="text-white opacity-50 mb-2 hover:text-mto_red_light transition-colors"
          >
            Twitch
          </a>
          <a
            href="https://www.tiktok.com/@mtocommunity"
            className="text-white opacity-50 hover:text-mto_red_light transition-colors"
          >
            TikTok
          </a>
        </div>

        <div className="flex flex-col text-white items-center md:items-start md:col-span-2 lg:col-span-1">
          <span className="text-white font-semibold px-3 py-1 relative before:content-[''] border-mto_red border-b-2 md:border-b-0 md:pb-3 md:border-l-2 mb-3 select-none">
            Contáctanos
          </span>
          <a
            href="mailto:contact@mtocommunity.com"
            className="text-white opacity-50 mb-2 hover:text-mto_red_light transition-colors pl-3 md:pl-0"
          >
            contact@mtocommunity.com
          </a>
          <a
            href="https://wa.me/935766085"
            className="text-white opacity-50 mb-2 hover:text-mto_red_light transition-colors"
          >
            +51 935 766 085
          </a>
        </div>

        <div className="flex flex-col text-white items-center md:items-start">
          <span className="text-white font-semibold px-3 py-1 relative before:content-[''] border-mto_red border-b-2 md:border-b-0 md:pb-3 md:border-l-2 mb-3 select-none">
            Legal
          </span>
          <a
            href="https://cdn.mtocommunity.com/legal/TOS.pdf"
            className="text-white opacity-50 mb-2 hover:text-mto_red_light transition-colors"
            target="_blank"
          >
            Terms
          </a>
          <a
            href="https://cdn.mtocommunity.com/legal/Privacy.pdf"
            className="text-white opacity-50 mb-2 hover:text-mto_red_light transition-colors"
            target="_blank"
          >
            Privacy
          </a>
        </div>
      </div>

      <div className="flex justify-center py-4 bg-mto_gray w-full text-xs lg:text-base">
        <span className="text-white">©2024 - Copyright 2024. Made with ♡</span>
        <a href="https://mtocommunity.com/" className="text-mto_blue pl-1">
          ManyToOne
        </a>
      </div>
    </div>
  );
};

export default Footer;
