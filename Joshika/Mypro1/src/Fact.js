import React,{useState} from "react";
import {useNavigate, Link, Route } from 'react-router-dom';

function Fact(){
    let [num,ince]=useState(1)
    function fact(n){
        let final=1;
        for (let i = 1; i <= n; i++) 
            {
                final *= i;
            }
        return final
    }
    const restart = () => {
        ince(1);
    }
    const navigate = useNavigate();

    return(
        <div id='space'>
            <center>
            <h1>I'm Joshika!! This is my first program in react js</h1>
            <h2>Factorial Program in React JS</h2>
            <h3>Factorial of {num} is {fact(num)}</h3>
            <button className="butn2" onClick={()=>ince(num+1)}>Click Here To Increment the value</button>
            <button className="butn2" onClick={restart}>Restart</button>
            <button className="butn2" onClick={()=>alert('ThankYou So... Much Subramanyam Garu For Guiding me')}>End</button> 
            <br/>
            <button className="butn2" onClick={() => navigate(-1)}>Back</button>
            </center>
        </div>
    ) 

}
export default Fact;