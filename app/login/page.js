"use client"
import { signIn } from 'next-auth/react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen  flex items-center justify-center -mt-12  ">
      <div className="flex gap-x-10  bg-white   ">
        {/* Left Side: Welcome Message & Description */}
        <div className="w-full lg:w-1/2 px-8 py-12 text-center lg:text-left my-12" style={{ fontFamily: "'Varela Round', serif" }}>
          <h1 className="text-4xl text-center font-bold text-purple-500 mb-4">Your Links, Your Way</h1>
          <h3 className="text-2xl text-center font-bold text-gray-500 mb-6">
            Sign in to create personalized short links, track analytics, and share like a pro.
          </h3>
          <p className="text-center text-base md:text-lg text-gray-500 mb-8">
            Whether you're a business, content creator, or marketer, Tin URL-Shorten is the perfect tool to streamline your link management.
          </p>
          <p className="text-center text-base md:text-lg text-gray-500 mb-4">
          Trouble logging in? You might need to sign up first—<span className='text-purple-500'>click below.</span>
          </p>
          <p className='text-center'>
          <Link
            href="/signup"
            className=' text-2xl text-purple-500 font-bold hover:underline  '
            >
            Register / Sign Up
          </Link>
          </p>


        </div>

        {/* Right Side: Login Form */}
        <div className="  lg:w-[34%] px-8 py-12 rounded-lg shadow-lg ml-8" style={{
          fontFamily: "'Ubuntu', sans-serif"
        }} >
          <h2 className="text-2xl font-bold text-gray-500 text-center mb-6">Sign In</h2>

          {/* Google Sign-In Button */}
          <button
            onClick={() => signIn('google')}
            className="w-full py-2 px-4 font-bold bg-purple-500 text-white rounded-md hover:text-[17px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-1 mb-6"
          >
            Sign in with Google
          </button>

          <div className="flex items-center justify-between mb-6">
            <hr className="w-full border-gray-300" />
            <span className="px-2 text-gray-500 text-sm">OR</span>
            <hr className="w-full border-gray-300" />
          </div>

          {/* Login Form */}
          <form>
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
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 font-bold bg-purple-500 text-white rounded-md hover:text-[17px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-1"
            >
              Login
            </button>
          </form>

          <p className="text-base text-gray-600 text-center mt-4">
            Don't have an account?{' '}
            <Link href="/signup" className="text-purple-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
