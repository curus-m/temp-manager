import React from 'react';
import './Thermometer.scss';

class Thermometer extends React.Component {
    
    constructor(props : any) {
        super(props);
        this.state = {
          tempDatas: [{ temp: "", time: ""}],
        };
    }
    componentDidMount() {
        const url : string = "http://192.168.0.39:3000/temperature";
          // "http://localhost:3000/temperature"
        // "http://192.168.0.39:3000/getTemp";
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
            <div> 
                {tempData.time} / {tempData.temperature}℃ / {tempData.humidity}%
            </div>
        );
        return (
            <div>
                {tempDataList}
            </div>
        )
        
    }

}
    

export default Thermometer; 