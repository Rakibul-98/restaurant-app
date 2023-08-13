import React from 'react';

const CuisineCard = ({cuisine}) => {

    return (
        <div className='cuisine-card border'>
            <div className="card-container md:grid grid-cols-4">
                <img className='h-full w-full col-span-2' src={cuisine.img} alt={cuisine.id} />
                <div className="card-text px-5 xl:px-10 col-span-2 pb-5 place-self-center">
                    <h4 className='text-xl xl:text-2xl font-bold pt-7 text-center md:text-left'>{cuisine.title}</h4>
                    <p className='text-justify text-sm lg:text-base py-5'>{cuisine.text}</p>
                    <button className='uppercase px-10 py-2 border-2 border-black hover:bg-black hover:text-white duration-1000'>Explore menu</button>
                </div>
            </div>
        </div>
    );
};

export default CuisineCard;