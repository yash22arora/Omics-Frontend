export interface INavItem {
  label: string;
  path: string;
  icon?: JSX.Element;
  children?: INavItem[];
}
