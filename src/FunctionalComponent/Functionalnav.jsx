import React from "react";
import {Link} from "react-router-dom";
const Functionalnav=()=>{
    const name="Pheobe Buffay"
    return(
        <div>
            <Link to={`/child1/${name}`}>Child1</Link>
        </div>
    )
}
export default Functionalnav;