import { useState } from 'react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, InputText, Button, Text } from '@/sharedComponents';
import { type SignInModalProps } from './';
import './SignInModal.scss';

export const SignInModal: FC<SignInModalProps> = ({ isOpened, onClose }) => {
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { t } = useTranslation();

  if (!isOpened) {
    return null;
  }

  const content = (
    <div className="SignInModalContent">
      <InputText value={phone} onChange={setPhone} placeholder={t('phone')} />
      <InputText value={password} onChange={setPassword} placeholder={t('password')} />
      <div className="SignInModalButtons">
        <Button
          onClick={() => {}}
          content={<Text text={t('sign_in')} style="Dark" />}
          style="Action"
        />
        <Button
          onClick={() => {}}
          content={<Text text={t('registration')} style="Dark" />}
          style="Action"
        />
      </div>
    </div>
  );

  return <Modal isOpened={isOpened} onClose={onClose} title={t('sign_in')} content={content} />;
};
