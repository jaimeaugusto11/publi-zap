import { NextResponse } from "next/server";

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function POST(request:any) {
    try {
        {
            /*
            -id => auto()
            -title
            -slug => auto()
            -description
            -image/images
            -sku
            -barcode
            -produtoPrice
            -SalesPrice
            -category
            -farmers
            -tags[]
      
           */
          }

        const productData = await request.json();
       
        console.log(productData)
        return NextResponse.json(productData)
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:"Faild to create new Product", error
        }, {status: 500 })
        
    }
    
}