import React from 'react';
import CountUp from 'react-countup';

const Stats = () => {
    return (
        <div>
            <div className="stat-card">
                <p>icon</p>
                <p><CountUp end={100} duration={5} enableScrollSpy={true}></CountUp>+</p>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    );
};

export default Stats;