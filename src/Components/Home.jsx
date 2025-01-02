import React, { useState } from 'react';
import img from '../assets/img1.avif'

const Home = () => {
    const [loginType, setLoginType] = useState('employee'); // Default to 'employee'

    // Toggle between Employee and Admin Login
    const handleLoginTypeChange = (type) => {
        setLoginType(type);
    };

    return (
        <div className="flex h-screen">
            {/* Left Box (Image with Text) */}
            <div className="w-1/2 bg-cover bg-center relative"
    style={{ backgroundImage: `url(${img})` }}
>
    {/* Blue Overlay Layer */}
    <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50"></div> 

    {/* Dark Layer with Blur */}
    <div className="absolute top-0 left-0 w-full h-full bg-slate-950 opacity-50 backdrop-blur-xl">
        {/* The dark background with a slight opacity and blur */}
    </div>

    {/* Text */}
    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-white">
        <h1 className="text-4xl font-bold">{loginType === 'employee' ? 'Employee Login' : 'Admin Login'}</h1>
        <p className="mt-4 text-xl">Welcome to the HR Management System</p>
        <p className="mt-4 w-full">Manage All <span className="text-xl font-semibold text-blue-500 hover:text-blue-700 transition duration-300">
    HR Operations  </span>
       From The Comfort Of Your Home</p>
    </div>

    {/* Buttons */}
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 space-x-4">
        <button className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-700">Learn More</button>
        <button className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-700">Show Our Features</button>
    </div>
</div>



            {/* Right Box (Login Form) */}
            <div className="w-1/2 bg-gray-900 p-8 flex justify-center items-center">
                <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
                    {/* Login Type Links */}
                    <div className="flex justify-between mb-6">
                        <a href="#" onClick={() => handleLoginTypeChange('employee')} className="text-white hover:underline">Employee Login</a>
                        <a href="#" onClick={() => handleLoginTypeChange('admin')} className="text-white hover:underline">Admin Login</a>
                    </div>

                    {/* Login Form */}
                    <form>
                        <h2 className="text-2xl text-center text-white mb-6">{loginType === 'employee' ? 'Employee Login' : 'Admin Login'}</h2>

                        {/* Email */}
                        <div className="mb-4">
                            <label className="block text-sm text-gray-400">Email</label>
                            <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" required />
                        </div>

                        {/* Password */}
                        <div className="mb-4">
                            <label className="block text-sm text-gray-400">Password</label>
                            <input type="password" placeholder="Enter your password" className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" required />
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex justify-between mb-6 text-sm text-gray-400">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" /> Remember Me
                            </label>
                            <a href="#" className="hover:underline">Forgot Password?</a>
                        </div>

                        {/* Login Button */}
                        <button type="submit" className="w-full py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-700">
                            Login Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;
