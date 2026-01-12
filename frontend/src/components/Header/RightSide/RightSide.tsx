import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { type FC } from 'react';
import { Button, Text } from '@/sharedComponents';
import { SignInModal } from './SignInModal';
import { Lang } from './Lang';
import './RightSide.scss';

export const RightSide: FC = () => {
  const { t } = useTranslation();
  const [isSignInModalOpened, setSignInModalOpened] = useState<boolean>(false);

  const onSignInModalOpen = () => setSignInModalOpened(true);
  const onSignInModalClose = () => setSignInModalOpened(false);

  return (
    <div className="RightSideWrapper">
      <Lang />
      <Button onClick={onSignInModalOpen} content={<Text text={t('sign_in')} />} style="Ghost" />
      <Button
        onClick={() => {}}
        content={<Text text={t('make_a_deal')} style="Dark" />}
        style="Action"
      />
      <SignInModal isOpened={isSignInModalOpened} onClose={onSignInModalClose} />
    </div>
  );
};
