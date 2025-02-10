import { NextResponse } from "next/server";


export async function POST(request:any) {
    try {

        const { title, slug, imageUrl, description} = await request.json();
        const newClient = { title, slug, imageUrl, description}
        console.log(newClient)
        return NextResponse.json(newClient)
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:"Faild to create new cliente", error
        }, {status: 500 })
        
    }
    
}