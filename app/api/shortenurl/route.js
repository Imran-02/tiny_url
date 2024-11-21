import { NextResponse } from "next/server"
import clientPromise from "@/libs/mongodb"

export async function POST(request) {
    const body=await request.json()
    const client=await clientPromise

    const db=client.db("tiny_url")
    const collection=db.collection("urls")

    const doc=await collection.findOne({shorturl:body.shorturl})
    const url_doc=await collection.findOne({url:body.url})

    if (doc){
        return NextResponse.json({message:"short url already exist"})
    }
    if (url_doc){
        return NextResponse.json({message:" url contains short url"})
    }

    const result=await collection.insertOne({
        url:body.url,
        shorturl:body.shorturl,
        email:body.email,
        click_count:0
    })
    
    return NextResponse.json({ message: 'success' })
  }