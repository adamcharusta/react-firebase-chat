import React, { useRef } from 'react';
import useAuth from './hooks/useAuth';
import useMessages from './hooks/useMessages';
import ChatRoomComponent from './components/ChatRoomComponent/ChatRoomComponent';

function App() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { logIn, logOut, user } = useAuth();
  const { sendMessage } = useMessages();

  return (
    <div className='bg-neutral-800 max-w-screen-md h-screen flex flex-col items-center text-white overflow-hidden'>
      {user ? (
        <>
          <button onClick={logOut}>LogOut</button>
          <p>Signed In User: {user.email}</p>
        </>
      ) : (
        <button onClick={logIn}>LogIn</button>
      )}

      <ChatRoomComponent />

      <div className='text-black'>
        <textarea style={{ width: '100%' }} ref={textareaRef}></textarea>
        <button
          className='text-white'
          onClick={() => sendMessage(textareaRef.current?.value ? textareaRef.current?.value : '')}
        >
          send
        </button>
      </div>
    </div>
  );
}

export default App;
