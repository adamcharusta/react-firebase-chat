import React from 'react';
import useAuth from '../../hooks/useAuth';
import ButtonComponent from '../atoms/ButtonComponent/ButtonComponent';

const LoginPanelComponent = () => {
  const { logIn } = useAuth();

  return (
    <div className='bg-neutral-900 p-8 flex flex-col justify-center items-center w-96'>
      <h1 className='mb-4 text-3xl'>Firebase Chat</h1>
      <h2 className='mb-4 text-lg'>Login</h2>
      <ButtonComponent color='google' fullWidth onClick={logIn}>
        Login via Google
      </ButtonComponent>
    </div>
  );
};

export default LoginPanelComponent;
