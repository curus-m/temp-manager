import React from 'react';
import './Thermometer.scss';
import { Bar } from 'react-chartjs-2';
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
        const tempDataList = tempDatas.map((tempData : any) => 
            <div key="{tempData.time}"> 
                {tempData.time} / {tempData.temperature}℃ / {tempData.humidity}%
            </div>
        );
        const graphData : Object = {
          labels : ['3','6','9','12','15','18','21','24','27','30'],
          datasets: [
            // 表示するデータセット
            {
              data: tempDatas,
              label: '温度'
            },
          ]
        }
        return (
            <div>
                {/* {tempDataList} */}
                <div>
                  <Bar data={graphData} type="Bar" />
                </div>
            </div>
            
        )
        
    }

}
    

export default Thermometer; 