import { ProductCard, ProductCardProps } from "./product-card";

export interface ProductGridProps {
  products?: ProductCardProps[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <ul className="product-grid">
      {products?.map((product, index) => (
        <li>
          <ProductCard key={index} {...product} />
        </li>
      ))}
    </ul>
  );
}
