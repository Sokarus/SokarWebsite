import { type FC } from 'react';
import { Lang } from './Lang';
import './RightSide.scss';

export const RightSide: FC = () => {
  return (
    <div className="RightSideWrapper">
      <Lang />
    </div>
  );
};
