import React, { useContext,  useState } from 'react';
import { ImTwitter } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { FaRegCircle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { ToastContainer,  } from 'react-toastify';



const Login = () => {


	
    
	
	const location = useLocation()
	
	const navigation = useNavigate()
	const { logInUser, gitLogin,setUser, signOutUser, resetPassword, googleSignIn} = useContext(AuthContext)

	const [checkEmailVerifiied, setcheckEmailVerified] = useState("")

	const [loginError, setLoginError] = useState("")
	const [emailForPassReset , setEmailForPassReset] = useState("")

	const [resetPassError, setResetPassError] = useState("")

	


	

	const handleLogin =(e) => {
		e.preventDefault()
		const password = e.target.password.value
		const email = e.target.email.value
		setEmailForPassReset(email)
		

		logInUser(email, password).then((result) => {
			

			const loggedInUser = result.user
			
			if(result.user.emailVerified == false) {
				setcheckEmailVerified("Please Verify Your Email First")
				
				signOutUser().then (() => {
				// console.log("sign Outed")
				
			}).catch((error) => {
				// console.log(error)
			})
				e.target.reset()
				return
			}

			else{

				
				
				setUser(loggedInUser)
				e.target.reset()

				navigation(location.state ? location.state : "/")

				


	

   
				
			}

		}).catch(() => {
			setLoginError("Invalid E-mail Address or Password")
		})
	}

	const handleGoogle =() =>{
		googleSignIn().then((result) => {
			
			const loggedInUser = result.user
			setUser(loggedInUser)
			navigation(location.state ? location.state : "/")
		})
	}


	const handleGitLogin = () => {
		gitLogin().then((result) =>{
			const loggedInUser = result.user
			
			setUser(loggedInUser)
			navigation(location.state ? location.state : "/")
		})
	}

	// console.log()

	const handleResetPassword=() => {

		
		
		// console.log(emailForPassReset)

		 if (!emailForPassReset) {
            setResetPassError("Please enter your email address first.");
            return;
        }

        resetPassword(emailForPassReset).then(() => {
                setResetPassError("Password reset email sent! Check your inbox.");
            })
            .catch((error) => {
                setResetPassError("Failed to send reset email. Try again.");
                // console.log(error);
            });

	}
	
	return (
        
        <div className='bg-[#f5f5f5] min-h-[calc(100vh-315px)] flex justify-center items-center'>
            
            {/* Mamba Login */}
            <div className="w-11/12 mx-auto max-w-md p-4 my-8 sm:p-8 dark:bg-[#fff] shadow-2xl rounded-2xl dark:text-gray-800">
	<h2 className="mb-3 text-3xl font-semibold text-center font-dm">Login to your account</h2>
	
	<div className="my-6 space-y-4">
		<button onClick={handleGoogle} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
			< FcGoogle  className='border text-3xl p-1 bg-black shadow-2xl rounded-md'/>
			<p>Login with Google</p>
		</button>
		
		<button onClick={handleGitLogin} aria-label="Login with Twitter" role="button" className=" flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
			< FaGithub  className='border text-3xl p-1 bg-black text-[#eafe53] shadow-2xl rounded-md'/>
			<p>Login with Github</p>
		</button>
	</div>
	<div className="flex items-center w-full my-4">
		<hr  className="w-full dark:text-gray-600" />
		<div className="px-3 dark:text-gray-600 flex">
            {/* < FaRegCircle  className='border text-3xl p-1 bg-black text-[#eafe53] shadow-2xl rounded-md'/>
            < AiFillTrademarkCircle   className='border text-3xl p-1 bg-black text-[#eafe53] shadow-2xl rounded-md'/> */}

            <span className='border px-2 py-1 ml-2 bg-black text-[#eafe53] rounded-md font-dm shadow-2xl'>OR</span>


        </div>
		<hr  className="w-full dark:text-gray-600" />
	</div>
	<form onSubmit={handleLogin} noValidate="" action="" className="space-y-8">
		<div className="space-y-4">
			<div className="space-y-2">
				<label htmlFor="email" className="block text-sm">Email address</label>
				<input type="email" onChange={(e) => setEmailForPassReset(e.target.value)} required name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
			</div>
			<div className="space-y-2">
				<div className="flex justify-between">
					<label htmlFor="password" className="text-sm">Password</label>
					<button type='button' onClick={handleResetPassword} rel="noopener noreferrer" href="#" className="underline text-xs hover:underline dark:text-gray-600">Forgot password?</button>
				</div>
				<input type="password"  name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
					<div className='flex justify-center pt-4'>
						<p className= 'font-bold text-[#bc0606]'>{loginError}</p>
						<p className= 'font-bold text-[#bc0606]'>{resetPassError}</p>
					</div>
			</div>
		</div>
		<div className='flex flex-col justify-center text-center '>
			
            <button type="submit" className="w-5/10 mx-auto px-8 py-3 font-semibold rounded-md bg-black text-[#eafe53]">Login</button>
        </div>
		<div className='flex justify-center'>
            <p className="mx-auto font-semibold rounded-md text-[#bc0606]">{checkEmailVerifiied}</p>
        </div>

		<p className="text-sm text-center dark:text-gray-600">Don't have an account?
		<Link to={"/register"} href="#" rel="noopener noreferrer" className="focus:underline hover:underline"><span className='border px-2 py-1 ml-2 bg-black text-[#eafe53] rounded-md font-dm'>Register Here</span></Link>
	</p>

	
      
	</form>
	 <ToastContainer toastClassName="bg-black" autoClose={1000} icon={false}/>
	
			</div>

			
			

        </div>
    );
};

export default Login;