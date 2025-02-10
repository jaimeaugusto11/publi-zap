import { Layers } from 'lucide-react'
import React from 'react'


export default function LargeCard({data, Icon}:any) {
  
  return (
    <div className={`rounded-lg text-white shadow-md p-8 flex items-center flex-col gap-4 py-8 ${data.color}`}>

        <Icon className="h-12 w-12"/>
        <h4 >{data.period}</h4>
        <h2 className=' lg:text-3xl text-2xl font-bold '>{data.sales}</h2>
      
    </div>
  )
}
