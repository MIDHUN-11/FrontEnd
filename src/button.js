import React from "react";
// import {useHistory} from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
const RouterNavigation =()=>{
    // const history=useHistory();
    const navigate=useNavigate();
    return(
        <>
            <button onClick={()=>navigate("/")}>Home</button>
            <button onClick={()=>navigate("/contact")}>Contact</button>
            {/* <button onClick={()=>{history.push("/")}}>Home</button>
            <button onClick={()=>{history.push("/contact")}}>Contact</button> */}
            {/* <Link to="/">Home</Link>
            <Link to="/Contact">Contact</Link> */}
        </>
    );
}

export default RouterNavigation;