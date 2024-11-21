"use client";
import { React, useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link";
import { sendError } from "next/dist/server/api-utils";
import { useRouter } from 'next/navigation'


export default function Dashboard() {
  const { data: session, update } = useSession()
  const [isClient, setIsClient] = useState(false);
  const [urls, seturls] = useState([])
  const [link, setlink] = useState("")
  const [sum, setsum] = useState()
  const router = useRouter()









  useEffect(() => {
    setIsClient(true);
    if (session) {
      const email = session.user.email
      geturls(email)
    }
  }, [session]);

  const geturls = async (email) => {
    const response = await fetch('/api/geturl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email })
    })
    const json = await response.json()
    // console.log(json.Array_url);

    seturls(json.Array_url)

    let click_sum = 0
    for (let index = 0; index < json.Array_url.length; index++) {
      click_sum += json.Array_url[index].click_count
    }
    setsum(click_sum)
  }

  useEffect(() => {
    if (urls.length > 0) {
      let maxclicksDoc = urls.reduce((maxDoc, currentDoc) => {
        return currentDoc.click_count > maxDoc.click_count ? currentDoc : maxDoc;
      }, urls[0]);
      setlink(maxclicksDoc.shorturl)
      console.log(maxclicksDoc);
    }
  }, [urls])

  const handleclick = () => {
    signOut({
      redirect: false, // Prevent automatic redirect
    });
    router.push("/login")
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8" style={{ fontFamily: "'Varela Round', serif" }}>
        <h2 className="text-3xl font-semibold text-gray-500">
          Track, Manage, and Optimize Your URLs
        </h2>


      </div>

      {/* Overview Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8" style={{ fontFamily: "'Varela Round', serif" }}>
        {/* Left Column */}
        <div className="bg-purple-500 p-6 rounded-lg shadow-xl text-white">
          <h3 className="text-2xl font-bold mb-4">Your Shortened Links at a Glance</h3>
          <p className="text-lg mb-4">
            Track your shortened URLs, monitor their performance, and gain insights in real-time. This is your hub for managing links and analyzing traffic.
          </p>
          <p className="text-lg mb-2">
            Whether it's for marketing, projects, or personal use, we provide all the tools you need to track and optimize your links.
          </p>
        </div>

        {/* Right Column */}
        <div className="bg-white p-6 rounded-lg shadow-lg" style={{ fontFamily: "'Varela Round',serif" }}>
          <p className="text-lg font-bold text-purple-600 mb-4">
            Get started by shortening a new link and watch the magic happen!
          </p>
          <p className="text-lg text-gray-500 mb-4">
            Your dashboard will soon be filled with insights on your link performance, and you’ll be able to track how many clicks your links get.
          </p>
          <Link href="/urlshort">
            <button className="bg-purple-500 font-bold text-white py-2 px-6 rounded-lg hover:bg-purple-700 shadow-lg transition-all">
              + Create a New Short Link
            </button>
          </Link>
          <button
            onClick={handleclick}
            className="bg-purple-500 mx-2 font-bold text-white py-2 px-6 rounded-lg hover:bg-purple-700 shadow-lg transition-all"
          >
            Logout
          </button>
        </div>
      </div>


      {/* URL Management Section */}
      <div className="mt-8 bg-white shadow-md rounded-lg p-6" style={{ fontFamily: "'Varela Round',serif" }}>
        <h2 className="text-xl font-medium text-gray-700 mb-4">Your Short URLs</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b px-4 py-2 text-left">Short URL</th>
              <th className="border-b px-4 py-2 text-left">Original URL</th>
              <th className="border-b px-4 py-2 text-left">Clicks</th>
              {/* <th className="border-b px-4 py-2 text-left">Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {/* Example URL Rows, replace with dynamic mapping */}
            {urls.map((item) => {
              return <tr key={item._id}>
                <td className="border-b px-4 py-2 text-blue-500">
                  <Link target="_blank" href={`${process.env.NEXT_PUBLIC_HOST}/${item.shorturl}`}>{item.shorturl}</Link>
                </td>
                <td className="border-b px-4 py-2">{item.url}</td>
                <td className="border-b px-4 py-2">{item.click_count > 0 ? item.click_count : 0}</td>
              </tr>
            })}
            {/* <tr>
              <td className="border-b px-4 py-2 text-blue-500">
                <Link href="/short-url-1">/short-url-1</Link>
              </td>
              <td className="border-b px-4 py-2">https://example.com/1</td>
              <td className="border-b px-4 py-2">
                <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 mr-2">
                  Delete
                </button>
                <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
                  Edit
                </button>
              </td>
            </tr> */}
            {/* Repeat the above <tr> block for more rows */}
          </tbody>
        </table>
      </div>

      {/* Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ fontFamily: "'Varela Round', serif" }}>
        {/* Summary Card */}
        <div className="col-span-3 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-medium text-gray-700 mb-4">Summary</h2>
          <div className="flex justify-between">
            <p className="text-gray-600">Total Links: <span className="text-purple-500 font-bold">{urls.length}</span></p>
            <p className="text-gray-600">Total Clicks: <span className="text-purple-500 font-bold">{sum}</span></p>
            <p className="text-gray-600">Most using Link: <span className="font-bold text-purple-600">{link}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
