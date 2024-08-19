import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import anime from "animejs";
import { useEffect } from "react";

function TeamIcon({
  className,
  icon,
}: {
  className?: string;
  icon: IconDefinition;
}) {
  useEffect(() => {
    anime({
      targets: ".team-border-rotate",
      duration: 1000 * 45,
      rotate: [0, 360],
      loop: true,
      easing: "linear",
    });

    console.log("TeamIcon mounted");
  }, []);

  return (
    <div
      className={`relative text-white rounded-full bg-white bg-opacity-15 w-32 aspect-square flex items-center justify-center hover:bg-opacity-20 team-icon-rotate lg:w-48 ${className}`}
    >
      <div className="absolute border-dashed border-white border-2 w-full aspect-square rounded-full team-border-rotate lg:border-4"></div>
      <FontAwesomeIcon icon={icon} className="text-4xl lg:text-6xl" />
    </div>
  );
}

export default TeamIcon;
