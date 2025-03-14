export interface ProductCardProps {
  range: string;
  name: string;
  description?: string;
  variant?: string;
  price: string;
  promo: boolean;
  image: string;
}

export function ProductCard({
  range,
  name,
  description,
  variant,
  price,
  promo,
  image,
}: ProductCardProps) {
  return (
    <div className="product-card">
      <div className="product-card__top">
        <img src={image} alt={name} />
        {promo && <span className="product-card__promo">Best Seller</span>}
      </div>
      <div className="product-card__bottom">
        <span className="bold">{range}</span>
        <a className="standard-case regular" href="">
          {name}
        </a>
        <span className="standard-case regular">{description}</span>
        <span className="grey-06 standard-case regular">{variant}</span>
        <span className="standard-case regular">{price}</span>
      </div>
    </div>
  );
}
