import React from 'react';
import TextBoxComponent from './TextBoxComponent';
import { ComponentStory } from '@storybook/react';
import moment from 'moment';
import { faker } from '@faker-js/faker';

export default {
  title: 'Atoms/TextBox',
  component: TextBoxComponent,
};

const Template: ComponentStory<typeof TextBoxComponent> = (args) => <TextBoxComponent {...args} />;

export const CurrentUser = Template.bind({});
CurrentUser.args = {
  text: faker.lorem.lines(),
  author: faker.name.fullName(),
  currentUser: true,
  time: moment().toString(),
};

export const OtherUser = Template.bind({});
OtherUser.args = {
  text: faker.lorem.lines(),
  author: faker.name.fullName(),
  currentUser: false,
  time: moment().toString(),
};
