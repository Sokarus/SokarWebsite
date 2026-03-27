import type { ReactNode, RefObject } from 'react';

export interface ButtonProps {
  content: ReactNode;
  onClick?: () => void;
  style?: 'Default' | 'Icon' | 'Ghost' | 'Action' | 'ListItem' | 'Store';
  ref?: RefObject<HTMLButtonElement | null>;
  link?: string;
  target?: '_blank' | '_self';
  selected?: boolean;
}
