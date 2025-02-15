import { NextResponse } from "next/server";

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function POST(request:any) {
    try {

        const { title, couponCode, expiryDate} = await request.json();
        const newCoupon = { title, couponCode, expiryDate}
        console.log(newCoupon)
        return NextResponse.json(newCoupon)
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:"Faild to create new coupon", error
        }, {status: 500 })
        
    }
    
}