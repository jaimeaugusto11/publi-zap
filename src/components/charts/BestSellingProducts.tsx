'use client'
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

export default function BestSellingProducts() {

  const data = {
    labels: ['Spots Publicitários', 'Patrocínio de Emissão', 'Patrocínio de Serões BLAST', 'Patrocínio Sala de Cinema'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className='dark:bg-slate-700 bg-slate-50 p-8 rounded-lg shadow-xl'>
      <h2 className=' text-xl font-bold mb-4 dark:text-slate-50 text-slate-800'> Best Selling Produtos</h2>

      {/* charts*/}
      <div className="p-4">
        <Pie data={data} width={32} height={32}/>
      </div>



    </div>
  )
}
