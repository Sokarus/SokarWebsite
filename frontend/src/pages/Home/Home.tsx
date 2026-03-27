import { type FC } from 'react';
import { Header, Container } from '@/components';
import { Image } from '@/sharedComponents';

export const Home: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Image src={'https://storage.yandexcloud.net/sokar/sokar_logo.png'} width={100} height={100} />
      </Container>
    </>
  );
};
