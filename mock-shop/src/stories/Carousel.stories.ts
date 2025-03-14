import type { Meta, StoryObj } from '@storybook/react';
import hat from '../assets/img/hat.png';

import { Carousel } from "../components/carousel";

const meta = {
  title: 'Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    cards: [
      {image: hat, heading: 'Headwear', price: '£24.00', href: '/hats'},
      {image: hat, heading: 'Headwear', price: '£24.00', href: '/hats'},
      {image: hat, heading: 'Headwear', price: '£24.00', href: '/hats'},
      {image: hat, heading: 'Headwear', price: '£24.00', href: '/hats'},
      {image: hat, heading: 'Headwear', price: '£24.00', href: '/hats'},
    ],
  },
};