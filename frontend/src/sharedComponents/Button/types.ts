import type { ReactNode, RefObject } from 'react';

export interface ButtonProps {
  onClick: () => void;
  content: ReactNode;
  style?: 'Default' | 'Icon' | 'Ghost' | 'Action' | 'ListItem';
  ref?: RefObject<HTMLButtonElement | null>;
}
