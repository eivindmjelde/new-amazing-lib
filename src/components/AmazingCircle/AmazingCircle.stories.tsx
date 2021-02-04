import { Meta, Story } from '@storybook/react';
import React from 'react';
import { AmazingCircle, AmazingCircleProps } from './';

export default {
  title: 'AmazingCircle',
  component: AmazingCircle,
  args: {},
} as Meta<AmazingCircleProps>;

const Template: Story<AmazingCircleProps> = args => <AmazingCircle {...args} />;
export const Default = Template.bind({});
