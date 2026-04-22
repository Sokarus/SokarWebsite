import { useTranslation } from 'react-i18next';
import { type FC } from 'react';
import { Button, Text, Image } from '@/sharedComponents';
import './LeftSide.scss';

export const LeftSide: FC = () => {
  const { t } = useTranslation();
  const url = window.location.pathname;

  return (
    <div className="LeftSideWrapper">
      <Button
        content={<Text text={t('sokar')} size={'xl'} style={'Main'} />}
        style={'Ghost'}
        link={'/'}
        selected={url === '/'}
      />
      <Image src={'https://storage.yandexcloud.net/sokar/sokar_logo.png'} width={30} height={30} />
      <Button
        content={<Text text={t('albums')} size={'xl'} style={'Main'} />}
        style={'Ghost'}
        link={'/albums'}
        selected={url === '/albums'}
      />
      <Button
        content={<Text text={t('singles')} size={'xl'} style={'Main'} />}
        style={'Ghost'}
        link={'/singles'}
        selected={url === '/singles'}
      />
      {/* <Button
        content={<Text text={t('portfolio')} size={'xl'} style={'Main'} />}
        style={'Ghost'}
        link={'/portfolio'}
        selected={url === '/portfolio'}
      /> */}
      {/* <Button
        content={<Text text={t('contact')} size={'xl'} style={'Main'} />}
        style={'Ghost'}
        link={'/contact'}
        selected={url === '/contact'}
      /> */}
    </div>
  );
};
