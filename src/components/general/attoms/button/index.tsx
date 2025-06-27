/*!
 * File of ManyToOne Community
 * Licensed under the GPL-3.0 or later License: https://github.com/mtocommunity/landing-page/blob/master/LICENSE.md
 */

import "./style.css";
import { ButtonType } from "./types";

type ButtonProps = {
  type: ButtonType;
  children: React.ReactNode;
  onClick?: () => void;
  link?: string;
  className?: string;
};

function Button({ type, children, onClick, link, className }: ButtonProps) {
  const buttonClass = `${className} button ${ButtonType[type].toLowerCase()}`;

  if (link) {
    return (
      <a href={link} className={buttonClass}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
