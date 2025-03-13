import type { Meta, StoryObj } from '@storybook/react';

import {Button} from '../components/button';

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'primary',
    label: 'Button'
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    label: 'Button',
  },
};