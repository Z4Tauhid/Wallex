import React, {  useContext, useState } from 'react';
import { RiSecurePaymentFill } from "react-icons/ri";
import { AuthContext } from '../AuthProvider/AuthProvider';



const OnebillCard = ({data}) => {
    
    const {balance, setBalance} = useContext(AuthContext)

    const [clicked, setClicked] = useState(() => {
    return localStorage.getItem(`paid-${data.Uid}`) === "true";
  });


   const handlePayment = () => {

    if (balance < data.amount) {
        alert ("Insufficient balance to pay this bill.")
        setClicked(false);
        return
    }

    
    // let y = balance - data.amount
    setBalance(balance - data.amount)
     setClicked(true);
    localStorage.setItem(`paid-${data.Uid}`, "true"); // persist state
    // console.log("Payment done for", data.name);
    // setBalance(balance - data.amount)
  };
        
    return (
        
       
        
        <div>
                    <div className="space-y-6">
                  <div className="flex flex-col   justify-between    border-b border-gray-300 pb-6">
                    {/* Image */}
                    <div className="flex  items-center w-full sm:w-auto space-x-4">
                      <RiSecurePaymentFill  className='text-5xl bg-black rounded-xl text-[#eafe53] p-1' />
                     
                      {/* Details */}
                      <div className="flex flex-col justify-between">
                        <h3 className="text-lg font-semibold">{data.name}</h3>
                        <p className="text-sm text-gray-600">Classic</p>
                      </div>
                      
                    </div>
        
                    {/* Price */}
                    <div className="text-right justify-end items-end  sm:ml-auto mt-4 sm:mt-0">
                      <p className="text-xl font-semibold">{data.amount}Tk.</p>
                      
                    </div>
        
                    <div className='flex justify-center'>
                         <button onClick={handlePayment} disabled={clicked} type="submit" className="w-5/10 mx-auto px-8 py-3 font-semibold rounded-md bg-black text-[#eafe53]  disabled:text-black  disabled:bg-gray-200 disabled:cursor-not-allowed">
                         {
                            clicked ? "Bill Paid" : "Pay Bill"
                         }
                         </button>
                    </div>
                  </div>
                </div>
                </div>
    );
};

export default OnebillCard;