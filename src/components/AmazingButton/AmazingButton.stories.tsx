import { Meta, Story } from '@storybook/react';
import React from 'react';
import { AmazingButton, AmazingButtonProps } from './';

export default {
  title: 'AmazingButton',
  component: AmazingButton,
} as Meta<AmazingButtonProps>;

const Template: Story<AmazingButtonProps> = args => <AmazingButton {...args} />;
export const Default = Template.bind({});
