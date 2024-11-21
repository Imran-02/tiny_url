"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'



const page = () => {
    const { data: session, update } = useSession()
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [gen, setgen] = useState("")
    

    const generate = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl,
            "email":session.user.email
        });



        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };


        fetch("/api/shortenurl", requestOptions)

            .then((response) => response.json())
            .then((result) => {
                setgen(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                 seturl("")
                setshorturl("")
            })
            .catch((error) => console.error(error));

    }
    return (
        <>
            <div className="w-full md:w-1/3 p-6 flex flex-col gap-4 mx-auto my-8 border-2 border-purple-400 rounded-lg shadow-lg bg-gradient-to-br from-gray-100 to-purple-200">
                <h4 className='font-semibold'>Generate short url</h4>
                <input
                    value={url}
                    type="text"
                    placeholder="Enter URL"
                    onChange={(e) => seturl(e.target.value)}
                    className="w-full md:w-96 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300"
                />
                <input
                    value={shorturl}
                    type="text"
                    onChange={(e) => setshorturl(e.target.value)}
                    placeholder="Enter short url"
                    className="w-full md:w-96 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300"
                />
                <button onClick={generate} className="mx-2 mt-4 bg-purple-500 text-white font-bold py-2 px-4 rounded-lg hover:text-[17px] transition-colors duration-300">Generate</button>
                {gen && <>
                    <span className='font-semibold'>Your short url </span>
                    <span><Link target='_blank' href={gen}>{gen}</Link></span>
                </>
                }
            </div>
        </>
    )
}

export default page
