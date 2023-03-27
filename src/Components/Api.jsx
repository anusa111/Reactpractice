import React from "react";
import Displayweather from "./Displayweather";
class Api extends React.Component{
    constructor(props){
        super(props);
        this.state={
            city:"kathmandu",
           
        }
    }
    cityUpdate=()=>{
        const city=document.getElementById("cityname").value;
        this.setState({city:city});
    }
    
    render(){
        return(
            <div>
                <h1>I am APi</h1>
                <input type="text" placeholder="Enter cityname" id="cityname" />
                <button type="submit" onClick={this.cityUpdate}>Search</button>
                <Displayweather cityname={this.state.city}/>
            </div>
            
        );
    }
}
export default Api;