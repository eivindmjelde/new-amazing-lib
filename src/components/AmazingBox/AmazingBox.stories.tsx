import { Meta, Story } from '@storybook/react';
import React from 'react';
import { AmazingBox, AmazingBoxProps } from './';

export default {
  title: 'AmazingBox',
  component: AmazingBox,
  args: { madProp: 'test', realProp: 'test 2' },
} as Meta<AmazingBoxProps>;

const Template: Story<AmazingBoxProps> = args => <AmazingBox {...args} />;
export const Default = Template.bind({});
