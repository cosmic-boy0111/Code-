import { height } from '@mui/system'
import React,{useContext,useEffect,useState} from 'react'
import {Bar, PolarArea,Line} from 'react-chartjs-2'
import { AppContext } from '../../App'
import { Theme } from '../Theme'


const Chart = () => {

    const {themeToggler} = useContext(AppContext)

    
    const [axis, setAxis] = useState('x');


    useEffect(() => {
      // eslint-disable-next-line no-restricted-globals
      if(screen.width <= 600){
          setAxis('y')
      }else{
          setAxis('x')
      }
    }, []);
    
    
    

    const options = {
        responsive: true,
        plugins: {
          title: {
            display: false,
          },
        },
        legend: {
            display: '',
            color : 'white'
        },
        maintainAspectRatio: false,
        indexAxis: axis,

        scales: {
            x: {
                grid: {
                    display:false,
                    borderColor : 'transparent'
                },
                ticks: {
                    color : 'rgb(148, 164, 196)'
                },
            },
            y: {
                grid: {
                    display:false,
                    borderColor : 'transparent'
                },
                ticks: {
                    color : 'rgb(148, 164, 196)'
                },
            }
        }
      };


    return (
        <div style={{
            marginTop : '2rem',
            padding:'8px',
            borderRadius:'4px',
            height:'400px',
            backgroundColor: themeToggler ? Theme.Dark.boxColor : Theme.Light.boxColor,
            color: themeToggler ? Theme.Dark.Color : Theme.Light.Color,
            border: themeToggler ? Theme.Dark.Border : Theme.Light.Border
        }}>
            <Bar
                options={options}
                data={{
                    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                    datasets: [{
                        axis : axis,
                        label: 'Active Contribution',
                        data: [10,5,30,10,20,4,9,11,15,4,1,8],
                        backgroundColor: 'rgba(36, 153, 239, 0.85)',
                        fill: true,
                        tension: 0.4,
                        borderRadius : 10
                    }],
                }}
            />
        </div>
    )
}

export default Chart
