import { IconName } from 'shared/ui/icon';

export interface TariffFeature {
  id: string;
  icon: IconName;
  label: string;
  active?: boolean;
  disabled?: boolean;
}

export interface SidebarNavItem {
  label: string;
  href: string;
  icon?: IconName;
  active?: boolean;
}

export enum TypeSlider {
  DAYS = 'days',
  MONTHS = 'months',
}
