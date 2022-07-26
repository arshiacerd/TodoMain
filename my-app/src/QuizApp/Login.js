import React from 'react'
import { useState } from 'react'
import QuizComp from './QuizComp'
import { Outlet, Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()
 const [info, setInfo ] =  useState({name:"",pass:""})
  const saveData =(e)=>{
   if(e.target.name==="user")
   {
    setInfo((prevData)=>{
      
      return{
        name:e.target.value,
        pass:prevData.pass
        
      }
      
    })
  

   }
  else if(e.target.name==="pass")
   {
    setInfo((prevData)=>{
     
      return{
        name: prevData.name,
        pass:e.target.value
      }
      
    })
   

   }
  }
  const saveStorage=()=>{
    localStorage.setItem("user",info.name)
    localStorage.setItem("pass",info.pass)
    var name = localStorage.getItem("user")
    var pass = localStorage.getItem("pass")

  if(name === "Arshia" && pass == 123)
  {
    alert("nbnm");
navigate("/quiz");
    //  <Link to="/quiz"></Link>
  }


  }
  return (
   <>
     
     <div  className='container'>
        <div className='main'>
        <div className='QuesHead'>
        <h1>Quiz App</h1>
        </div>
       <ul>
       <li>
         <label htmlFor="">Username</label>   <input className='input_login' type="text" name="user" onChange={saveData}/><br />
         </li>
         <li>
         <label htmlFor="">Password</label>   <input className='input_login' type="Password" name="pass"  onChange={saveData}/>
         </li>
         </ul>
         <button onClick={saveStorage}>Login</button>
        
        </div>
     </div>
      
    
   </>
  )
}

export default Login