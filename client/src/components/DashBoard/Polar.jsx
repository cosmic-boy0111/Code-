
import React,{useEffect} from 'react'
import {Bar, PolarArea,Line,Doughnut} from 'react-chartjs-2'


const Chart = () => {


    useEffect(() => {
        window.scroll(0,0)
    }, []);
    

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        
        scales: {
            x: {
                grid: {
                    display:false,
                    borderColor : 'transparent'
                },
                ticks: {
                    color : 'rgb(148, 164, 196)',
                    display : false
                },
            },
            y: {
                grid: {
                    display:false,
                    borderColor : 'transparent'
                },
                ticks: {
                    color : 'rgb(148, 164, 196)',
                    display : false
                },
            }

        }
      };


    return (
        <div style={{

            padding:'8px',
            height:'400px'
        }}>
            <Doughnut
                options={options}
                data={{
                    labels: ['Blogs','Programming','Web','App','ML'],
                    datasets: [{
                        label: 'Active Contribution',
                        data: [10,5,30,10,20],
                        backgroundColor: [
                            'rgba(36, 153, 239, .8)',
                            'rgba(167, 152, 255, 0.8)',
                            'rgba(255, 107, 147, 0.8)',
                            'rgba(255, 151, 119, 0.8)',
                            '#90caf9'
                        ],
                        fill: true,
                        tension: 0.4,
                        borderRadius : 2,
                        hoverOffset: 12,
                        borderWidth:0,
                        spacing:3
                    }],
                }}
            />
            
        </div>
    )
}

export default Chart
