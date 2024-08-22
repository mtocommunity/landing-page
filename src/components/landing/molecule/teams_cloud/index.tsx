import {
  faLaptopCode,
  faNetworkWired,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import { faLinux, faRedhat } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MTOTransparentBackground } from "../../../../assets";
import anime from "animejs";

import "./style.css";
import { useEffect } from "react";

function positionInCircle() {
  const cloudIcon = document.querySelectorAll(".cloud-icon");

  cloudIcon.forEach((icon, index) => {
    // Set position in a circle
    const radius = icon.clientWidth * 2;
    const angle = (index * Math.PI * 2) / 5;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    // Set position
    (icon as HTMLElement).style.left = `calc(50% + ${x}px - ${
      icon.clientWidth / 2
    }px)`;
    (icon as HTMLElement).style.top = `calc(50% + ${y}px - ${
      icon.clientHeight / 2
    }px)`;
  });
}

function TeamsCloud() {
  useEffect(() => {
    window.addEventListener("resize", positionInCircle);

    positionInCircle();

    const animationDuration = 1000 * 120;

    // return;
    anime({
      targets: [".cloud-center", , ".cloud-icon"],
      rotate: -360,
      duration: animationDuration,
      easing: "linear",
      loop: true,
    });
    anime({
      targets: ".cloud",
      rotate: 360,
      duration: animationDuration,
      easing: "linear",
      loop: true,
    });
  }, []);

  return (
    <div className="flex justify-center items-center w-full aspect-square relative cloud rounded-full">
      <MTOTransparentBackground className="cloud-center" />
      <a className="cloud-icon" href="/team/dev">
        <span>Dev-Team</span>
        <FontAwesomeIcon icon={faLaptopCode} />
      </a>
      <a className="cloud-icon" href="/team/net">
        <span>Net-Team</span>
        <FontAwesomeIcon icon={faNetworkWired} />
      </a>
      <a className="cloud-icon" href="/team/os">
        <span>OS-Team</span>
        <FontAwesomeIcon icon={faLinux} />
      </a>
      <a className="cloud-icon" href="/team/security">
        <span>Security-Team</span>
        <FontAwesomeIcon icon={faRedhat} />
      </a>
      <a className="cloud-icon" href="/team/iot">
        <span>IoT-Team</span>
        <FontAwesomeIcon icon={faRobot} />
      </a>
    </div>
  );
}

export default TeamsCloud;
