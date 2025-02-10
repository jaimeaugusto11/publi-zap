import React from 'react'
import zapviva from "../../../public/img/top4/zapviva.png"
import zapnovela from "../../../public/img/top4/zapnovelas.png"
import zapblast from "../../../public/img/top4/blast.png"
import kanuca from "../../../public/img/top4/kanucatv.png"

import SmallCard from './Cards/smallCards'


export default function SmallCards() {

    const orderStatus =[
        {
            title:"Zap Viva",
            sales:300,
            iconColor:"dark:bg-green-100",
            img: zapviva
        },
        {
            title:"Zap Novelas",
            sales:100,
            iconColor:"dark:bg-blue-100",
            img: zapnovela
        },
        {
            title:"Blast",
            sales:100,
            iconColor:"dark:bg-orange-100", 
            img: zapblast
        }, 
       
        {
            title:"Kanuca TV",
            sales:100,
            iconColor:"dark:bg-green-100",
            img: kanuca
        }

    ]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8'>
      

      {
        orderStatus.map((status, i) =>{
      
            return(
                <SmallCard data={status} key={i}/>
            )
      

        })   

    }

    </div>
  )
}
