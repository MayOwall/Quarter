import type { Meta, StoryObj } from '@storybook/react';

import GlobalHeader from './GlobalHeader';

const meta = {
  title: 'GlobalHeader',
  component: GlobalHeader,
  parameters: {
    type: 'quarter',
  },
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'radio', options: ['quarter', 'iteration'] },
  },
} satisfies Meta<typeof GlobalHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Quarter: Story = {
  args: {
    type: 'quarter',
  },
};

export const Iteration: Story = {
  args: {
    type: 'iteration',
  },
};
