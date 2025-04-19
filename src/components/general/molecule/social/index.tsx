import "./style.css";
import {
  faFacebookSquare,
  faInstagram,
  faYoutube,
  faTwitch,
  faTiktok,
  faXTwitter,
  faGithub,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Social() {
  return (
    <div className="flex justify-between w-full items-center">
      <a
        href="https://www.instagram.com/mtocommunity"
        className="icon"
        target="_blank"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>

      <a
        href="https://www.linkedin.com/company/mtocommunity/"
        className="icon"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>

      <a
        href="https://www.tiktok.com/@mtocommunity"
        className="icon"
        target="_blank"
      >
        <FontAwesomeIcon icon={faTiktok} />
      </a>

      <a
        href="https://www.youtube.com/@mtocommunity"
        className="icon"
        target="_blank"
      >
        <FontAwesomeIcon icon={faYoutube} />
      </a>

      <a
        href="https://github.com/mtocommunity"
        className="icon"
        target="_blank"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>

      <a
        href="https://www.twitch.tv/mtocommunity"
        className="icon"
        target="_blank"
      >
        <FontAwesomeIcon icon={faTwitch} />
      </a>

      <a
        href="https://whatsapp.mtocommunity.com/"
        className="icon"
        target="_blank"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>

      <a href="https://x.com/mtocommunity" className="icon" target="_blank">
        <FontAwesomeIcon icon={faXTwitter} />
      </a>
    </div>
  );
}

export default Social;
