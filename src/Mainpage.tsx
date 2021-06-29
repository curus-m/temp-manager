import React from 'react';
import './Mainpage.scss';
class Mainpage extends React.Component {
    
    constructor(props : any) {
        super(props);
        this.state = {
          tempData: { temp: "", time: ""},
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
          body: JSON.stringify({  query : `{  tempData {
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
            result = result.data.tempData;
            this.setState({
              tempData: { temp: result.temperature, humid: result.humidity ,time: result.time}
            });
          }, (err) => {

          });
    }
    render(){
        const { tempData } : any= this.state;
        return (
            <div> 
                <h3>Current temperature is {tempData.temp}℃.</h3>
                <h3>Current humidity is {tempData.humid}%.</h3>
                <h3>Current time is {tempData.time}.</h3>
            </div>
        )
        
    }
}

export default Mainpage; 