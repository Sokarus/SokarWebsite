import { type FC } from 'react';
import { type IconProps } from './types';

export const Icon: FC<IconProps> = ({ path, size = '24px' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} viewBox="0 -960 960 960">
      <path d={path} />
    </svg>
  );
};
