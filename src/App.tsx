import React from 'react';
import useAuth from './hooks/useAuth';
import ChatRoomComponent from './components/ChatRoomComponent/ChatRoomComponent';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import SendMessagePanelComponent from './components/SendMessagePanelComponent/SendMessagePanelComponent';
import LoginPanelComponent from './components/LoginPanelComponent/LoginPanelComponent';

function App() {
  const { user } = useAuth();

  return (
    <div className='bg-neutral-800 w-screen max-w-screen-md h-screen flex flex-col justify-center items-center text-white overflow-hidden'>
      {user ? (
        <>
          <NavbarComponent />
          <ChatRoomComponent />
          <SendMessagePanelComponent />
        </>
      ) : (
        <LoginPanelComponent />
      )}
    </div>
  );
}

export default App;
