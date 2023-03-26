import React from 'react';
import { IMessage } from '../../app.types';
import AvatarComponent from '../atoms/AvatarComponent/AvatarComponent';
import TextBoxComponent from '../atoms/TextBoxComponent/TextBoxComponent';

interface IMessageComponent {
  message: IMessage;
}

const MessageComponent = ({ message }: IMessageComponent) => {
  const altText = message.displayName + ' avatar';
  const containerClass = message.isCurrentUserMessage
    ? 'w-full mt-4 flex flex-row-reverse items-end'
    : 'w-full mt-4 flex items-end';

  const avatarContainerClass = message.isCurrentUserMessage
    ? 'self-end mb-5 ml-2'
    : 'self-end mb-5 mr-2';

  return (
    <article className={containerClass}>
      <div className={avatarContainerClass}>
        <AvatarComponent src={message.photoURL} alt={altText} />
      </div>
      <TextBoxComponent
        text={message.message}
        author={message.displayName}
        currentUser={message.isCurrentUserMessage}
        time={message.createdAt}
      />
    </article>
  );
};

export default MessageComponent;
