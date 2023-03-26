import React from 'react';
import { ComponentStory, Story } from '@storybook/react';
import MessageComponent from './MessageComponent';
import moment from 'moment';
import { IMessage } from '../../app.types';
import { faker } from '@faker-js/faker';

export default {
  title: 'Components/Message',
  component: MessageComponent,
};

const Template: ComponentStory<typeof MessageComponent> = (args) => <MessageComponent {...args} />;

const currentUserMessage = (isCurrentUserMessage = faker.datatype.boolean()): IMessage => ({
  id: '123',
  message: faker.lorem.lines(),
  photoURL: faker.internet.avatar(),
  displayName: faker.name.fullName(),
  uid: '123',
  createdAt: moment().toString(),
  isCurrentUserMessage,
});

export const CurrentUser = Template.bind({});
CurrentUser.args = {
  message: currentUserMessage(true),
};

export const OtherUser = Template.bind({});
OtherUser.args = {
  message: currentUserMessage(false),
};

export const ChatRoom: Story = () => (
  <>
    <MessageComponent message={currentUserMessage()} />
    <MessageComponent message={currentUserMessage()} />
    <MessageComponent message={currentUserMessage()} />
    <MessageComponent message={currentUserMessage()} />
    <MessageComponent message={currentUserMessage()} />
    <MessageComponent message={currentUserMessage()} />
    <MessageComponent message={currentUserMessage()} />
    <MessageComponent message={currentUserMessage()} />
    <MessageComponent message={currentUserMessage()} />
  </>
);
