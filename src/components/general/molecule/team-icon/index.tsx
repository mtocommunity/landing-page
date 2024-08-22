import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.css";

function TeamIcon({
  className,
  icon,
}: {
  className?: string;
  icon: IconDefinition;
}) {
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
