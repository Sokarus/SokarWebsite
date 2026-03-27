import { useSearchParams, useNavigate } from 'react-router-dom';
import { type FC } from 'react';
import { Container } from '@/components';
import { singles } from '../constants';
import { Store } from './Store';
import './Single.scss';

export const Single: FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const singleName = searchParams.get('name');

  if (singleName === null) {
    navigate('/not-found');
    return null;
  }

  const single = singles.find((single) => single.name === singleName);

  if (single === undefined) {
    navigate('/not-found');
    return null;
  }

  return (
    <Container>
      <div className={'SingleWrapper'}>
        <video controls height="250px" width="200px">
          <source src={single.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={'StoresWrapper'}>
          {single.stores.map((store) => (
            <Store key={store.name} name={store.name} url={store.url} icon={store.icon} />
          ))}
        </div>
      </div>
    </Container>
  );
};
