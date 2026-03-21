import { type FC } from 'react';
import { Select, Text } from '@/sharedComponents';
import { GEO_ICON } from '@/sharedIcons';
import { type PhoneMaskProps, COUNTRIES } from './';
import './PhoneMask.scss';

export const PhoneMask: FC<PhoneMaskProps> = ({ value, onSelect }) => {
  return (
    <div className="PhoneMaskWrapper">
      <Select buttonContent={GEO_ICON} items={COUNTRIES} onSelectItem={onSelect} />
      <Text text={value} />
    </div>
  );
};
