"use client"

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  const { data: session, update } = useSession()
  const linkto=session?"/urlshort":"/login"
  return (
    <>
      <div className="container flex items-center justify-between p-8 mt-16 ml-12" style={{ fontFamily: "'Varela Round', serif" }}>
        <div className="left  text-center w-1/2 px-2">
          <h1 className="text-2xl md:text-5xl font-extrabold leading-tight mb-4">
            Welcome to <span className="text-purple-500">tin_url</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            The Simple Way to Shorten Your Links
          </p>
          <p className="mt-4 text-md md:text-lg text-gray-500">
            Tired of unwieldy URLs? With <span className="font-bold text-purple-500">[tin_url]</span>, you can turn long, messy links into short, shareable ones in seconds. Whether you're sharing on social media, sending emails, or just simplifying your links, we’ve got you covered.
          </p>
          <Link href={linkto}>
          <button className="mx-2 mt-4 bg-purple-500 text-white font-bold py-2 px-4 rounded-lg hover:text-[17px] transition-colors duration-300">          try now
          </button>
        </Link>
          <button className=" mt-4 bg-purple-500 text-white font-bold py-2 px-4 rounded-lg hover:text-[17px] transition-colors duration-300"><Link href='/signup'>Sign Up</Link>
          </button>
        </div>
        <div className="flex-shrink-0 ml-12">
          <Image alt="image shortner" src={"/url.jpeg"} width={400} height={300} className="rounded-2xl shadow-lg" />
        </div>
      </div>
    </>
  );
}
