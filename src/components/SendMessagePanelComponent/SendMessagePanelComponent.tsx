import React, { FormEventHandler, useState } from 'react';
import TextFieldComponent from '../atoms/TextFieldComponent/TextFieldComponent';
import ButtonComponent from '../atoms/ButtonComponent/ButtonComponent';
import useMessages from '../../hooks/useMessages';

const SendMessagePanelComponent = () => {
  const { sendMessage } = useMessages();
  const [text, setText] = useState<string>('');

  const handleTextField = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;

    setText(value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (text) {
      await sendMessage(text).then(() => {
        setText('');
      });
    }
  };

  const handleKeyDown = async () => {
    if (text) {
      await sendMessage(text).then(() => {
        setText('');
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='w-full flex justify-between p-2 items-center bg-neutral-900'
    >
      <TextFieldComponent
        onChange={handleTextField}
        onKeyDown={handleKeyDown}
        value={text}
        placeholder='Message'
        fullWidth
      />
      <ButtonComponent type='submit' className='px-8 self-start' disabled={!text}>
        Send
      </ButtonComponent>
    </form>
  );
};

export default SendMessagePanelComponent;
