import React from 'react';

const ServiceCard = ({service}) => {
    return (
        <div className='text-center py-5 shadow-xl hover:shadow-lime-500 hover:shadow-2xl'>
            <p className='flex justify-center text-5xl'>{service.icon}</p>
            <p className='py-5 text-2xl font-semibold'>{service.name}</p>
            <p className='text-sm w-11/12 mx-auto'>{service.text}</p>
        </div>
    );
};

export default ServiceCard;