import React from 'react';
import ContactInfo from './ContactInfo/ContactInfo';
import Subscribe from './Subscribe/Subscribe';

const QuickLinks = () => {

    const links = [
        {
            id: 1,
            name: "links",
            link: [
                { id: 1, name: "Home", path: "/" },
                { id: 2, name: "Signature", path: "#signature" },
                { id: 3, name: "Gallery", path: "#gallery" },
                { id: 4, name: "Reviews", path: "#review" },
                { id: 5, name: "Cuisine", path: "#cuisine" },
                { id: 6, name: "Chefs", path: "#chef" },
            ]
        },
        {
            id: 2,
            name: "about us",
            link: [
                { id: 1, name: "Owner", path: "" },
                { id: 2, name: "About", path: "#" },
                { id: 4, name: "Contact", path: "#" },
                { id: 5, name: "Career", path: "#" },
                { id: 6, name: "Terms & Service", path: "#" },
            ]
        },
        
    ]

    const hours = [
        { id: 1, day: "Friday", time: "9.00 AM - 11.00 PM" },
        { id: 2, day: "Saturday ", time: "9.00 AM - 11.00 PM" },
        { id: 3, day: "Sunday", time: "10.00 AM - 10.00 PM" },
        { id: 4, day: "Monday", time: "10.00 AM - 10.00 PM" },
        { id: 5, day: "Tuesday", time: "10.00 AM - 10.00 PM" },
        { id: 6, day: "Wednesday", time: "10.00 AM - 10.00 PM" },
        { id: 7, day: "Thursday", time: "9.00 AM - 11.00 PM" },
    ]

    const titleStyle ="font-bold py-3 uppercase tracking-wide";

    return (
        <div className='w-10/12 mx-auto'>
            <div className='contact-container'>
                <ContactInfo />
            </div>
            <div className="links-container grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-5 py-10 ">
                <div className="logo-div w-full text-center lg:text-justify col-span-2 sm:col-span-4 lg:col-span-2 sm:w-7/12  mx-auto">
                    <img className='h-20 mx-auto lg:mx-0 mb-2' src="https://i.ibb.co/GkTWfnX/fav-2.png" alt="" />
                    <p>Step into a world of flavors where culinary excellence meets warm hospitality.</p>
                </div>
                {
                    links.map(l =>
                        <div key={l.id} className=''>
                            <h5 className={`${titleStyle}`}>{l.name}</h5>
                            <ul>
                                {
                                    l.link.map(lk =>
                                        <li key={lk.id} ><a className='text-sm hover:font-bold' href={lk.path}>{lk.name}</a></li>
                                    )
                                }
                            </ul>
                        </div>
                    )
                }
                <div className="hours-div col-span-2 w-9/12 sm:w-full xl:w-8/12">
                    <h5 className={`${titleStyle}`}>Opening Hours</h5>
                    <ul>
                        {
                            hours.map(h =>
                                <li key={h.id} className='flex justify-between text-sm'><span>{h.day}</span><span>{h.time}</span></li>

                            )
                        }
                    </ul>
                </div>
            </div>
            <div className="subscribe-container">
                <Subscribe />
            </div>
        </div>
    );
};

export default QuickLinks;