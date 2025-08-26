import React, { useContext, useState } from 'react';
import { ImTwitter } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { FaRegCircle } from "react-icons/fa";
import { AiFillTrademarkCircle } from "react-icons/ai";
import { Form, Link } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { signOut } from 'firebase/auth';


const Register = () => {

	const {registerUser, verifyEmail, signOutUser, updateUserInfo, user, setUser} = useContext(AuthContext)


	const [passwordError, setPasswordError] = useState("")
	const [emailValidation, setEmailValidation] = useState("")
	const [regError, setRegError] = useState("")

	 const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])\S{6,128}$/;
    
	const handleRegister = (e) => {
		e.preventDefault()
		
		const name = e.target.name.value
		const photoUrl = e.target.photoUrl.value
		const email = e.target.email.value
		const password = e.target.password.value
		const confirmPassword = e.target.confirmPassword.value

		
		if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    // Validate with regex
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be 6–128 characters, including UpperCase, LowerCase, number, symbol, and no spaces."
      );
      return;
    }

    // Clear error if valid
    setPasswordError("");

    // Register user
    registerUser(email, password)
      .then((result) => {
        // console.log(result);

		
		
		
		verifyEmail(result.user).then ((() => {
			setEmailValidation("A verification email has been sent to your e-mail. Please verify.")


			const regUser = result.user 

			updateUserInfo({displayName: name, photoURL: photoUrl}).then(()=>{
				setUser({...regUser, displayName: name, photoURL: photoUrl})
				setRegError("")
			signOutUser().then (() => {
				// console.log("sign Outed")
				
			}).catch((error) => {
				// console.log(error)
			})
				// console.log (user)
			}).catch((error)=>{
				// console.log(error)
			})

			
			

			e.target.reset()

			

			// Sign Out The User After Registration
			

			
			
		}))
      })
      .catch((error) => {
        // console.log(error);
		setRegError("Email Already Been In Use")
      });

	
		 }

	
	
	
	
	
	
	
	return (
        <div className='bg-[#f5f5f5] min-h-[calc(100vh-315px)] flex justify-center items-center'>
            
            {/* Mamba Login */}
            <div className="w-11/12 mx-auto max-w-md p-4 my-8 sm:p-8 dark:bg-[#fff] shadow-2xl rounded-2xl dark:text-gray-800">
	<h2 className="mb-3 text-3xl font-semibold text-center font-dm">Register your account</h2>
	<h2 className="mb-3 text-lg text-[#445f03] font-semibold text-center font-dm">{emailValidation}</h2>
	

		{/* Form Starts */}
	
	<form onSubmit={handleRegister} noValidate="" action="" className="space-y-8">
		<div className="space-y-4">
			<div className="space-y-2">
				<label htmlFor="name" className="block text-sm">Name</label>
				<input type="text" required name="name" id="name" placeholder="Leroy jenkins" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
			</div>
			<div className="space-y-2">
				<label htmlFor="photUrl" className="block text-sm">Photo Url</label>
				<input required type="text" name="photoUrl" id="photoUrl"  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
			</div>
			<div className="space-y-2">
				<label htmlFor="email" className="block text-sm">Email address</label>
				<input type="email" required name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
			</div>
			<div className="space-y-2">
				<div className="flex flex-col space-y-2 justify-between">
					<label htmlFor="password" className="text-sm">Password</label>

					<input type="password" required name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
					
				</div>
				
			</div>
			<div className="space-y-2">
				<div className="flex flex-col space-y-2 justify-between">
					<label htmlFor="confirmPassword" className="text-sm">Confirm Password</label>
					<input type="password" required name="confirmPassword" id="confirmPassword" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />

					
					
				</div>

				<div className='flex justify-center pt-3'>
					<p className= 'font-bold text-[#bc0606]'>{regError}</p>
				</div>
				
			</div>
		</div>
		<p className='text-[#bc0606]'>{passwordError}</p>
		<div className='flex justify-center'>
            <button type="submit" className="w-5/10 mx-auto px-8 py-3 font-semibold rounded-md bg-black text-[#eafe53]">Register</button>
        </div>

		<p className="text-sm text-center dark:text-gray-600">Already have an account?
		<Link to={"/login"} href="#" rel="noopener noreferrer" className="focus:underline hover:underline"><span className='border px-2 py-1 ml-2 bg-black text-[#eafe53] rounded-md font-dm'>Login Here</span></Link>
		</p>
      
	</form>
</div>
        </div>
    );
};

export default Register;