import { type FC } from 'react';
import { type ImageProps } from './';

export const Image: FC<ImageProps> = ({ src, width, height }) => {
  return <img src={src} width={width} height={height} />;
};
