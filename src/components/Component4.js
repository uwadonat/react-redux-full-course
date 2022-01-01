import React from "react";
import { useSelector } from "react-redux";



const Component4 = () => {
    const statee = useSelector((state) => state.reducer1.stateProp1);
console.log("state in componet4",statee)
    return(
        <div>
            Component4
        </div>
    )
}

export default Component4;