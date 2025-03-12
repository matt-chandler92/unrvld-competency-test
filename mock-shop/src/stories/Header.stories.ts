import type { Meta, StoryObj } from '@storybook/react';

import { Header } from '../components/header';

const meta = {
  title: 'Header',
  component: Header,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    size: 'large',
    heading: 'This is an example of a large header',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    category: 'Category',
    heading: 'This is an example of a small header',
  },
};