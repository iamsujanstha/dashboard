import { FaHome } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import React from 'react';
import { IconType } from 'react-icons';
import {ReactComponent as BellIcon} from '../assets/icons/bell.svg'


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
  BellIcon
};
