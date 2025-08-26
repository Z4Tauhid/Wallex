import React, { use } from 'react';
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';


const Navbar = () => {
    
    const {user, setUser, signOutUser, loading, setEmailVerified, emailverified} = use(AuthContext)


  

     
    if (loading == false && user) {
      if(user.emailVerified) {
       setEmailVerified(true)
      }


    }

    
    

     

    const handlePhoneLogout = () => {
        signOutUser().then (() => {
				// console.log("sign Outed")
        setEmailVerified(false)
        
        setUser(null)
			}).catch((error) => {
				// console.log(error)
			})
    }



    const handlePCLogOut = () => {


      signOutUser().then (() => {
				// console.log("sign Outed")
        setUser(null)
        setEmailVerified(false)
        
			}).catch((error) => {
				// console.log(error)
			})


    }


const closeDrawer = () => {
  const drawerCheckbox = document.getElementById('my-drawer');
  if (drawerCheckbox) drawerCheckbox.checked = false;
};
    
    return (
        <div className="navbar bg-[#E6FF3F]">

            <div className='w-11/12 mx-auto flex justify-between items-center'>

            <div className="flex ">
    

    <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn bg-[#eafe53] border-0 lg:hidden drawer-button"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg></label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-[#8f9b38] text-base-content  min-h-full mt-16 w-50 sm:w-80 flex   gap-2">
      {/* Sidebar content here */}
      <li><NavLink onClick={closeDrawer} to="/" className="btn bg-black text-white shadow-2xl">Home</NavLink></li>
        <li><NavLink onClick={closeDrawer} to={"/about"} className="btn bg-black text-white shadow-2xl">About</NavLink></li>
       {
        user ? "" :  <li><NavLink onClick={closeDrawer} to={"/register"} className="btn bg-black text-white shadow-2xl">Register</NavLink></li>
       }
        <li><NavLink onClick={closeDrawer} to={"/bills"} className="btn bg-black text-white shadow-2xl">My Bills</NavLink></li>
        
        {
        
        user ? <li onClick={closeDrawer} ><button onClick={handlePhoneLogout} className="btn  bg-black text-white shadow-2xl">Log Out</button></li> : 
        <li><NavLink onClick={closeDrawer} to={"/login"} className="btn  bg-black text-white shadow-2xl">Login</NavLink></li>
        
        }
        
        
        
    </ul>
  </div>
</div>

    <Link to={"/"} className="btn btn-ghost text-3xl hover:bg-[#eafe53] hover:border-none hover:underline font-dm">WALLEX</Link>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 space-x-10">
      
      <li>
        <NavLink to={'/'} className="btn bg-black text-white shadow-2xl">Home</NavLink>
      </li>
      <li><NavLink to={'about'} className="btn bg-black text-white shadow-2xl">About</NavLink></li>
      {
        user ? "" : <li><NavLink to={'/register'} className="btn bg-black text-white shadow-2xl">Register</NavLink></li>
      }
      <li><NavLink to={'/bills'} className="btn bg-black text-white shadow-2xl">My Bills</NavLink></li>
      
    </ul>
  </div>
  <div className="">
   <div className='gap-10 flex items-center'>


   


     {

      user? <button onClick={handlePCLogOut} className="btn bg-black text-white shadow-2xl hidden lg:flex"> Log Out </button> :

        <NavLink to={"/login"} className="btn bg-black text-white shadow-2xl hidden lg:flex">Login</NavLink>

        
     }

     <div>
     {/* {emailverified? <p className='hidden lg:block font-dm'>Wellcome {user.displayName} !!!</p> : ""} */}

     </div>
    
    

    <div className="dropdown flex">
		
			

      <div className="dropdown">
      <div tabIndex={0} role="button" className="flex items-center justify-center">
        <button className='cursor-pointer'> <div >{emailverified? <img className='h-20 w-20 rounded-full shadow-2xl' src={user.photoURL} alt="" /> : <GiPlagueDoctorProfile className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300" />}</div> </button>
      </div>
      
        {
          emailverified && <ul
        tabIndex={0}
        className="menu absolute dropdown-content  bg-base-100 rounded-box z-1 w-50 top-16 -ml-35 space-y-2 shadow">
          <Link to={"/edit"} className="btn bg-black text-white shadow-2xl">Edit Profile</Link> 
        
       </ul>
        }
        
     
    </div>
		</div>
    
    
   </div>
  </div>

            </div>
            
  
        </div>
    );
};

export default Navbar;