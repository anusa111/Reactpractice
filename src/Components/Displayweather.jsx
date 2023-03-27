import React from "react";
class Displayweather extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:"",
            isLoading:true
        }
    }
    componentDidMount(){
        this.dataFetch();
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.cityname!==this.props.cityname){
            this.dataFetch();
        }
    }
   
    dataFetch=async()=>{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.cityname}&units=metric&appid=4d866ccd787b74e8553c342ca38f1e8d`);
        if(!response.ok){
            if(response.status==404){
                alert("Data not found")
            }
        }
        else{
            const data=await response.json();
        
            this.setState({data:data,isLoading:false});
        }
       
    }
    render(){
        console.log(this.state.isLoading);
        console.log(this.state.data);
        if(!this.state.isLoading){
            const {name,main,weather}=this.state.data;
            return(
                <div>
                    <h1>{main.temp}</h1>
                    <h2>{weather[0].main}</h2>
                </div>
            )
        }
        else{
            return <h1>Loading..</h1>
        }
       
    }
}
export default Displayweather;