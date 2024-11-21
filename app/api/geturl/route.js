import clientPromise from "@/libs/mongodb"
import { NextResponse } from "next/server";



export async function POST(request) {
    try {
        const body=await request.json()
        const client=await clientPromise
        const db=client.db("tiny_url")
        const collection=db.collection("urls")
    
        const doc = await collection.find({ email: body.email }).toArray();

        return NextResponse.json({message:"success",Array_url:doc,})
        
        
    } catch (error) {
        return NextResponse.json({message:"error occured"})
    }
  }