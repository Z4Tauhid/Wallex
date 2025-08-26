import React, { use } from 'react';
import { RiSecurePaymentFill } from "react-icons/ri";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { NavLink, useLoaderData } from 'react-router';
import BillCards from '../Components/BillCards';
import { AuthContext } from '../AuthProvider/AuthProvider';
const categoryPromise = fetch('/categories.json').then (res => res.json())

const Bills = () => {
  const categoryData = use(categoryPromise) 
  
  const {user, balance, setBalance} = use(AuthContext)
  // console.log (user)

  const allBillsData = useLoaderData()
  console.log(user)
  
  
  
  return (

         <div className="w-4/5 mx-auto  flex justify-center items-center ">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8 space-y-6">
        {/* Title */}
        <div className=' flex justify-end'>
          <div className="dropdown dropdown-start">
              <div tabIndex={0} role="button" className="btn flex justify-center items-center text-center  m-1 bg-black text-[#eafe53]">Show Bills<FaArrowAltCircleDown className='text-[16px]'/></div>
              <div tabIndex={0} className=" dropdown-content  -right-1 static menu bg-base-100 rounded-box z-1 w-30 p-2 shadow-2xl space-y-2  flex flex-col justify-center items-center">
                
               

               {
                categoryData.map(cat => (<NavLink to={`/bills/${cat.id}`}><button type="submit" className=" p-1 shadow-2xl font-semibold rounded-md bg-black text-[#eafe53]">{cat.name}</button></NavLink>))
               }
              
              </div>
            </div>
        </div>
       <div className=' flex justify-center items-center  flex-col sm:flex-row sm:justify-between'>

         <h2 className="text-lg font-semibold "> {user ? <p> User: {user.displayName}</p> : "" }</h2>

         <div>
          <p className="text-lg font-semibold">Total Balance: {balance}</p>
         </div>
        
       </div>
        <hr className="border-gray-300" />

        {/* Bill Cards */}
        <div>
               <BillCards allBillsData = {allBillsData}></BillCards>
        </div>

        {/* Actions */}
        
      </div>
    </div>
        
    );
};

export default Bills;