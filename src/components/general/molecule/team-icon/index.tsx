/*!
 * File of ManyToOne Community
 * Licensed under the GPL-3.0 or later License: https://github.com/mtocommunity/landing-page/blob/master/LICENSE.md
 */

import "./style.css";
import React from "react";

function TeamIcon({
  className,
  Icon,
}: {
  className?: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}) {
  return (
    <div
      className={`relative text-white rounded-full bg-white bg-opacity-15 w-32 aspect-square flex items-center justify-center hover:bg-opacity-20 team-icon-rotate lg:w-48 ${className}`}
    >
      <div className="absolute border-dashed border-white border-2 w-full aspect-square rounded-full team-border-rotate lg:border-4"></div>
      <Icon className="text-4xl lg:text-6xl" />
    </div>
  );
}

export default TeamIcon;
