'use client';

import { AuthForm } from '@/components/AuthForm';
import { Container, TableTitle } from '@/styledComponents/styledComponents';

export default function Authorization() {
  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container>
          <div>
            <TableTitle>Авторизация</TableTitle>
            <AuthForm />
          </div>
        </Container>
      </div>
    </>
  );
}
