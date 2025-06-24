/*!
 * File of ManyToOne Community
 * Licensed under the GPL-3.0 or later License: https://github.com/mtocommunity/landing-page/blob/master/LICENSE.md
 */

import type { TeamType } from "./teams";

export type Project = {
  name: string;
  shortDescription: string;
  teams: TeamType[];
  href?: string;
  buttonLink?: string;
};
