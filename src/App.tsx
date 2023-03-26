import React from 'react';
import useAuth from './hooks/useAuth';
import ChatRoomComponent from './components/ChatRoomComponent/ChatRoomComponent';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import SendMessagePanelComponent from './components/SendMessagePanelComponent/SendMessagePanelComponent';

function App() {
  const { logIn, user } = useAuth();

  return (
    <div className='bg-neutral-800 max-w-screen-md h-screen flex flex-col items-center text-white overflow-hidden'>
      {user ? (
        <>
          <NavbarComponent />
          <ChatRoomComponent />
          <SendMessagePanelComponent />
        </>
      ) : (
        <button onClick={logIn}>LogIn</button>
      )}
    </div>
  );
}

export default App;
