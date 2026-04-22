import { type FC } from 'react';
import { Header, Container } from '@/components';
import { Button, Text } from '@/sharedComponents';
import { albums } from './';
import './Albums.scss';

export const Albums: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="AlbumsWrapper">
          {albums.map((album) => (
            <Button
              key={album.name}
              style={'Action'}
              content={<Text text={album.name} size={'xl'} style={'White'} />}
              link={`/album?name=${album.name}`}
              target={'_blank'}
            />
          ))}
        </div>
      </Container>
    </>
  );
};
