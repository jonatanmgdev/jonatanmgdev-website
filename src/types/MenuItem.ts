export interface MenuItem {
  label: string | JSX.Element;
  href: string;
  applyStyles?: boolean;
  hiddenMobile?: boolean;
}
