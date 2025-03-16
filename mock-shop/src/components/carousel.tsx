import { useRef, useState } from "react";
import { CarouselCard, CarouselCardProps } from "./carousel-card";

export interface CarouselProps {
  cards: CarouselCardProps[];
}

export function Carousel({ cards }: CarouselProps) {
  const isDesktop = window.innerWidth >= 992;
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 992;
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const handleCarouselSlide = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = Number((e.target as HTMLButtonElement).dataset.index);
    if (typeof target == "number") {
      carouselRef.current &&
        carouselRef.current.children
          .item(target)
          ?.scrollIntoView({ behavior: "smooth", inline: "start" });
    }
  };
  const handleCarouselScroll = (e: React.UIEvent<HTMLDivElement>) => {
    let visibleChildFound = false;
    const carouselRightBoundary =
      carouselRef.current?.getBoundingClientRect().right;
    const carouselLeftBoundary =
      carouselRef.current?.getBoundingClientRect().left;
    const carouselCenter =
      carouselRightBoundary &&
      carouselLeftBoundary &&
      (carouselRightBoundary - carouselLeftBoundary) / 2;
    const factor = isDesktop ? 3 : isTablet ? 2 : 1;
    carouselRef.current?.childNodes.forEach((child, index) => {
      if (isDesktop || isTablet) {
        const isMultiple = index % factor == 0;
        const isActiveChild =
          carouselCenter &&
          Boolean(
            (child as HTMLElement).getBoundingClientRect().left <=
              carouselRightBoundary &&
              (child as HTMLElement).getBoundingClientRect().right >
                carouselLeftBoundary
          );

        isMultiple && console.log(child, isActiveChild);
        if (!visibleChildFound && isActiveChild && isMultiple) {
          setActiveItem(index);
          console.log(activeItem);
          visibleChildFound = true;
        }
      } else {
        const isActiveChild =
          carouselCenter &&
          Boolean(
            (child as HTMLElement).getBoundingClientRect().left <=
              carouselCenter &&
              (child as HTMLElement).getBoundingClientRect().right >=
                carouselCenter
          );
        if (!visibleChildFound && isActiveChild) {
          setActiveItem(index);
          visibleChildFound = true;
        }
      }
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="carousel">
            <div
              className="carousel__inner"
              onScroll={handleCarouselScroll}
              ref={carouselRef}
            >
              {cards.map((card, index) => (
                <CarouselCard data-index={index} key={index} {...card} />
              ))}
            </div>
            {/* TODO - refactor so that progress indicator is it's own component to make this more DRY */}
            <nav className="carousel__controls carousel__controls--desktop">
              {cards.map(
                (card, index) =>
                  index % 3 == 0 && (
                    <button
                      className={
                        activeItem === index
                          ? "carousel__control carousel__control--active"
                          : "carousel__control"
                      }
                      data-index={index}
                      key={index}
                      aria-label={String(index / 3 + (index % 3) + 1)}
                      onClick={handleCarouselSlide}
                    />
                  )
              )}
            </nav>
            <nav className="carousel__controls carousel__controls--tablet">
              {cards.map((card, index) => {
                return (
                  index % 2 == 0 && (
                    <button
                      className={
                        activeItem === index
                          ? "carousel__control carousel__control--active"
                          : "carousel__control"
                      }
                      data-index={index}
                      key={index}
                      aria-label={String(index / 2 + (index % 2) + 1)}
                      onClick={handleCarouselSlide}
                    />
                  )
                );
              })}
            </nav>
            <nav className="carousel__controls carousel__controls--mobile">
              {cards.map((card, index) => (
                <button
                  className={
                    activeItem === index
                      ? "carousel__control carousel__control--active"
                      : "carousel__control"
                  }
                  onClick={handleCarouselSlide}
                  data-index={index}
                  aria-label={String(index + 1)}
                  key={index}
                />
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
