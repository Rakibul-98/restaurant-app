import React from 'react';
import ChefCard from '../../../Cards/ChefCard/ChefCard';

const Chefs = () => {

    const chefs = [
        { id: 1, name: "Gerard D. Sanders", img: "https://i.ibb.co/pzWcrnd/pexels-ivan-samkov-8951246.jpg", role: "CEO, Head Chef", text: "Hello, my name is Gerard D. Sanders and I am the head chef at this Restaurant. I have over 15 years of experience in the culinary industry, specializing in farm-to-table cuisine." },
        { id: 2, name: "Scott B. Coleman", img: "https://i.ibb.co/YpkHgZT/pexels-kampus-production-6605422.jpg", role: "Chef de cuisine", text: "I'm Scott and I am the chef de cuisine at this restaurant. I have worked in some of the most prestigious restaurants in Europe and have a deep love for Italian cuisine." },
        { id: 3, name: "Kimberly J. Galarza", img: "https://i.ibb.co/kSZP54h/pexels-gustavo-fring-3983670.jpg", role: "Head pastry Chef", text: "Hi there, I'm Kimberly and I am the head pastry chef at Sweet Delights Bakery. I have a background in French pastry and have trained under some of the best pastry chefs in Paris." },
        { id: 4, name: "Reginald S. Hayes", img: "https://i.ibb.co/nz3YJNZ/pexels-tirachard-kumtanom-887827.jpg", role: "Executive Chef", text: "My name is Reginald and I am the executive chef at The Grand Hotel. I have been in the culinary industry for over 20 years and have experience in French, and American." },
    ]

    return (
        <div className="chef-container w-10/12 mx-auto relative py-20 duration-1000">
            <div className="sec-title-div text-center">
                <h3 className='title'>Chefs</h3>
                <p>Where Creativity Meets Culinary Artistry</p>
            </div>
            <div className='grid xl:grid-cols-4 md:grid-cols-2 gap-5 relative mt-28'>
                {
                    chefs.map(c =>
                        <ChefCard key={c.id} chef={c}></ChefCard>
                    )
                }
            </div>
        </div>
    );
};

export default Chefs;