import React,{useContext} from "react";
import {data} from "./Usecontext";
const Child2=()=>{
    const name=useContext(data);
    return(
        <div>
            <h1>I am child2{name}</h1>
        </div>
    )
}
export default Child2;