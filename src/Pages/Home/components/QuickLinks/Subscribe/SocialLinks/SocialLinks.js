import React from 'react';
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaPinterestP, FaLinkedinIn } from "react-icons/fa";

const SocialLinks = () => {
    const socials = [
        { id: 1, icon: <FaFacebookF />, link: "https://www.facebook.com/rakibul.rupom2001", class: "hover:bg-violet-500 border-violet-500 text-violet-500" },
        { id: 2, icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/rakibul-98/", class: "hover:bg-blue-300 border-blue-300 text-blue-300" },
        { id: 3, icon: <BsTwitter />, link: "https://rakibul-98.medium.com/", class: "hover:bg-sky-500 border-sky-500 text-sky-500" },
        { id: 4, icon: <FaPinterestP />, link: "https://portfolio-rakibul.netlify.app/", class: "hover:bg-red-600 border-red-600 text-red-600" },
        { id: 5, icon: <BsInstagram />, link: "https://github.com/Rakibul-98", class: "hover:bg-pink-600 border-pink-600 text-pink-600" },
    ]

    return (
        <div className='flex mt-2'>
            {
                socials.map(s =>
                    <a className={`p-2 rounded-full mr-3 border-2 hover:text-white hover:scale-125 hover:rotate-[720deg] ${s.class} duration-300`} key={s.id} href={s.link} target="_blank" rel="noOpener noReferrer">{s.icon}</a>
                )
            }
        </div>
    );
};

export default SocialLinks;