import { type FC } from 'react';
import { type ImageProps } from './';

export const Image: FC<ImageProps> = ({ src }) => {
  return <img src={src} />;
};
