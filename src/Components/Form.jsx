import  React from "react";
class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            firstname:"",
            lastname:"",
            status:false
        }

    }
    saveDatas=(event)=>{
        event.preventDefault();
        const firstname=document.getElementById("firstname").value;
        const lastname=document.getElementById("lastname").value;
        this.setState({firstname:firstname,lastname:lastname,status:true})
        console.log(firstname);
        console.log(lastname);
    }
    render(){
        return(
            <div>
                <h1>I am form component</h1>
                <form >
                    <input type="text" placeholder="username" id="firstname" />
                    <input type="text" placeholder="lastname" id="lastname" />
                    <button onClick={this.saveDatas}>Submit</button>
                </form>
               {/* {this.state.status &&  <p> {this.state.lastname}</p>} */}
               {this.state.status?<p>{this.state.firstname}{this.state.lastname}</p>:<h2>Loading</h2>}
            </div>
        )
    }
}
export default Form;