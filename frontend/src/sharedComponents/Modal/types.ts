import { type ReactNode } from 'react';

export interface ModalProps {
  isOpened: boolean;
  onClose: () => void;
  title: string;
  content: ReactNode;
}
