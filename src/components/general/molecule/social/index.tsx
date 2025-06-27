/*!
 * File of ManyToOne Community
 * Licensed under the GPL-3.0 or later License: https://github.com/mtocommunity/landing-page/blob/master/LICENSE.md
 */

import "./style.css";

import { ReactComponent as Instagram } from "@assets/icons/instagram.svg";
import { ReactComponent as Youtube } from "@assets/icons/youtube.svg";
import { ReactComponent as Twitch } from "@assets/icons/twitch.svg";
import { ReactComponent as Tiktok } from "@assets/icons/tiktok.svg";
import { ReactComponent as Github } from "@assets/icons/github.svg";
import { ReactComponent as Whatsapp } from "@assets/icons/whatsapp.svg";
import { ReactComponent as Linkedin } from "@assets/icons/linkedin.svg";

function Social() {
  return (
    <div className="flex justify-between w-full items-center">
      <a
        href="https://www.instagram.com/mtocommunity"
        className="icon"
        target="_blank"
      >
        <Instagram />
      </a>

      <a
        href="https://www.linkedin.com/company/mtocommunity/"
        className="icon"
        target="_blank"
      >
        <Linkedin />
      </a>

      <a
        href="https://www.tiktok.com/@mtocommunity"
        className="icon"
        target="_blank"
      >
        <Tiktok />
      </a>

      <a
        href="https://www.youtube.com/@mtocommunity"
        className="icon"
        target="_blank"
      >
        <Youtube />
      </a>

      <a
        href="https://github.com/mtocommunity"
        className="icon"
        target="_blank"
      >
        <Github />
      </a>

      <a
        href="https://www.twitch.tv/mtocommunity"
        className="icon"
        target="_blank"
      >
        <Twitch />
      </a>

      <a
        href="https://whatsapp.mtocommunity.com/"
        className="icon"
        target="_blank"
      >
        <Whatsapp />
      </a>
    </div>
  );
}

export default Social;
