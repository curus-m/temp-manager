import React from 'react';
import './Statistics.scss';
import { Line } from 'react-chartjs-2';
class Statistics extends React.Component {
    constructor(props : any) {
        super(props);
        this.state = {
          tempDatas: [{}],
        };
    }
    componentDidMount() {
        const url : string = "http://192.168.0.39:3000/temperature";
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(
            {  query : `{  
                tempMaxMins {
                    time
                    maxtemp
                    maxhumidity
                    mintemp
                    minhumidity
                }
          }`
        })
        })
        .then(res => res.json())
        .then(
          (result) => {
            result = result.data.tempMaxMins;
            this.setState({
              tempDatas: result
            });
          }, (err) => {

          });
    }
    render(){
        const { tempDatas } : any= this.state;
        const temperatureData : Object = {
          datasets: [
            {
              data: tempDatas,
              label: '最高気温',
              parsing: {
                yAxisKey: 'maxtemp'
              },
              backgroundColor: [
                "#FF0000"
              ],
              borderColor: "#FF0000",
              yAxisID: 'tempAxis'
            },
            {
              data: tempDatas,
              label: '最高湿度',
              parsing: {
                yAxisKey: 'maxhumidity'
              },
              backgroundColor: [
                "#0000FF"
              ],
              borderColor: "#0000FF",
              yAxisID: 'humidAxis'
            }
          ]
        }
        const graphOptions : Object = {
            parsing: {
                xAxisKey: 'time'
            },
            scales: {
              'tempAxis' : {
                bounds: "data",
                axis: "y",
                position: 'left',
                ticks: {
                  max: 50,
                  min: -10
                },
                title: {
                  color: 'red',
                  display: true,
                  text: '温度'
                }
              }, 
              'humidAxis': {
                bounds: "data",
                axis: "y",
                position: 'right',
                ticks: {
                  max: 100,
                  min: 0
                },
                title: {
                  color: 'blue',
                  display: true,
                  text: '湿度'
                },
                
              }
          }
        }
        return (
            <div>
                {/* {tempDataList} */}
                <div className="temperature">
                  <h3>Max Temperature / Humidity</h3>
                  <Line data={temperatureData} type="line" options={graphOptions}/>
                </div>
            </div>
            
        )
        
    }

}

export default Statistics; 