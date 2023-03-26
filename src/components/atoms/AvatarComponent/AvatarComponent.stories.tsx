import React from 'react';
import AvatarComponent from './AvatarComponent';
import { ComponentStory } from '@storybook/react';
import { faker } from '@faker-js/faker';

export default {
  title: 'Atoms',
  component: AvatarComponent,
};

const Template: ComponentStory<typeof AvatarComponent> = (args) => <AvatarComponent {...args} />;

export const Avatar = Template.bind({});
Avatar.args = {
  src: faker.internet.avatar(),
  alt: 'Avatar Image',
};
