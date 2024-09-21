import {
  faArrowRight,
  faCalendar,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.css";
import Button from "../../attoms/button";
import { ButtonType } from "../../attoms/button/types";

type CardProps = {
  title: string;
  description: string;
  dateTime?: Date;
  image?: string;
  link?: string;
};

function Card({ title, description, dateTime, image, link }: CardProps) {
  return (
    <div className="bg-gray-300 backdrop-blur-md group flex flex-col bg-opacity-20 rounded-xl h-min pb-3 group hover:z-20 transition-transform">
      <div className="aspect-video">
        <img
          src={image}
          alt={image}
          className="rounded-t-xl w-full h-full object-cover"
        />
      </div>
      <div className="text-white grid grid-cols-4 gap-2 px-3 py-2">
        <p className="text-lg col-span-3 flex h-full items-center">{title}</p>
        <Button
          type={ButtonType.PRIMARY}
          link={link}
          className={!link ? "hidden" : "flex gap-2 items-center"}
        >
          <span>Leer más</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
        <div className="flex w-full justify-between font-main_sans text-sm col-span-4">
          <p className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faCalendar} />
            <span>{dateTime ? formatDate(dateTime) : "Upcoming"}</span>
          </p>
          <p className="flex gap-2 items-center">
            <span>{dateTime ? formatTime(dateTime) : ""}</span>
            <FontAwesomeIcon icon={faClock} />
          </p>
        </div>
      </div>
      <div className="hidden group-hover:flex px-3 text-white card-description">
        {description}
      </div>
    </div>
  );
}

function formatDate(date: Date) {
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
}

function formatTime(date: Date) {
  return `${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:${
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
  }`;
}

export default Card;
