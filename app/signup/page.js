"use client"
import { signIn } from "next-auth/react";

export default function Signup() {
    return (
        <div className=" flex  justify-center  mt-12 ">
            <div className="flex w-full max-w-4xl  rounded-lg shadow-2xl overflow-hidden">
                {/* Left Section: Welcome Message */}
                <div className="hidden lg:block w-1/2 bg-purple-500 font-bold p-8" style={{ fontFamily: "'Varela Round', serif" }}>
                    <h1 className="text-4xl font-bold text-white mb-4">Join Us Today!</h1>
                    <p className="text-lg text-white mb-6">
                        Create your account and start managing your links effectively with Tin URL-Shorten.
                    </p>
                    <ul className="text-white space-y-2">
                        <li>🔗 Shorten URLs effortlessly</li>
                        <li>📊 Track your link analytics</li>
                        <li>💼 Personalize your links</li>
                        <li>🌐 Share like a pro</li>
                    </ul>
                </div>

                {/* Right Section: Signup Form */}
                <div className="w-full lg:w-1/2 p-8" style={{ fontFamily: "'Ubuntu', sans-serif" }}>
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Sign Up</h2>

                    {/* Google Sign-Up Button */}
                    <button
                        onClick={() => signIn("google")}
                        className="w-full font-bold py-2 px-4 bg-purple-500 text-white rounded-md hover:text-[17px] focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-1 mb-6"
                    >
                        Sign up with Google
                    </button>

                    <div className="flex items-center justify-between mb-4">
                        <hr className="w-full border-gray-300" />
                        <span className="px-2 text-gray-500 text-sm">OR</span>
                        <hr className="w-full border-gray-300" />
                    </div>

                    {/* Signup Form */}
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 text-md font-medium mb-2">
                                Name
                            </label>
                            <input
                                required
                                type="text"
                                id="name"
                                placeholder="Enter your full name"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-md font-medium mb-2">
                                Email Address
                            </label>
                            <input
                                required
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 text-md font-medium mb-2">
                                Password
                            </label>
                            <input
                                required
                                type="password"
                                id="password"
                                placeholder="Create a password"
                                className="w-full px-4 py-2  border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 font-bold  bg-purple-500 text-white rounded-md hover:text-[17px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-1"
                        >
                            Create Account
                        </button>
                    </form>

                    <p className="text-base text-gray-600 text-center mt-4">
                        Already have an account?{" "}
                        <a href="/login" className="text-purple-500 hover:underline">
                            Log in
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
