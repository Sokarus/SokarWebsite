import type { RefObject } from 'react';

export interface DropDownItem {
  label: string;
  value: string;
}

export interface DropDownProps {
  isOpened: boolean;
  onClose: () => void;
  items: DropDownItem[];
  onSelect: (value: string) => void;
  anchorRef?: RefObject<HTMLElement | null>;
}
