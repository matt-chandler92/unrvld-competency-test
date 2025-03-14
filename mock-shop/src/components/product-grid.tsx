import { ProductCard, ProductCardProps } from "./product-card";

export interface ProductGridProps {
  products: ProductCardProps[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
}
