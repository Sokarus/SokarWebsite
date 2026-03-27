import { type FC } from 'react';
import { type TextProps, sizes } from './';
import './text.scss';

export const Text: FC<TextProps> = ({ text, style = 'White', heading = '', size = 'm' }) => {
  const styles = { fontSize: sizes[size] };

  return (
    <span style={styles} className={`Text ${style} ${heading}`}>
      {text}
    </span>
  );
};
