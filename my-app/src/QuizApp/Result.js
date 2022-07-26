import React from 'react'
import {useLocation} from 'react-router-dom';
// import "../../src/QuizResult.css"

function Result() {

    const location = useLocation();
  //  console.log(location)
var score = location.state.name;

 var per = (score * 100 )/ 3;
 
  return (
    <>
    <div className="container">
    <div className="main_result">
    <div className='inside'> 
      <h1 className='h1_result'>Result</h1>
      
      
    <h3 className='score_style '>    {score}  of 3</h3>
    <h3 className='h3_result'>{per}% Score</h3>
<h3 className='remark_style '>{per>=80 ? "Exceptional 🥇"  : per>=70 && per<80? "Excellent 🥈" : per>=60 && per<70? "Good 👍" : per>=50 && per<60? "Satisfactory  😊" : "Well, you have a lot of studying to do 👎" } </h3>
      
      </div>
      </div>
</div>
    </>
  )
}

export default Result