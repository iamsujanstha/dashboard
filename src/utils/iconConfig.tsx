import { FaHome } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import React from 'react';
import { IconType } from 'react-icons';
import { ReactComponent as BellIcon } from '../assets/icons/bell.svg'
import { ReactComponent as ToggleIcon } from '../assets/icons/indent-decrease.svg'
import { ReactComponent as Logo } from '../assets/icons/logo.svg'
import { ReactComponent as NotificationIcon } from '../assets/icons/bell.svg'
import { ReactComponent as BoxIcon } from '../assets/icons/box.svg'
import { ReactComponent as PathIcon } from '../assets/icons/Path.svg'
import { ReactComponent as DownIcon } from '../assets/icons/chevron-down.svg'
import { ReactComponent as CirclePlusIcon } from '../assets/icons/circle-plus.svg'
import { ReactComponent as SearchIcon } from '../assets/icons/search.svg'
import { ReactComponent as CartIcon } from '../assets/icons/shopping-cart.svg'
import { ReactComponent as RightIcon } from '../assets/icons/chevron-right.svg';
import { ReactComponent as LeftIcon } from '../assets/icons/chevron-left.svg';


interface IconProps {
  size?: string;
  color?: string;
}

const createIcon = (IconComponent: IconType): React.FC<IconProps> => {
  return ({ size = "20px", color = "var(--icon-color)" }: IconProps) => (
    <IconComponent size={size} color={color} />
  );
};

export const Icons = {
  FaHome: createIcon(FaHome),
  AiOutlineUser: createIcon(AiOutlineUser),
  BellIcon,
  ToggleIcon,
  Logo,
  NotificationIcon,
  BoxIcon,
  PathIcon,
  DownIcon,
  CirclePlusIcon,
  SearchIcon,
  CartIcon,
  RightIcon,
  LeftIcon
};
