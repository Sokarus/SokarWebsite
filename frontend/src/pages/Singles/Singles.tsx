import { type FC } from 'react';
import { Header, Container } from '@/components';
import { Button, Text } from '@/sharedComponents';
import { singles } from './';
import './Singles.scss';

export const Singles: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="SinglesWrapper">
          {singles.map((single) => (
            <Button
              key={single.name}
              style={'Action'}
              content={<Text text={single.name} size={'xl'} style={'White'} />}
              link={`/single?name=${single.name}`}
              target={'_blank'}
            />
          ))}
        </div>
      </Container>
    </>
  );
};
