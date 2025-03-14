import type { Meta, StoryObj } from "@storybook/react";

import { Filters } from "../components/filters";

const meta = {
  title: "Filters",
  component: Filters,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Filters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { name: "Headwear", value: "headwear" },
      { name: "Clothing", value: "clothing" },
      { name: "Accessories", value: "accessories" },
    ],
    onChange: (value: string) => console.log(value),
  },
};
