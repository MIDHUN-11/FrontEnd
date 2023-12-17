import React from "react";

function Employee(props){
    return(
        <div>
            <h1>your name:{props.name}</h1>
            <h1>yourname:{props.empid}</h1>
        </div>
    )
}
export default Employee;