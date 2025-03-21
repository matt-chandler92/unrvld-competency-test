import type { Meta, StoryObj } from "@storybook/react";
import hat from "../assets/img/hat.png";

import { CarouselCard } from "../components/carousel-card";

const meta = {
  title: "Carousel Card",
  component: CarouselCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CarouselCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: hat,
    heading: "Headwear",
    price: "£24.00",
    href: "/hats",
  },
};
