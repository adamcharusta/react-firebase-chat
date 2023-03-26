import React, { useState } from 'react';
import TextFieldComponent from './TextFieldComponent';
import { Story } from '@storybook/react';

export default {
  title: 'Atoms',
  component: TextFieldComponent,
};

const Template: Story<typeof TextFieldComponent> = (args) => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return <TextFieldComponent {...args} value={value} onChange={handleChange} />;
};

export const TextField = Template.bind({});
TextField.args = {
  placeholder: 'Text Me!',
  disabled: false,
  value: '',
  fullWidth: false,
  type: 'text',
};
