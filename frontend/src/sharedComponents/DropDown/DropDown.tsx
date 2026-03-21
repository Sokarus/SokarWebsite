import { useEffect, useRef } from 'react';
import { type FC } from 'react';
import { Button, Text } from '@/sharedComponents';
import { type DropDownProps } from './types';
import './DropDown.scss';

export const DropDown: FC<DropDownProps> = ({
  isOpened,
  onClose,
  items,
  onSelect,
  anchorRef = null,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpened) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (!ref.current || !target) return;
      if (anchorRef?.current?.contains(target)) return;
      if (!ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpened, onClose]);

  const handleItemClick = (value: string) => {
    onSelect?.(value);
    onClose();
  };

  if (!isOpened) return null;

  const processedItems = items.map((item, index) => {
    const onItemClick = () => handleItemClick(item.value);

    return (
      <Button
        key={index}
        onClick={onItemClick}
        content={<Text text={item.label} />}
        style="ListItem"
      />
    );
  });

  return (
    <div className="DropDownWrapper">
      <div ref={ref} className={`DropDownList ${isOpened ? 'Opened' : ''}`}>
        {processedItems}
      </div>
    </div>
  );
};
