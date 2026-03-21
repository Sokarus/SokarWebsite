import { useState, useRef } from 'react';
import { type FC } from 'react';
import { Button, DropDown } from '@/sharedComponents';
import { type SelectProps } from './';
import './Select.scss';

export const Select: FC<SelectProps> = ({ buttonContent, items, onSelectItem }) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [isDropDownOpened, setDropDownOpened] = useState<boolean>(false);

  const onDropDownOpen = () => setDropDownOpened(true);
  const onDropDownClose = () => setDropDownOpened(false);

  return (
    <div className="SelectWrapper">
      <Button ref={buttonRef} onClick={onDropDownOpen} content={buttonContent} style="Icon" />
      <DropDown
        isOpened={isDropDownOpened}
        onClose={onDropDownClose}
        items={items}
        onSelect={onSelectItem}
        anchorRef={buttonRef}
      />
    </div>
  );
};
