import { Link } from 'react-router-dom';
import { type FC } from 'react';
import { type ButtonProps } from './';
import './Button.scss';

export const Button: FC<ButtonProps> = ({
  content,
  onClick = null,
  style = 'Default',
  ref = null,
  link = null,
  target = '_self',
  selected = false,
}) => {
  if (link) {
    return (
      <Link
        to={link}
        target={target}
        rel={'noopener noreferrer'}
        className={`Button ${style} Link ${selected ? 'Selected' : ''}`}
      >
        {content}
      </Link>
    );
  }

  const noop = () => {};

  return (
    <button
      ref={ref}
      className={`Button ${style} ${selected ? 'Selected' : ''}`}
      onClick={onClick ? onClick : noop}
    >
      {content}
    </button>
  );
};
