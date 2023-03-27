import React,{createContext} from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
const data=createContext();
const Usecontext=()=>{
        const name="Bishwas Timalsina"
        return(
            <div>
                <data.Provider value={name}>
                    <Child1/>
                    <Child2/>
                </data.Provider>
            </div>
        )
    
}
export default Usecontext;
export  {data};