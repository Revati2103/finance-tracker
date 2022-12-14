
import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'

Chart.register(ArcElement);
 
  

const config ={

  data: {
    datasets: [{
   
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  },
  options: {

  }
    
  }




const ExpenseGraph = () => {
  return (
    <div className="flex justify-content max-w-xs mx auto">
        <div className="item">
            <div className="chart relative">
                <Doughnut data={data}>
                    
                </Doughnut>
            </div>
            <div className="flex flex-col py-10 gap-4">
                Labels
            </div>
        </div>
    </div>
  )
}

export default ExpenseGraph