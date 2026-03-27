import { type FC, useEffect, useState } from 'react';
import { LeftSide } from './LeftSide';
import { RightSide } from './RightSide';
import './Header.scss';

export const Header: FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`HeaderWrapper ${scrolled ? 'Scrolled' : ''}`}>
      <LeftSide />
      <RightSide />
    </div>
  );
};
