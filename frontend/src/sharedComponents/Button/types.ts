import type { ReactNode } from 'react';

export interface ButtonProps {
  onClick: () => void;
  content: ReactNode;
  style?: 'Default' | 'Icon' | 'Ghost' | 'Action' | 'ListItem';
}
