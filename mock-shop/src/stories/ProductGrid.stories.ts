import type { Meta, StoryObj } from "@storybook/react";

import { ProductGrid } from "../components/product-grid";
import Product from "../assets/data/product.json";

const productMock = {
  range: Product.collection.title,
  name: Product.collection.products.edges[0].node.title,
  image: Product.collection.products.edges[0].node.featuredImage.url,
  price: "£20.00",
  promo: true,
};

const meta = {
  title: "Product Grid",
  component: ProductGrid,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ProductGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    products: [
      productMock,
      productMock,
      productMock,
      productMock,
      productMock,
      productMock,
      productMock,
    ],
  },
};
