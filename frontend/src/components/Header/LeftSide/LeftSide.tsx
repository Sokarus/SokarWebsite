import { useTranslation } from 'react-i18next';
import { type FC } from 'react';
import { Button, Text } from '@/sharedComponents';
import './LeftSide.scss';

export const LeftSide: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="LeftSideWrapper">
      <Button
        onClick={() => {
          console.log('done');
        }}
        content={<Text text={t('catalog')} />}
        style="Ghost"
      />
    </div>
  );
};
