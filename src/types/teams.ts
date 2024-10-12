import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Project } from "./general";

export enum TeamType {
  DEV,
  NET,
  OS,
  IOT,
  SEC,
}

export type TeamEvent = {
  date: Date | null;
  name: string;
  description: string;
  link?: string;
  imageUrl?: string;
};

export type TeamLeader = {
  name: string;
  imageUrl: string;
  link?: string;
  role: string;
};

export interface TeamLayout {
  name: string;
  teamIcon: IconDefinition;
  description: string;
  projects: Project[];
  events: TeamEvent[];
  leaders: TeamLeader[];
}
