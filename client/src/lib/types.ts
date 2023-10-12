import { StaticImageData } from "next/image";

export interface INavItem {
  label: string;
  path: string;
  icon?: JSX.Element;
  children?: INavItem[];
}

export interface ITeam {
  name: string;
  subtitle: string;
  image: StaticImageData;
  linkedin?: string;
  github?: string;
}
