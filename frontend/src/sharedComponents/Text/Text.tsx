import { type FC } from 'react';
import { type TextProps } from './';
import './text.scss';

export const Text: FC<TextProps> = ({ text, style = 'White', heading = '' }) => {
  return <span className={`Text ${style} ${heading}`}>{text}</span>;
};
