import React,{useContext} from "react";
import { useParams } from "react-router-dom";
import {data} from "./Usecontext";
const Child1=()=>{
    const name=useContext(data);
    const {tvactress}=useParams();
    console.log(tvactress)
    return(
        <div>
            <h1>{name}</h1>
            <h2>{tvactress}</h2>
            <h3>I am child1</h3>
        </div>
    )
}
export default Child1;