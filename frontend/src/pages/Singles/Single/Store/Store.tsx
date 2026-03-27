import { type FC } from 'react';
import { Image, Text, Button } from '@/sharedComponents';
import { type StoreProps } from './';
import './Store.scss';

export const Store: FC<StoreProps> = ({ name, url, icon }) => {
  return (
    <div className="StoreWrapper">
      <Button
        content={
          <>
            <Image src={icon} width={40} height={40} />
            <Text text={name} style={'Dark'} size={'l'} />
            <Button
              content={<Text text={'Прослушать'} />}
              style={'Action'}
              link={url}
              target={'_blank'}
            />
          </>
        }
        link={url}
        target={'_blank'}
        style={'Store'}
      />
    </div>
  );
};
