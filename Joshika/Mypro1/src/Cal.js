// Clauculator Program
import { useState } from 'react';
import { useNavigate,Link,Route } from 'react-router-dom';

function Cal(){
  let [input,setinput]=useState('');
  const navigate=useNavigate();
  function keys(value){
    setinput(input+value);
  };
  const keyclear=()=>
  {
    setinput('');
  };
  function keyEve(){
    try{
      setinput(eval(input).toString());
    }
    catch (error){
      setinput('Errror');
    }
  };
  return(
    <div id='space'>
      <center>
      <div>
      <div>
      <h1>Calculator Program</h1>
      <input type='text' value={input} readOnly/>
      </div>
      <div>
        <button className='butn3' onClick={()=>{keys('7')}}>7</button>
        <button className='butn3' onClick={()=>{keys('8')}}>8</button>
        <button className='butn3' onClick={()=>{keys('9')}}>9</button>
        <button className='butn3' onClick={()=>{keys('/')}}>/</button>
        <br/>
        <button className='butn3' onClick={()=>{keys('4')}}>4</button>
        <button className='butn3' onClick={()=>{keys('5')}}>5</button>
        <button className='butn3' onClick={()=>{keys('6')}}>6</button>
        <button className='butn3' onClick={()=>{keys('*')}}>*</button>
        <br/>
        <button className='butn3' onClick={()=>{keys('1')}}>1</button>
        <button className='butn3' onClick={()=>{keys('2')}}>2</button>
        <button className='butn3' onClick={()=>{keys('3')}}>3</button>
        <button className='butn3' onClick={()=>{keys('-')}}>-</button>
        <br/>
        <button className='butn3' onClick={keyclear}>C</button>
        <button className='butn3' onClick={()=>{keys('0')}}>0</button>
        <button className='butn3' onClick={keyEve}>=</button>
        <button className='butn3' onClick={()=>{keys('+')}}>+</button>
      </div>
      <br/>
      <button className="butn2" onClick={()=>navigate(-1)}>Back</button>
      </div>
      </center>
    </div>
  )
}
export default Cal;
