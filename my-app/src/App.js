import logo from './logo.svg';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//  import './Quiz.css';
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import MyComp from '././Components/MyComp'
import SliderMat from './Components/SliderMat';
import InputSlider from './Components/InputSlider';
import RangeSlider from './Components/RangeSlider';
import SelectMat from './Components/SelectMat';
import InputMat from './Components/InputMat';
import BoxMat from './Components/BoxMat';
import GridMat from './Components/GridMat';
import Login from './QuizApp/Login';
import QuizComp from './QuizApp/QuizComp';
import Result from './QuizApp/Result';
import { useSelector, useDispatch } from 'react-redux';
import {Increment, Decrement} from './Redux/actions/index'
import CounterRedux from './ReduxComp/CounterRedux';

import TypoGraphy from './MaterialPractice/TypoGraphy';
import MuiButton from './MaterialPractice/MuiButton';
import MuiRating from './MaterialPractice/MuiRating';
import { MuiStack } from './MaterialPractice/MuiStack';
import MuiPaper from './MaterialPractice/MuiPaper';
import MuiAvatar from './MaterialPractice/MuiAvatar';
import MuiBadge from './MaterialPractice/MuiBadge';
import JokeBuilder from './JokeApp/JokeBuilder';
import Check from './TodoApp/Check'
import Pause from './TodoApp/P';
import Todo from './TodoApp/Todo';

function App() {
  // const myState = useSelector((state)=> state.changeTheNumber)
  // const dispatch = useDispatch()
  return (
    <div className="App">

{/* <TypoGraphy /> */}
{/* <Pause /> */}
<Todo/>







    {/* <CounterRedux /> */}

    {/* <input type="text" value={myState} />
    <button onClick={()=>dispatch(Increment())}>Inc</button>
    <button onClick={()=>dispatch(Decrement())}>Dec</button> */}
     {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/quiz" element={<QuizComp />}/>
      <Route path="/result" element={<Result />}/>

      </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
