import React from 'react';
import mtjump from "/mtjump.jpg"
import performance from "/performance.avif"

import Marquee from "react-fast-marquee";
import { Link } from 'react-router';

const Banner = () => {
    
    
    
    return (
        <section className="px-4 mb-12  w-11/12 mx-auto">
      <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden">
        {/* Left Image */}
        <div>
          <img
            src={mtjump}
            alt="Person jumping in the mountains"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col  gap-5 shadow-2xl rounded-2xl">
          {/* Yellow Highlight */}
          <div className="bg-[#E6FF3F] p-8 flex items-center">
            <p className="text-lg font-semibold leading-snug text-black">
              From fast–growing brands to global enterprises, over{" "}
              <span className="font-bold">24,000 businesses worldwide</span> trust WALLEX to power their checkout.
            </p>
          </div>

          {/* Stat Block */}
          <div className="bg-gray-100 p-8 flex flex-col justify-center h-full shadow-2xl rounded-2xl">
            <h2 className="text-5xl font-bold text-black">85%</h2>
            <p className="mt-3 text-gray-600 text-sm">
              of shoppers who use WALLEX checkout say it's a better experience than other online checkouts.
            </p>
          </div>
        </div>
      </div>


      <div className="bg-gray-50 rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 mt-10">

            {/* Left side text */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Serious about sales.<br />
          <span className="text-gray-500 font-medium">
            Obsessed with results.
          </span>
        </h2>
        <p className="mt-4 text-gray-600 text-sm md:text-base max-w-md">
          Experience a checkout that’s fast, frictionless, and made to convert.
          We offer every major payment method with a seamless, familiar flow
          from cart to confirmation so you can drive sales while building
          loyalty.
        </p>
        <button className="mt-6 bg-black shadow-2xl text-[#E6FF3F] px-4 py-2 rounded-sm font-medium hover:bg-gray-800 transition">
         <Link to={"/about"}> Read more about us</Link>
        </button>
      </div>

      {/* Right side image */}
      <div className="flex-1 flex justify-center">
        <div className="bg-gray-200 rounded-lg overflow-hidden shadow-2xl shadow-md">
          <img
            src={performance}
            alt="Checkout Preview"
            className="w-full h-auto"
          />
        </div>
      </div>

      </div>

      {/* Marque Section */}

     <Marquee speed={120} pauseOnHover className='flex mt-8 gap-10'>
 

        <div className='flex gap-20'>
             
                <img className='h-10 lg:h-15' src="https://cdn.prod.website-files.com/679b363bfe3c2f0a4c7c183a/67dbd1af789b2560115fe9c6_coop.svg" alt="" />
                <img className='h-10 lg:h-15' src="https://cdn.prod.website-files.com/679b363bfe3c2f0a4c7c183a/679b363bfe3c2f0a4c7c1848_apotea.svg" alt="" />
                <img className='h-10 lg:h-15' src="https://cdn.prod.website-files.com/679b363bfe3c2f0a4c7c183a/679b363bfe3c2f0a4c7c184b_chimi.svg" alt="" />
                <img className='h-10 lg:h-15' src="https://cdn.prod.website-files.com/679b363bfe3c2f0a4c7c183a/679b363bfe3c2f0a4c7c184c_clasohlson.svg" alt="" />
                <img className='h-10 lg:h-15' src="https://cdn.prod.website-files.com/679b363bfe3c2f0a4c7c183a/679b363bfe3c2f0a4c7c184d_gymgrossisten.svg" alt="" />
                <img className='h-10 lg:h-15' src="https://cdn.prod.website-files.com/679b363bfe3c2f0a4c7c183a/679b363bfe3c2f0a4c7c184a_asket.svg" alt="" />
                <img className='h-10 lg:h-15' src="https://cdn.prod.website-files.com/679b363bfe3c2f0a4c7c183a/679b363bfe3c2f0a4c7c184e_kicks.svg" alt="" />
        </div>
  
    </Marquee>
        </section>
    );
};

export default Banner;