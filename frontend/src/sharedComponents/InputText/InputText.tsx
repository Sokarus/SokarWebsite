import { v4 as uuidv4 } from 'uuid';
import { type ChangeEvent, type FC } from 'react';
import { type InputTextProps } from './types';
import './InputText.scss';

export const InputText: FC<InputTextProps> = ({ value, onChange, placeholder }) => {
  const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
  };

  return (
    <input
      id={uuidv4()}
      className="InputTextWrapper"
      value={value}
      placeholder={placeholder}
      onChange={onTextChange}
    />
  );
};
