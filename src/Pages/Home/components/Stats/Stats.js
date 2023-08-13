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
            <div className="w-10/12 mx-auto flex justify-around py-20">
                {
                    statesInfo.map(s =>
                        <div key={s.index} className="stat-card text-center">
                            <p className='flex justify-center text-5xl'>{s.icon}</p>
                            <p className='text-4xl font-semibold py-3'><CountUp end={s.value} duration={5} enableScrollSpy={true}></CountUp>+</p>
                            <p>{s.text}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Stats;