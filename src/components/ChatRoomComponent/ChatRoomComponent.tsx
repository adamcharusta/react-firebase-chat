import React, { useEffect, useRef } from 'react';
import MessageComponent from '../MessageComponent/MessageComponent';
import useMessages from '../../hooks/useMessages';

const ChatRoomComponent = () => {
  const scrollToBottomRef = useRef<HTMLDivElement>(null);
  const { messages } = useMessages();

  useEffect(() => {
    scrollToBottomRef.current?.scrollIntoView({ behavior: 'auto' });
  }, [messages]);

  return (
    <div className='h-full w-full sm:w-11/12 overflow-y-scroll'>
      {messages.map((msg) => (
        <MessageComponent key={msg.id} message={msg} />
      ))}
      <div ref={scrollToBottomRef} />
    </div>
  );
};

export default ChatRoomComponent;
