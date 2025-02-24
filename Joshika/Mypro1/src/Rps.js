import { useState } from 'react';
import { useNavigate,Link,Route } from 'react-router-dom';

function Rps() {
  let [uc,setuc]=useState('');
  let [cc,setcc]=useState('');
  let [res,setres]=useState('');
  const navigate = useNavigate();
  const rpsgm=(choice)=>
  {
    setuc(choice);
    let coumputer= () => {
      const choices = ['rock', 'paper', 'scissors'];
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
    }
    setcc(coumputer());
    let result=(user, computer) => {
      if (user === computer) {
        return "It's a tie!";
      } else if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'scissors' && computer === 'paper') ||
        (user === 'paper' && computer === 'rock')
      ) {
        return 'You win!';
      } else {
        return 'Computer wins!';
      }
    };
    setres(result(uc,cc));
  }
  return ( 
    <div id='space'>
      <center>
      <h3>Play and Enjoy the Game with Computer</h3>
      <button className='butn2' onClick={()=>rpsgm('rock')}>Rock</button>
      <button className='butn2' onClick={()=>rpsgm('paper')}>Paper</button>
      <button className='butn2' onClick={()=>rpsgm('scissor')}>Scissors</button>
      <h1>{res}</h1>
      <button className='butn2' onClick={()=>{setuc('');setcc('');setres('');}}>Reset</button>
      <br/>
      <button className='butn2' onClick={() => navigate(-1)}>Back To Home </button>
      </center>
    </div>
  );
}

export default Rps;
