import React from 'react';
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { NavLink } from 'react-router';
const Footer = () => {
    return (
        <div className='bg-black text-white py-3'>
           <div className='w-10/12 mx-auto flex justify-around lg:justify-between'>
           

            <div className='flex flex-col gap-2 lg:pt-5 '> 
                
                <p className='text-sm font-dm'>Merchant support <br /> support@wallex.com <br /> +46 8 525 124 45</p>
                <p className='text-sm font-dm'>Find Us On</p>
                <div className='flex gap-4'>
                    <BsLinkedin className='  text-lg md:text-2xl text-[#eafe53]'/>
                    <FaFacebook className='  text-lg md:text-2xl text-[#eafe53]' />
                    <BsInstagram className=' text-lg md:text-2xl text-[#eafe53]' />
                    <FaGithub className='    text-lg md:text-2xl text-[#eafe53]'/>
                </div>
            </div>


            <div className='flex flex-col lg:flex-row justify-between gap-2 lg:gap-5 hover:underline-[#eafe53] items-center'>
                <NavLink to={"/"} className="hover:text-[#eafe53] text-lg  font-medium  ">Home</NavLink>
                <NavLink to={"/about"} className="hover:text-[#eafe53] text-lg  font-medium  ">About</NavLink>
                
                <NavLink to={"login"} className="hover:text-[#eafe53] text-lg  font-medium  ">Login</NavLink>
                
            </div>

            <div className='hidden lg:block lg:pt-7'>
                <p className='text-sm font-dm'>Address : </p>
                <p className='text-sm font-dm'>Brahegatan 10</p>
                <p className='text-sm font-dm'>114 37 Stockholm, Sweden</p>
            </div>


            

           </div>

           <div className='flex justify-center mt-8 lg:mt-0'>
            <p className='text-6xl font-black font-dm '>WALLEX</p>
           </div>
           <div className='w-10/12 mx-auto'>
            <p className='text-[10px] md:text-[12px]'>© 2025 Kustom AB | Reg. no. 559463-5567 | All rights reserved.</p>
            
           </div>
        </div>
    );
};

export default Footer;