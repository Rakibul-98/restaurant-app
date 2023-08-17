import React from 'react';
import ServiceCard from '../../../Cards/ServiceCard/ServiceCard';
import { LuCake } from "react-icons/lu";
import { MdOutlineDiversity1 } from "react-icons/md";
import { GiForkKnifeSpoon, GiStairsCake} from "react-icons/gi";

const Services = () => {

    const services = [
        { id: 1, icon:<LuCake/>, name: "Birthday Party", text: "Celebrate your special day in style with our exceptional birthday party services. Let us transform your vision into reality and make your birthday an occasion to cherish for years to come." },
        { id: 2, icon:<MdOutlineDiversity1/>, name: "Corporate Function", text: "Elevate your corporate function to new heights with us – where every detail is carefully orchestrated for your success." },
        { id: 3, icon:<GiForkKnifeSpoon/>, name: "Dine In", text: "Whether you're seeking an intimate dinner for two or a gathering with friends and family, our attentive staff is dedicated to ensuring your comfort and satisfaction. " },
        { id: 3, icon:<GiStairsCake/>, name: "Wedding Party", text: "Let us bring your dream wedding to life, weaving together moments of joy, love, and celebration that will be cherished for a lifetime." },
    ]
    return (
        <div id='service' >
            <div className="service-container w-10/12 mx-auto py-20">
                <div className="service-title text-center">
                    <h3 className='title pb-3'>Services</h3>
                    <p>Services we provide</p>
                </div>
                <div className="service-div grid md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
                    {
                        services.map(s =>
                            <ServiceCard key={s.id} service={s}></ServiceCard>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;