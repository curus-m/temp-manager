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
        const url : string = "http://192.168.0.39:3000/getTemp";
        fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
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
                <h2>Current temperature is {tempData.temp}℃.</h2>
                <h2>Current humidity is {tempData.humid}%.</h2>
                <h2>Current time is {tempData.time}.</h2>
            </div>
        )
        
    }
}

export default Mainpage; 