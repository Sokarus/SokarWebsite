import { useSearchParams, useNavigate } from 'react-router-dom';
import { type FC } from 'react';
import { Container } from '@/components';
import { Store } from '@/sharedComponents';
import { albums } from '../constants';
import './Album.scss';

export const Album: FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const albumName = searchParams.get('name');

  if (albumName === null) {
    navigate('/not-found');
    return null;
  }

  const album = albums.find((album) => album.name === albumName);

  if (album === undefined) {
    navigate('/not-found');
    return null;
  }

  return (
    <Container>
      <div className={'AlbumWrapper'}>
        <video controls height="250px" width="200px">
          <source src={album.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={'StoresWrapper'}>
          {album.stores.map((store) => (
            <Store key={store.name} name={store.name} url={store.url} icon={store.icon} />
          ))}
        </div>
      </div>
    </Container>
  );
};
