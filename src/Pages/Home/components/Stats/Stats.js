import React from 'react';
import CountUp from 'react-countup';
import { PiBowlFoodLight } from "react-icons/pi";
import { MdOutlineAssignmentTurnedIn, MdRestaurantMenu } from "react-icons/md";
import { FaFaceGrinHearts } from "react-icons/fa6";
import { SiCodechef } from "react-icons/si";

const Stats = () => {

    const statesInfo = [
        { icon: <PiBowlFoodLight />, value: 5, text: "Cuisines" },
        { icon: <MdRestaurantMenu />, value: 50, text: "Items" },
        { icon: <MdOutlineAssignmentTurnedIn />, value: 5000, text: "Order Completed" },
        { icon: < FaFaceGrinHearts />, value: 3000, text: "Happy customer" },
        { icon: <SiCodechef />, value: 10, text: "Stuffs" },
    ]

    return (
        <div>
            <div className="w-11/12 lg:w-9/12 xl:w-8/12 mx-auto grid grid-cols-5 py-20">
                {
                    statesInfo.map(s =>
                        <div key={s.value} className="stat-card text-center mx-2">
                            <p className='flex justify-center text-2xl sm:text-4xl'>{s.icon}</p>
                            <p className='text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold py-3'><CountUp end={s.value} duration={5} enableScrollSpy={true}></CountUp>+</p>
                            <p className='text-xs lg:text-base'>{s.text}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Stats;