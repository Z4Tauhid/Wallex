import React, { use } from 'react';
import { Form, Link } from 'react-router';
import { AuthContext } from './AuthProvider/AuthProvider';

const Edit = () => {
    
    const {registerUser, verifyEmail, signOutUser, updateUserInfo, user, setUser} = use(AuthContext)


    const handleUpdateUser=(e)=>{

       e.preventDefault()
       const name = e.target.name.value.trim();
    const photoUrl = e.target.photoUrl.value.trim();

    // Fallback to existing user data if fields are empty
    const updatedName = name !== "" ? name : user.displayName;
    const updatedPhotoUrl = photoUrl !== "" ? photoUrl : user.photoURL;

    // console.log("Updating user:", updatedName, updatedPhotoUrl);

    updateUserInfo({ displayName: updatedName, photoURL: updatedPhotoUrl })
        .then(() => {
            // Update local user state
            setUser({ ...user, displayName: updatedName, photoURL: updatedPhotoUrl });
            e.target.reset();
            // console.log("Updated user:", user);
        })
        .catch((error) => {
            // console.error(error);
        });

    }
    
    return (
        <div className='bg-[#f5f5f5] min-h-[calc(100vh-315px)] flex justify-center items-center'>
            
            {/* Mamba Login */}
            <div className="w-11/12 mx-auto max-w-md p-4 my-8 sm:p-8 dark:bg-[#fff] shadow-2xl rounded-2xl dark:text-gray-800">
	<h2 className="mb-3 text-3xl font-semibold text-center font-dm">Update your account</h2>
	
	

		{/* Form Starts */}
	
	<form onSubmit={handleUpdateUser} noValidate="" action="" className="space-y-8">
		<div className="space-y-4">
			<div className="space-y-2">
				<label htmlFor="name" className="block text-sm">Name</label>
				<input type="text"  name="name" id="name" placeholder="Leroy jenkins" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
			</div>
			<div className="space-y-2">
				<label htmlFor="photUrl" className="block text-sm">Photo Url</label>
				<input type="text" name="photoUrl" id="photoUrl"  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
			</div>
			
			
			
		</div>
		
		<div className='flex justify-center'>
            <button  type="submit" className="w-5/10 mx-auto px-8 py-3 font-semibold rounded-md bg-black text-[#eafe53]">Save</button>
        </div>

		
	</form>
</div>
        </div>
    );
};

export default Edit;