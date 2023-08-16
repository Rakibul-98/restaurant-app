import React from 'react';

const CuisineCard = ({ cuisine }) => {

    return (
        <div className="cuisine-card py-5">
            <div className="card-text text-center w-10/12 md:w-8/12 xl:w-6/12 mx-auto">
                    <h4 className='text-2xl font-bold'>{cuisine.title}</h4>
                    <p className='text-sm text-gray-400 py-5'>{cuisine.text}</p>
                </div>
            <div className="items-div grid grid-cols-3 gap-5">
                {
                    cuisine.items.map(i =>
                        <div className="item-card w-full shadow-2xl rounded-lg hover:bg-lime-400 hover:text-white cursor-pointer">
                            <img className='rounded-t-lg' src={i.img} alt="" />
                            <p className='text-center uppercase font-bold py-2'>{i.name}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default CuisineCard;