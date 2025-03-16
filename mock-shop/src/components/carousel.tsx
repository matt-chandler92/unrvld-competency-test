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
          ?.scrollIntoView({ behavior: "smooth", inline: "start" }); //triggers handleCarouselScoll to update the navigation
    }
  };

  const handleCarouselScroll = (e: React.UIEvent<HTMLDivElement>) => {
    let visibleChildFound = false;

    // get bounding box of the carousel and calculate the center of it for mobile
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
      // if desktop or tablet then check that the card is a multiple of the number of cards shown on screen
      if (isDesktop || isTablet) {
        const isMultiple = index % factor == 0;
        //check for carousel center and by proxy check for right and left boundary then return true if the card is within the right and left boundary
        const isActiveChild =
          carouselCenter &&
          Boolean(
            (child as HTMLElement).getBoundingClientRect().left <=
              carouselRightBoundary &&
              (child as HTMLElement).getBoundingClientRect().right >
                carouselLeftBoundary
          );
        //update the navigation
        if (!visibleChildFound && isActiveChild && isMultiple) {
          setActiveItem(index);
          visibleChildFound = true;
        }
      } else {
        //if mobile check if the card straddles the center of the carousel
        const isActiveChild =
          carouselCenter &&
          Boolean(
            (child as HTMLElement).getBoundingClientRect().left <=
              carouselCenter &&
              (child as HTMLElement).getBoundingClientRect().right >=
                carouselCenter
          );

        //update the navigation
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
