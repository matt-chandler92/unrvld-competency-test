import type { Meta, StoryObj } from '@storybook/react';

import { Header } from '../components/header';

const meta = {
  title: 'Header',
  component: Header,
  parameters: {
    layout: 'centered'
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    size: 'large',
    category: 'Spring summer 24',
    heading: 'Shake up your summer look',
    cta: {
      type: 'primary',
      label: 'Shop the collection',
      href: '/shop'
    },
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    category: 'Spring summer 24',
    heading: 'Explore the range',
    filters: {
      options: [{name: 'Headwear', value: 'headwear'}, {name: 'Clothing', value: 'clothing'}, {name: 'Accessories', value: 'accessories'}],
      onChange: (value: string) => console.log(value),
    }
  },
};