import React from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const ReviewCard = ({ review }) => {
    return (
        <div className="review-card text-center">
            <img className='h-32 rounded-full border-2 border-dotted border-y-lime-500 border-x-pink-600 p-1 mx-auto' src={review.img} alt="people" />
            <div className='w-[150px] mx-auto pt-5'>
                <Rating
                    value={review.value}
                    readOnly
                />
            </div>
            <p className='py-5 md:w-[600px] mx-auto'>{review.text}</p>
            <h5 className='font-bold text-lg'>{review.name}</h5>
            <p className='text-xs'>Customer</p>
        </div>
    );
};

export default ReviewCard;