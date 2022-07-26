import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import { createContext } from 'react'

// import questions from './Questions'

function QuizComp() {
    
   const navigate =  useNavigate()
    var no=1;
    
    var [first, setfirst] = useState(no)
    var [score, setScore] = useState(0)
    const [check, setCheck] = useState("")
    const [updateCheck, setUpdateCheck] = useState({
        op1:false,
        op2:false
    })

    
    
    var questions = [
        {
            id:1,
            q:"Everything in React is a" ,
            o1:"Module",
            o2:"Component",
            o3:"Package"
        },
        {
            id:2,
            q:"Pakistan Independance day",
            o1:"1965",
            o2:"1947",
            o3:"1949"
        },
        {
            id:3,
            q:"Who is the first Governor General of Pakistan?",
            o1:"M.A Jinnah",
            o2:"Ayub Khan",
            o3:"Liaquat Ali Khan"
        },
        {
            id:4,
            q:"Who is making the Web standards?",
            o1:"Mozilla",
            o2:"Microsoft",
            o3:"Google"
        },
        {
            id:5,
            q:"What does HTML stand for",
            o1:"Hyper Text Markup Language",
            o2:"Home Tool Markup Language",
            o3:"HyperLinks and Text Markup Language"
        }
    ]  
   const getOption= (e) =>{
 setCheck(e.target.value)
 
 console.log(e.target.checked)
 if(e.target.id==="op1")
 {
    setUpdateCheck(()=>{
        return{
            op1:e.target.checked,
            op2:false,
            op3:false
        }
    })
 }
else if(e.target.id==="op2")
 {
    setUpdateCheck(()=>{
        return{
            op2:e.target.checked,
            op1:false,
            op3:false
        }
    })
 }
 else if(e.target.id==="op3")
 {
    setUpdateCheck(()=>{
        return{
            op3:e.target.checked,
            op1:false,
            op2:false
        }
    })
 }
   }
    const handleData =()=>{
        setfirst(first=first+1)
        
       setUpdateCheck({
        op1:false,
        op2:false,
        op3:false
       })
            
           
            if(check==="Component")
            {
                setScore(score=score+1)
                
            }
           else if(check==="1947")
            {
                setScore(score=score+1)
            }
            else if(check==="M.A Jinnah")
            {
                setScore(score=score+1)
            }
            else if(check==="Hyper Text Markup Language")
            {
                setScore(score=score+1)
            }
           
        
        
         if(first>questions.length){
            navigate("/result",{state:{id:1,name:score}});
           

    //   <Link to="/result">Result </Link>
   
           
            
        }
        
    }
  return (
    <>
    
    {questions.filter(data => data.id==first).map((filteredData,index)=>{
        
        return(
            <>
            <div className='container'>
            <div className='main'>
            <div className='QuesHead'>
        <h1 key={index}><span>Q{filteredData.id}.</span>{filteredData.q}</h1>
         </div>
           <ul>
            <li className='radio'>
            <input type="radio" name="selector" className='radio_input' id="op1" checked={updateCheck.op1} value={filteredData.o1} onChange={getOption}/>
           
            <label htmlFor="op1" >{filteredData.o1}</label>
           
            </li>
            <li className='radio'>
            <input type="radio" name="selector" className='radio_input' id="op2"  checked={updateCheck.op2} value={filteredData.o2} onChange={getOption}/>
            <label htmlFor="op2">{filteredData.o2}</label>
            </li>
            <li className='radio'>
            <input type="radio" name="selector" className='radio_input' id="op3"  checked={updateCheck.op3} value={filteredData.o3} onChange={getOption}/>
            <label htmlFor="op3">{filteredData.o3}</label>
            </li>

            
            
           </ul>
           <button onClick={handleData}>Next</button>
           {/* {first>questions.length?
       navigate("/result")  :     <button onClick={handleData}>next</button>
            } */}
           </div>
           </div>
          
            </>
        )
    })}
    
      
    
    </>
  )
}

export default QuizComp;
