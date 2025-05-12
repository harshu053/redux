import "./styles.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "./redux/counterslice";
import "./App.css";

export default function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  return (
    <div className="App">
      <div>redux counter example</div>
      <div>count: {count}</div>

      <div className="buttons">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>

      <div className="custom-increment">
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount..."
        />
        <div>
          <button
            className="buttons"
            onClick={() => dispatch(incrementByAmount(amount))}
          >
            IncrementBy {amount}
          </button>
        </div>
      </div>
    </div>
  );
}
