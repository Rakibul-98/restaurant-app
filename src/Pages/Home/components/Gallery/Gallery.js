import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Gallery = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };

    const carouselData = [
        {
            id: 2,
            img: "https://i.ibb.co/sC17XMs/2.jpg",
        },
        {
            id: 3,
            img: "https://i.ibb.co/CM0rMdB/3.jpg",
        },
        {
            id: 4,
            img: "https://i.ibb.co/YR133M0/4.jpg",
        },
        {
            id: 5,
            img: "https://i.ibb.co/9wsGrkN/5.jpg",
        },
        {
            id: 6,
            img: "https://i.ibb.co/34VSXKZ/6.jpg",
        },
        {
            id: 7,
            img: "https://i.ibb.co/M89Jwwv/7.jpg",
        },
        {
            id: 8,
            img: "https://i.ibb.co/Hrp9Cdx/8.jpg",
        },
        {
            id: 9,
            img: "https://i.ibb.co/419nfWq/9.jpg",
        },
        {
            id: 10,
            img: "https://i.ibb.co/5BdpY1r/10.jpg",
        },
        {
            id: 12,
            img: "https://i.ibb.co/LNKYq6B/11.jpg",
        },
        {
            id: 13,
            img: "https://i.ibb.co/wwY9n8Q/12.jpg",
        },
        {
            id: 14,
            img: "https://i.ibb.co/V3V5TZj/13.jpg",
        },
    ]

    return (
        <div className='w-10/12 mx-auto pb-20'>
            <div className='gallery-title-div text-center'>
                <h3 className='title mb-3'>Amazing Gallery</h3>
                <p>Experience the ambience and the flavours of our restaurant</p>
            </div>
            <div className="gallery-car-div mt-10">
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1500}
                    keyBoardControl={true}
                    transitionDuration={500}
                    containerClass="carousel-container"
                    centerMode={true}
                >
                    {
                        carouselData.map(cd =>
                            <div key={cd.id}>
                                <img className='px-2' src={cd.img} alt={`img-${cd.id}`} />
                            </div>
                        )
                    }
                </Carousel>
            </div>
        </div>
    );
};

export default Gallery;