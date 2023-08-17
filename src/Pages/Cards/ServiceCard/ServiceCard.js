import React from 'react';

const ServiceCard = ({service}) => {
    return (
        <div className='text-center py-5 shadow-xl hover:shadow-lime-500 group hover:shadow-2xl hover:scale-110 hover:bg-lime-400 hover:text-white'>
            <p className='flex justify-center text-5xl text-orange-500 group-hover:text-white group-hover:scale-125'>{service.icon}</p>
            <p className='py-5 text-2xl font-semibold'>{service.name}</p>
            <p className='text-sm w-11/12 mx-auto'>{service.text}</p>
        </div>
    );
};

export default ServiceCard;