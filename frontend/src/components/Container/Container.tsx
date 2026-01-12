import { type FC } from 'react';
import { type ContainerProps } from './';
import './Container.scss';

export const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="ContainerWrapper">{children}</div>;
};
