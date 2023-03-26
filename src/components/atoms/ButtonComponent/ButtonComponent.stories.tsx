import React from 'react';
import ButtonComponent from './ButtonComponent';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Atoms/Button',
  component: ButtonComponent,
};

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args}>{args.children}</ButtonComponent>
);

export const Primary = Template.bind({});
Primary.args = {
  type: 'button',
  children: 'Click me!',
  disabled: false,
  color: 'primary',
  fullWidth: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'button',
  children: 'Click me!',
  disabled: false,
  color: 'secondary',
  fullWidth: false,
};

export const Google = Template.bind({});
Google.args = {
  type: 'button',
  children: 'Click me!',
  disabled: false,
  color: 'google',
  fullWidth: false,
};
