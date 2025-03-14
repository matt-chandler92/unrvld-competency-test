export interface CarouselCardProps {
    image: string;
    heading: string;
    price: string;
    href: string;
}

export function CarouselCard({
    image,
    heading,
    price,
    href
}: CarouselCardProps) {
  return (
        <a href={href} className="carousel-card" style={{backgroundImage: `url(${image})`}}>
            <div className="carousel-card__header">{heading}</div>
            <div className="carousel-card__sub">From: {price}</div>
        </a>
  );
}