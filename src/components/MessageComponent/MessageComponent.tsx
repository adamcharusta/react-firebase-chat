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
    ? 'self-center ml-2'
    : 'self-center mr-2';

  return (
    <div className={containerClass}>
      <div className={avatarContainerClass}>
        <AvatarComponent src={message.photoURL} alt={altText} />
      </div>
      <TextBoxComponent
        text={message.message}
        author={message.displayName}
        currentUser={message.isCurrentUserMessage}
        time={message.createdAt}
      />
    </div>
  );
};

export default MessageComponent;
