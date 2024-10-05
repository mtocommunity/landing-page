import type { TeamType } from "./teams";

export type Project = {
  name: string;
  shortDescription: string;
  teams: TeamType[];
  href?: string;
  buttonLink?: string;
};
