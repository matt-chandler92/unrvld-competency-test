import { useRef, useState } from "react";
import { CarouselCard, CarouselCardProps } from "./carousel-card";

export interface CarouselProps {
    cards: CarouselCardProps[];
}

export function Carousel({cards} : CarouselProps) {
    
    const [activeItem, setActiveItem] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const handleCarouselSlide = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = Number((e.target as HTMLButtonElement).dataset.index);
        if(typeof target == "number"){
            carouselRef.current && carouselRef.current.children.item(target)?.scrollIntoView({behavior: "smooth", inline: "start"})
        }
    }
    const handleCarouselScroll = () => {
        let visibleChildFound = false;
        const carouselRightBoundary = carouselRef.current?.getBoundingClientRect().right;
        const carouselLeftBoundary = carouselRef.current?.getBoundingClientRect().left;
        const carouselCenter = (carouselRightBoundary && carouselLeftBoundary)&&(carouselRightBoundary - carouselLeftBoundary )/2
        
        carouselRef.current?.childNodes.forEach((child, index)=>{
            const isActiveChild = carouselCenter && Boolean((child as HTMLElement).getBoundingClientRect().left <= carouselCenter && (child as HTMLElement).getBoundingClientRect().right >= carouselCenter);
            if (!visibleChildFound && isActiveChild){
                setActiveItem(index);
                visibleChildFound = true;
            }
        })
    }

    //TODO - add click/drag for Desktop

    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="carousel">
                        <div className="carousel__inner" onScroll={handleCarouselScroll} ref={carouselRef}>
                            {cards.map((card, index) => <CarouselCard data-index={index} key={index} {...card} />)}
                        </div>
                        {/* TODO - refactor so that progress indicator is it's own component to make this more DRY */}
                        <div className="carousel__controls carousel__controls--desktop">
                            {cards.map((card, index) => index %3 == 0 && <button className={activeItem === index ? "carousel__control carousel__control--active": "carousel__control"} data-index={index} key={index} onClick={handleCarouselSlide}/>)}    
                        </div>
                        <div className="carousel__controls carousel__controls--tablet">
                            {cards.map((card, index) => index %2 == 0 && <button className={activeItem === index ? "carousel__control carousel__control--active": "carousel__control"} data-index={index} key={index} onClick={handleCarouselSlide}/>)}    
                        </div>
                        <div className="carousel__controls carousel__controls--mobile">
                            {cards.map((card, index) => <button className={activeItem === index ? "carousel__control carousel__control--active": "carousel__control"} onClick={handleCarouselSlide} data-index={index} key={index}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}