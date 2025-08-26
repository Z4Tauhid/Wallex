import React from 'react';
import mbpay from "/mbpay.png"
import { Link } from 'react-router';

const Hero = () => {
    
    
   
    
    
    return (
        <div>
            <section className="bg-white">
      
      

                {/* Hero Section */}
                <div className="flex flex-col sm:flex-row items-center justify-around px-6 lg:px-20 py-16 lg:py-24">
                    {/* Left Content */}
                    <div className="lg:w-1/2 max-w-xl">
                    <h2 className="text-5xl font-bold leading-tight text-black">
                        Made to convert, <br /> proven to perform
                    </h2>
                    <p className="mt-6 text-lg text-gray-600">
                        Meet the fully customizable, all-in-one checkout solution that streamlines complex setups, 
                        powers Europe's biggest brands, and delivers real results.
                    </p>
                    <button className="mt-8 px-6 py-3 bg-black text-[#eafe53] text-xl font-bold rounded hover:bg-gray-900">
                        <Link to={"/register"}>Get started</Link>
                    </button>
                    </div>

                    {/* Right Image */}
                    <div className=" flex justify-center">
                    <img
                        src={mbpay}
                        alt="Checkout demo"
                        className="max-w-xs lg:max-w-sm drop-shadow-xl"
                    />
                    </div>
                </div>


      
            </section>
        </div>
    );
};

export default Hero;