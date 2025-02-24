//To Do APP

import React, { useState } from 'react';
import { useNavigate,Link,Route } from 'react-router-dom';
function  Todo(){
    let [tasks,settasks]=useState([]);
    let [newtsk,setnewtsk]=useState('');
    const navigate=useNavigate()
    let add=()=>{
        settasks([...tasks,newtsk]);
        setnewtsk('')
    }
    let del =(index)=>{
        settasks(tasks.filter((tsk,i)=>i!==index))
    }
    return(
        <div id='space' className='container mt-5 w-50'>
            <center>
                <h1>TODOAPP</h1>
            <div className='input-group'>
                <input className='form-control' type='text' value={newtsk} onChange={(e)=>setnewtsk(e.target.value)}/>
                <button className='btn btn-primary' onClick={add}>Add</button>
            </div>
            <ul className='list-group mt-4'>
                {
                    tasks.map((tsk,index)=>
                    <li key={index} className='list-group-item'>
                        {tsk}
                        <button className='btn' onClick={()=>del(index)}>❌</button>
                    </li>

                )
                }
            </ul>
            <br/>
            <button className="butn2" onClick={() => navigate(-1)}>Back</button>
            </center>
        </div>
    )
}


export default Todo;