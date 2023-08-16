import React, { useState } from 'react';
import CuisineCard from '../../../Cards/CuisineCard/CuisineCard';

const Cuisine = () => {
    const [state, setState] = useState("1");


    const cuisineList = [
        { id: 1, name: "indian" },
        { id: 2, name: "chinese" },
        { id: 3, name: "thai" },
        { id: 4, name: "italian" },
        { id: 5, name: "american" },
    ]

    const cuisines = [
        {
            id: "1",
            title: "Spices and Stories: A Journey Through Exquisite Indian Cuisine",
            text: "Rooted in ancient traditions and cultural influences, it reflects India's geographical and cultural tapestry. Indian cuisine evolved with the arrival of foreign traders, explorers, and conquerors, such as the Persians, Greeks, and Mughals.",
            items: [
                { id: 1, name: "Wrap", img: "https://i.ibb.co/B2q6rPp/i1.jpg" },
                { id: 2, name: "Dosa", img: "https://i.ibb.co/FbmyG6v/i2.jpg" },
                { id: 3, name: "Biryani", img: "https://i.ibb.co/RT4wkf9/i3.jpg" },
            ]
        },
        {
            id: "2",
            title: "Flavors of the Dragon: Exploring the Rich Tapestry of Chinese Cuisine",
            text: "Rooted in ancient agricultural practices, it evolved through dynasties and regional influences. Chinese culinary artistry combines five essential tastes—sweet, sour, bitter, salty, and umami—to create harmonious dishes. ",
            items: [
                { id: 1, name: "Chowmein", img: "https://i.ibb.co/m5s9Mp8/c1.jpg" },
                { id: 2, name: "Dumpling", img: "https://i.ibb.co/WGmLQ5p/c2.jpg" },
                { id: 3, name: "Rice bowl", img: "https://i.ibb.co/dmQzM6Z/c3.jpg" },
            ]
        },
        {
            id: "3",
            title: "Thai Temptations: A Gastronomic Adventure into Exquisite Flavors",
            text: "Thai cuisine is a vibrant and flavorful tapestry that weaves together ancient traditions and cultural influences. Rooted in a balance of four fundamental tastes—sweet, sour, salty, and spicy—it tantalizes the palate with its harmonious symphony.",
            items: [
                { id: 1, name: "BBQ", img: "https://i.ibb.co/NpZrwjn/t2.jpg" },
                { id: 2, name: "Prawn", img: "https://i.ibb.co/k4SL2dT/t1.jpg" },
                { id: 3, name: "Vegetable", img: "https://i.ibb.co/PmRBY01/t3.jpg" },
            ]
        },
        {
            id: "4",
            title: "Italian Elegance on a Plate: A Culinary Sojourn through La Dolce Vita",
            text: "The use of olive oil, tomatoes, garlic, and aromatic herbs like basil and oregano defines its essence. Northern regions favor creamy risottos and rich pastas, while the South is known for its vibrant tomato-based dishes and fresh seafood.",
            items: [
                { id: 1, name: "Steak", img: "https://i.ibb.co/TKnVgXH/a1.jpg" },
                { id: 2, name: "Burger", img: "https://i.ibb.co/r7mG0Dv/a3.jpg" },
                { id: 3, name: "Sandwich", img: "https://i.ibb.co/7nDX91y/a2.jpg" },
            ]
        },
        {
            id: "5",
            title: "Taste of the States: A Culinary Expedition into American Flavors",
            text: "From hearty comfort foods like burgers, hot dogs, and macaroni and cheese to regional specialties like New England clam chowder, Tex-Mex, and Southern barbecue, American cuisine is a reflection of its vast landscapes and cultural melting pot.",
            items: [
                { id: 1, name: "Pizza", img: "https://i.ibb.co/ZfjZD4t/italian1.jpg" },
                { id: 2, name: "Italian Salad", img: "https://i.ibb.co/bmRkp1V/italian2.jpg" },
                { id: 3, name: "Pasta", img: "https://i.ibb.co/N3xmyRn/italian3.jpg" },
            ]
        }
    ]

    const [displayCuisine, setDisplayCuisine] = useState(cuisines[0]);

    const handleCuisine = (id) => {
        setState(id)
        cuisines.forEach((cuisine) => {
            if (cuisine.id === id) {
                setDisplayCuisine(cuisine)
            }
        })
    }

    const style = "py-3 border-b-2 border-lime-400 cursor-pointer";

    return (
        <div className='w-10/12 mx-auto pb-10'>
            <div className="cuisine-title-div text-center pb-10">
                <h3 className='title pb-3'>Our Cuisines</h3>
                <p>Where Every Bite Tells a Story</p>
            </div>
            <div className='cuisine-menu-div w-10/12 md:w-7/12 mx-auto'>
                <ul className='grid grid-cols-5 gap-1 lg:gap-5 capitalize text-center text-xs md:text-base'>
                    {
                        cuisineList.map(cl =>
                            <li key={cl.id} onClick={() => handleCuisine(`${cl.id}`)} className={state === `${cl.id}` ? `bg-lime-400 text-white ${style}` : `bg-transparent ${style}`}>{cl.name}</li>
                        )
                    }
                </ul>
            </div>
            <CuisineCard cuisine={displayCuisine}></CuisineCard>
        </div>
    );
};

export default Cuisine;