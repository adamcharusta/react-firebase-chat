import React, { useEffect, useRef } from 'react';
import MessageComponent from '../MessageComponent/MessageComponent';
import LoadingSpinnerComponent from '../atoms/LoadingSpinnerComponent/LoadingSpinnerComponent';
import useMessages from '../../hooks/useMessages';

const ChatRoomComponent = () => {
  const scrollToBottomRef = useRef<HTMLDivElement>(null);
  const { messages, loading } = useMessages();

  useEffect(() => {
    scrollToBottomRef.current?.scrollIntoView({ behavior: 'auto' });
  }, [messages]);

  return (
    <main className='h-full w-full overflow-y-scroll'>
      {loading ? (
        <LoadingSpinnerComponent />
      ) : (
        messages.map((msg) => <MessageComponent key={msg.id} message={msg} />)
      )}

      <div ref={scrollToBottomRef} />
    </main>
  );
};

export default ChatRoomComponent;
