import clientPromise from "@/libs/mongodb"
import { redirect } from "next/navigation"




export default async function Page({ params }) {

    const shorturl = (await params).shorturl



        const client = await clientPromise

        const db = client.db("tiny_url")
        const collection = db.collection("urls")
        const doc = await collection.findOne({ shorturl: shorturl })
        console.log(doc);
        

        

        if (!doc) {
            redirect(`${process.env.NEXT_PUBLIC_HOST}`)
        }
        await collection.updateOne(
            { shorturl: shorturl },
            {
                $inc: { click_count: 1 }
            }
        )
        redirect(doc.url)

    return <div>My Post: {shorturl}</div>
}