import { SVGProps } from 'react';
import { ReactComponent as FolderIcon } from 'shared/assets/icons/folder.svg';
import { ReactComponent as PhoneIcon } from 'shared/assets/icons/phone.svg';
import { ReactComponent as DatabaseIcon } from 'shared/assets/icons/database.svg';
import { ReactComponent as UsersIcon } from 'shared/assets/icons/users.svg';
import { ReactComponent as RemoveIcon } from 'shared/assets/icons/remove.svg';
import { ReactComponent as AiIcon } from 'shared/assets/icons/ai.svg';
import { ReactComponent as RubleIcon } from 'shared/assets/icons/ruble.svg';
import { ReactComponent as QuestionMarkCircleIcon } from 'shared/assets/icons/questionMarkCircle.svg';
import { ReactComponent as CheckCircleIcon } from 'shared/assets/icons/checkCircle.svg';

const ICONS = {
  folder: FolderIcon,
  phone: PhoneIcon,
  database: DatabaseIcon,
  users: UsersIcon,
  remove: RemoveIcon,
  ai: AiIcon,
  ruble: RubleIcon,
  questionMarkCircle: QuestionMarkCircleIcon,
  checkCircle: CheckCircleIcon,
} as const;

export type IconName = keyof typeof ICONS;

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'children'> {
  name: IconName;
  size?: number;
}

export function Icon({
  name,
  size = 24,
  width,
  height,
  color,
  fill,
  stroke,
  style,
  ...rest
}: IconProps) {
  const SvgComponent = ICONS[name];

  return (
    <SvgComponent
      width={width ?? size}
      height={height ?? size}
      fill={fill ?? 'currentColor'}
      stroke={stroke ?? 'none'}
      style={{ color: color ?? fill, ...style }}
      {...rest}
    />
  );
}
