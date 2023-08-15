import React from 'react';

const Specialty = () => {

    const specialties = [
        { id: 1, title: "Signature", text: "Each cut is meticulously marinated in a harmonious blend of secret herbs and spices, then expertly grilled to achieve that ideal balance of tenderness and flavor." },
        { id: 2, title: "Seasonal", text: "Experience the changing seasons on your plate with our carefully curated seasonal dishes." },
    ]
    return (
        <div className='bg-gradient-to-b from-slate-300 to-transparent'>
            <div className="w-10/12 mx-auto md:grid grid-cols-12 gap-10 content-center py-20">
                <div className="specialty-text-div col-span-7 xl:col-span-8 place-self-center">
                    <small className='font-bold'>— specialty</small>
                    <h3 className='title lg:w-7/12'>Explore our mouth watering specialties</h3>
                    <p className='py-5 xl:w-8/12 lg:10/12'>Welcome to our culinary haven, where we take pride in crafting marvels that ignite your senses.</p>
                    <div className="special-category-div lg:grid grid-cols-2 gap-16">
                        {
                            specialties.map(s =>
                                <div key={s.id} className="signature-div">
                                    <h5 className='font-bold py-2'>{s.title}</h5>
                                    <p className='text-sm'>{s.text}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="specialty-img-div mt-5 col-span-5 xl:col-span-4 place-self-center">
                    <img className='rounded-full shadow-xl' src="https://i.ibb.co/fCTt6mG/signature.png" alt="special" />
                </div>
            </div>
        </div>
    );
};

export default Specialty;