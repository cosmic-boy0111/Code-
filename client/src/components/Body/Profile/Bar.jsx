import { height } from '@mui/system'
import React,{useContext,useEffect,useState} from 'react'
import {Bar, PolarArea} from 'react-chartjs-2'
import { AppContext } from '../../../App'
import { Theme } from '../../Theme'


const Chart = ({bgColor,labels,data,label}) => {

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
            marginBottom : '2rem',
            padding:'8px',
            height:'400px',
            borderRadius:'4px',
            backgroundColor: themeToggler ? Theme.Dark.boxColor : Theme.Light.boxColor,
            color: themeToggler ? Theme.Dark.Color : Theme.Light.Color,
            border: themeToggler ? Theme.Dark.Border : Theme.Light.Border
        }}>
            <Bar
                options={options}
                data={{
                    labels: labels,
                    datasets: [{
                        axis : axis,
                        label: label,
                        data: data,
                        backgroundColor: bgColor,
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
