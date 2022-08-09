import React ,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Increment, Decrement, AddAmount , AddOdd} from "../Redux/actions/index";

function CounterRedux() {
  const [first, setfirst] = useState(0);
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  const handleClick = (e) => {
   
    setfirst( parseInt(e.target.value,10));
    
  };
  
 
  return (
    <>
      <button onClick={() => dispatch(Increment())}>+</button>
      <h1>{myState}</h1>
      <input type="number" onChange={handleClick} />
      <button onClick={() => dispatch(Decrement())}>-</button>
      <button onClick={() => dispatch(AddAmount(first))}>Add Amount</button>
      <button onClick={()=>dispatch(AddOdd(first))}>Add  if odd</button>
    </>
  );
}

export default CounterRedux;
