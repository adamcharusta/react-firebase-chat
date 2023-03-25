import React, { ChangeEventHandler, useState } from 'react';
import './App.css';
import useAuth from './hooks/useAuth';
import moment from 'moment';
import useMessages from './hooks/useMessages';

function App() {
  const { logIn, logOut, user } = useAuth();
  const { messages, sendMessage } = useMessages();
  const [text, setText] = useState<string>('');

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setText(event.target.value);
  };

  return (
    <div className='App-header'>
      {user ? (
        <>
          <button onClick={logOut}>LogOut</button>
          <p>Signed In User: {user.email}</p>
        </>
      ) : (
        <button onClick={logIn}>LogIn</button>
      )}

      <div style={{ height: 500, overflowY: 'scroll' }}>
        {messages.map((doc) => (
          <p key={doc.id}>
            <span style={{ color: doc.isCurrentUserMessage ? 'red' : 'white' }}>
              {doc.displayName}
            </span>
            : <span>{doc.message}</span> <span>{moment(doc.createdAt).format('HH:mm:ss')}</span>
          </p>
        ))}
      </div>

      <div>
        <textarea onChange={handleChange} value={text} style={{ width: '100%' }}></textarea>
        <button onClick={() => sendMessage(text)}>send</button>
      </div>
    </div>
  );
}

export default App;
