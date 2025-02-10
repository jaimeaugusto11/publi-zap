import ChartsDashboard from '@/components/charts/ChartsDashboard'
import LargeCards from '@/components/charts/LargeCards'
import SmallCards from '@/components/charts/SmallCards'
import Heading from '@/components/ui/Heading'
import React from 'react'

export default function page() {
  return (
    <div >
            <Heading title='Dashboard Overview' />
            <LargeCards/>
            <SmallCards/>
            <ChartsDashboard/>
    </div>
  )
}
