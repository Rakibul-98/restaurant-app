import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Gallery = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        }
    };

    const carouselData =[
        {
            id:1,
            img:"https://i.ibb.co/7V8ThhN/pexels-yulia-ilina-8820618.jpg",
            type: "herb",
            name: "Spices"
        },
        {
            id:2,
            img:"https://i.ibb.co/vhmH53d/pexels-polina-tankilevitch-3872418.jpg",
            type: "ice-cream",
            name: "Dessert"
        },
        {
            id:3,
            img:"https://i.ibb.co/wMfQcXg/pexels-jane-doan-1132047.jpg",
            type: "fruits",
            name: "Fruits"
        },
        {
            id:4,
            img:"https://i.ibb.co/BwK7gfG/pexels-mali-maeder-65175.jpg",
            type:"meat",
            name:"Meat"
        },
        {
            id:5,
            img:"https://i.ibb.co/yBX7wsS/pexels-sarah-chai-7262863.jpg",
            type: "vegetables",
            name: "Vegetables"
        }
    ]

    return (
        <div>
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
                centerMode={true}
            >
                {
                    carouselData.map(cd=>
                        <div key={cd.id} className='relative group'>
                            <img className='lg:px-5 px-2' src={cd.img} alt="c" />
                        </div>
                        )
                }
            </Carousel>
        </div>
    );
};

export default Gallery;