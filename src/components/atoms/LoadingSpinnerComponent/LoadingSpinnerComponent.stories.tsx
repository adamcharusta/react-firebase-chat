import React from 'react';
import LoadingSpinnerComponent from './LoadingSpinnerComponent';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Atoms',
  component: LoadingSpinnerComponent,
};

const Template: ComponentStory<typeof LoadingSpinnerComponent> = () => <LoadingSpinnerComponent />;

export const LoadingSpinner = Template.bind({});
// LoadingSpinner.args = {
//   src: faker.internet.avatar(),
//   alt: 'Avatar Image',
// };
