import React, { memo } from 'react';
import moment from 'moment';

interface IAvatarComponent {
  text: string;
  author: string | null;
  currentUser: boolean;
  time: string;
}

const TextBoxComponent = memo(({ text, author, currentUser, time }: IAvatarComponent) => {
  if (!author) return <></>;
  const dateToDisplay = moment(time);
  const now = moment().add(1);

  const dateTime = dateToDisplay.isSame(now, 'day')
    ? dateToDisplay.format('HH:mm:ss')
    : dateToDisplay.format('DD-MM-yyyy HH:mm:ss');

  const backgroundColor = currentUser ? 'bg-neutral-700' : 'bg-neutral-500';
  const authorClass = currentUser ? 'hidden' : 'mb-1 ml-2 text-xs text-neutral-400';
  const timeClass = currentUser
    ? 'mt-1 mr-2 text-xs text-neutral-400 self-end'
    : 'mt-1 ml-2 text-xs text-neutral-400';

  return (
    <div className='text-white flex flex-col max-w-3/4'>
      <p className={authorClass}>{author}</p>
      <div className={`text-justify p-4 rounded-2xl break-words ${backgroundColor}`}>{text}</div>
      <p className={timeClass}>{dateTime}</p>
    </div>
  );
});

TextBoxComponent.displayName = 'TextBoxComponent';

export default TextBoxComponent;
