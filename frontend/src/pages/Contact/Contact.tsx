import { type FC, useState } from 'react';
import { Header, Container } from '@/components';
import { InputText, InputTextArea, Button, Text } from '@/sharedComponents';
import './Contact.scss';

export const Contact: FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  return (
    <>
      <Header />
      <Container>
        <div className={'ContactWrapper'}>
          <InputText value={name} onChange={setName} placeholder={'Name'} />
          <InputText value={email} onChange={setEmail} placeholder={'Email'} />
          <InputTextArea value={message} onChange={setMessage} placeholder={'Message'} />
          <Button content={<Text text={'Submit'} size={'xl'} />} style={'Action'} />
        </div>
      </Container>
    </>
  );
};
