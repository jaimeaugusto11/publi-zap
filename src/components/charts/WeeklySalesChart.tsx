'use client'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import React, { useState } from 'react'

export default function WeeklySalesChart() {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Adjudicado',
        data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })), // Atualizado para nova API do faker
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

  const tabs = [
    {
      title: "Adjudicado",
      type: "Adjudicado",
      data: {
        labels,
        datasets: [
          {
            label: 'Adjudicado',
            data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })), // Atualizado para nova API do faker
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          }
        ],
      }
    },
    {
      title: "Pendende Cliente",
      type: "Pendende Cliente",
      data: {
        labels,
        datasets: [
          {
            label: 'Pendende Cliente',
            data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })), // Atualizado para nova API do faker
            borderColor: 'rgb(0, 137, 132)',
            backgroundColor: 'rgba(0, 137, 132, 0.9)',
          }
        ],
      }
    }
  ];

  const [chartsToDisplay, setchartsToDisplay] = useState(tabs[0].type)
  return (
    <div className='dark:bg-slate-700 bg-slate-50 p-8 rounded-lg shadow-xl'>
      <h2 className=' text-xl font-bold mb-4 dark:text-slate-50 text-slate-800'> Weekly Award</h2>
      <div className="p-4">
        {/* Tabs*/}

        <div className="text-sm font-medium text-center border-b text-gray-200  border-gray-400 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            {
              tabs.map((tab, i) => {

                return (
                  <li className="me-2" key={i}>
                    <button onClick={() => setchartsToDisplay(tab.type)} className={chartsToDisplay == tab.type ?
                      "inline-block p-4 text-orange-600 border-b-2 border-orange-600 rounded-t-lg active dark:text-orange-500 dark:border-orange-500" :
                      "inline-block p-4 border-b-2 border-transparent rounded-t-lg text-slate-800 hover:text-gray-700 hover:border-gray-100 dark:hover:text-gray-300"

                    }>{tab.title}</button>
                  </li>
                );

              })}

          </ul>
        </div>


        {/* Content to display*/}

        {
          tabs.map((tab, i) => {
            if (chartsToDisplay == tab.type) {
              return <Line options={options} data={tab.data} />
            }
            return null

          })}



      </div>

    </div>
  )
}
