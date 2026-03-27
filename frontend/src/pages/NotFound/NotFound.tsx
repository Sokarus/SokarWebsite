import { type FC } from 'react';
import { Header, Container } from '@/components';

export const NotFound: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>404 Not Found</h1>
      </Container>
    </>
  );
};
