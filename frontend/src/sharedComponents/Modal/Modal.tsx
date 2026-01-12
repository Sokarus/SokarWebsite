import { type FC } from 'react';
import { Button, Icon, Text } from '@/sharedComponents';
import { CLOSE_ICON } from '@/constants';
import { type ModalProps } from './';
import './Modal.scss';

export const Modal: FC<ModalProps> = ({ isOpened, onClose, title, content }) => {
  if (!isOpened) {
    return null;
  }

  return (
    <div className={`ModalWrapper ${isOpened ? 'Opened' : ''}`}>
      <div className={`ModalContent ${isOpened ? 'Opened' : ''}`}>
        <div className="ModalCloseButton">
          <Button onClick={onClose} content={<Icon path={CLOSE_ICON} />} style="Icon" />
        </div>
        <Text text={title} style="Dark" heading="H1" />
        {content}
      </div>
    </div>
  );
};
