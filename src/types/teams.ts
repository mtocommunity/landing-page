/*!
 * Copyright (c) 2025 ManyToOne Community
 * Licensed under the GPL-3.0 or later License: https://github.com/mtocommunity/landing-page/blob/master/LICENSE.md
 */

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
  teamIcon: React.FunctionComponent;
  description: string;
  projects: Project[];
  events: TeamEvent[];
  leaders: TeamLeader[];
}
