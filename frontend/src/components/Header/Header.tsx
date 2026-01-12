import { type FC } from 'react';
import { LeftSide } from './LeftSide';
import { RightSide } from './RightSide';
import './Header.scss';

export const Header: FC = () => {
  return (
    <div className="HeaderWrapper">
      <LeftSide />
      <RightSide />
    </div>
  );
};
