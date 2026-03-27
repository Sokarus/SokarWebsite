import { v4 as uuidv4 } from 'uuid';
import { type ChangeEvent, type FC } from 'react';
import { type InputTextAreaProps } from './types';
import './InputTextArea.scss';

export const InputTextArea: FC<InputTextAreaProps> = ({ value, onChange, placeholder }) => {
  const onTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.currentTarget.value);
  };

  return (
    <textarea
      id={uuidv4()}
      className={'InputTextAreaWrapper'}
      value={value}
      placeholder={placeholder}
      onChange={onTextChange}
    />
  );
};
