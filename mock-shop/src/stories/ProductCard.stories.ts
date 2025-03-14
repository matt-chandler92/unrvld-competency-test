import type { Meta, StoryObj } from "@storybook/react";

import { ProductCard } from "../components/product-card";
import Product from "../assets/data/product.json";

const meta = {
  title: "Product Card",
  component: ProductCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    range: Product.collection.title,
    name: Product.collection.products.edges[0].node.title,
    image: Product.collection.products.edges[0].node.featuredImage.url,
    price: "£20.00",
    promo: true,
  },
};
