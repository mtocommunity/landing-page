import "./style.css";
import {
  faFacebookSquare,
  faInstagram,
  faYoutube,
  faTwitch,
  faTiktok,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Social() {
  return (
    <div className="flex justify-between w-full items-center px-0 py-2">
      <a href="https://www.facebook.com/mtocommunity" className="icon">
        <FontAwesomeIcon icon={faFacebookSquare} />
      </a>
      <a href="https://www.instagram.com/mtocommunity" className="icon">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://www.youtube.com/@mtocommunity" className="icon">
        <FontAwesomeIcon icon={faYoutube} />
      </a>
      <a href="https://www.twitch.tv/mtocommunity" className="icon">
        <FontAwesomeIcon icon={faTwitch} />
      </a>
      <a href="https://www.tiktok.com/@mtocommunity" className="icon">
        <FontAwesomeIcon icon={faTiktok} />
      </a>
      <a href="https://x.com/mtocommunity" className="icon">
        <FontAwesomeIcon icon={faXTwitter} />
      </a>
    </div>
  );
}

export default Social;
