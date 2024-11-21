"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'




const Navbar = () => {
    const { data: session, update } = useSession()

    const router = useRouter()
    const tolink=session?"/dashboard":"/login"
    useEffect(() => {
        if (session) {
            router.push('/dashboard');
        }
    }, [session, router]);


    return (

        <nav className=" text-base  flex justify-between items-center  h-20 bg-gradient-to-r from-gray-100 to-purple-200">
            <div className='text-3xl text-purple-500 font-bold mx-6 tracking-wide' style={{fontFamily: "'Montserrat', sans-serif"
            }}><Link href='/'>🔗 tin_url</Link></div>
            <ul className='flex items-center gap-8  mr-14 text-gray-700 ' style={{ fontFamily: "'ubuntu',serif" }}>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>About</Link></li>
                <li><Link href='/contact'>Contact Us</Link></li>
                {session ? (

                    <div className="flex flex-col  items-center">
                        <Link href={tolink}>
                        <img
                            
                            src={session.user.image}
                            className="mt-[17.5px] mb-[1px] w-10 h-10  rounded-full border-2"
                            alt="User Avatar"
                        />
                        </Link>
                        <span className=" text-gray-500 text-sm font-bold">Hi,{session.user.name}</span>
                    </div>
                ) : (

                    <li><Link href='/login'>Login</Link></li>
                )}

            </ul>
        </nav>
    )
}

export default Navbar
