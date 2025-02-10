import React from 'react'
import LargeCard from './Cards/largeCards'
import { AppWindow, CircleDollarSign, Users } from "lucide-react";

export default function LargeCards() {

    const orderStatus =[
        {
            period:"Clientes",
            sales:40,
            color:"bg-green-600",
            icon: Users
        },
        {
            period:"Campanhas",
            sales:25,
            color:"bg-blue-600",
            icon: AppWindow
        },
        {
            period:"Custo Liquido",
            sales:1858170,
            color:"bg-orange-600",
            icon: CircleDollarSign
        },
       
        {
            period:"Custo Bruto",
            sales:33656704,
            color:"bg-green-300",
            icon: CircleDollarSign
        }

    ]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      

      {
        orderStatus.map((item, i) =>{
                const Icon = item.icon
            return(
                <LargeCard  data={item} Icon={Icon} key={i}/>
            )
      

        })   

    }

    </div>
  )
}
