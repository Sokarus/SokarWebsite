import { type FC } from 'react';
import { type ButtonProps } from './';
import './Button.scss';

export const Button: FC<ButtonProps> = ({ onClick, content, style = 'Default' }) => {
  return (
    <button className={`Button ${style}`} onClick={onClick}>
      {content}
    </button>
  );
};
