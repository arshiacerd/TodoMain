import logo from './logo.svg';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
 import './Quiz.css';
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


function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/quiz" element={<QuizComp />}/>
      <Route path="/result" element={<Result />}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
