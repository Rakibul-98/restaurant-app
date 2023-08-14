import React, { useState } from 'react';
import ReviewCard from '../../../Cards/ReviewCard/ReviewCard';

const Reviews = () => {
    const [state, setState] = useState("3");

    const reviews = [
        { id: 1, img: "https://i.ibb.co/hW39wrg/p1.jpg", text: "The ambiance was inviting, and the dishes were bursting with creativity and flavor. From start to finish, each course was a pleasant surprise that left my taste buds dancing.", name: "Glen P. Sharp", value: 5 },
        { id: 2, img: "https://i.ibb.co/9wYmnv9/p3.jpg", text: "The inventive menu offers a fresh take on familiar flavors, and the warm ambiance makes you feel right at home. The friendly service and reasonable prices seal the deal. ", name: "Kendall E. Dunn", value: 5 },
        { id: 3, img: "https://i.ibb.co/g9LFc99/p2.jpg", text: "From the elegant decor to the exquisite dishes, every detail was meticulously curated. The flavors danced on my palate, and the attentive staff made me feel like royalty.", name: "George M. Oconnell", value: 5 },
        { id: 4, img: "https://i.ibb.co/dkYQzbC/p4.jpg", text: "The fusion of flavors was expertly executed, and the chic setting elevated the experience. Creative cocktails paired perfectly with the dishes, showcasing the chef's expertise.", name: "Charles J. Hall", value: 4 },
        { id: 5, img: "https://i.ibb.co/nCtPH33/p5.jpg", text: "The locally sourced ingredients shine in every bite, and the attentive staff makes you feel like a valued guest. If you're seeking comfort and quality, look no further than this hidden gem.", name: "Travis K. Pendarvis", value: 5 },
    ]

    const [activeReview, setActiveReview] = useState(reviews[2]);

    const handleReview = (id) => {
        setState(id);
        reviews.forEach((r) => {
            if (id === r.id.toString()) {
                setActiveReview(r);
            }
        })
    }

    const style = "h-5 w-5 border-2 border-blue-400 rounded-full mx-1";

    return (
        <div className='w-10/12 mx-auto pb-20'>
            <div className="review-sec-header text-center pb-10">
                <h3 className='title mb-2'>What Clients Say</h3>
                <p>Elevating Excellence through Your Voice: Our Restaurant, Your Review</p>
            </div>
            <ReviewCard review={activeReview}></ReviewCard>
            <div className="action-btn-div flex justify-center py-5">
            {
                reviews.map(r => (
                    <button key={r.id} onClick={() => handleReview(`${r.id}`)} className={state === `${r.id}` ? `bg-blue-600 ${style}` : `${style}`}></button>
                ))
            }
            </div>
        </div>
    );
};

export default Reviews;