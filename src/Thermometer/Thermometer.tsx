import React from 'react';
import './Thermometer.scss';
import { Line } from 'react-chartjs-2';
class Thermometer extends React.Component {
    constructor(props : any) {
        super(props);
        this.state = {
          tempDatas: [{ temp: "", time: ""}],
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
          body: JSON.stringify({  query : `{  tempDatas {
              time
              temperature
              humidity
            }
          }`
        })
        })
        .then(res => res.json())
        .then(
          (result) => {
            result = result.data.tempDatas;
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
            // 表示するデータセット
            {
              data: tempDatas,
              label: '温度',
              parsing: {
                yAxisKey: 'temperature'
              },
              backgroundColor: [
                "#FF0000"
              ],
              borderColor: "#FF0000",
              yAxisID: 'tempAxis',
              fill: {
                target: {value: 28},
                above: 'rgb(247, 158, 178)',
                below: 'rgb(255, 255, 255,0)'
              }
            },
            {
              data: tempDatas,
              label: '湿度',
              parsing: {
                yAxisKey: 'humidity'
              },
              backgroundColor: [
                "#0000FF"
              ],
              borderColor: "#0000FF",
              yAxisID: 'humidAxis',
              fill: {
                target: {value: 70},
                above: 'rgb(148, 157, 255)',
                below: 'rgb(255, 255, 255,0)'
              }
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
                  <h3>Temperature / Humidity</h3>
                  <Line data={temperatureData} type="line" options={graphOptions}/>
                </div>
            </div>
            
        )
        
    }

}
    

export default Thermometer; 