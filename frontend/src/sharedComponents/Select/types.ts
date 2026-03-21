import type { ReactElement } from 'react';
import { type DropDownItem } from '../DropDown';

export interface SelectProps {
  buttonContent: ReactElement;
  items: DropDownItem[];
  onSelectItem: (value: string) => void;
}
