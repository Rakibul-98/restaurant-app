import React from 'react';

const ChefCard = ({ chef }) => {
    return (
        <div className='relative w-10/12 md:w-full mx-auto border-2 border-dashed hover:border-lime-400 h-40 sm:hover:h-[350px] md:hover:h-[420px] lg:hover:h-[365px] xl:hover:h-[440px] 2xl:hover:h-[400px] duration-1000 group mt-28'>
            <img className='h-36 absolute -top-16 sm:group-hover:top-5 left-0 right-0 mx-auto duration-1000' src={chef.img} alt="a" />
            <div className="text-div w-fit absolute bottom-5 left-0 right-0 mx-auto text-center px-6 ">
                <h5 className='font-bold'>{chef.name}</h5>
                <p className='text-xs text-gray-400'>{chef.role}</p>
                <p className='hidden pt-3 sm:group-hover:block transition-opacity duration-1000'>{chef.text}</p>
            </div>
        </div>
    );
};

export default ChefCard;