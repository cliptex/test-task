import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../store/counter/CounterSlice';
import Swal from 'sweetalert2';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [lessThenZero, setLessThenZero] = useState(false);
  const [display, setDisplay] = useState('none');

  useEffect(() => {
    setTimeout(() => {
      setDisplay('flex');
    }, 2200);
  }, []);

  const handleClick = (event) => {
    if (event.target.id === 'increment') {
      dispatch(increment());
      lessThenZero === true && setLessThenZero(false);
    } else if (event.target.id === 'decrement') {
      counter.value <= 0
        ? Swal.fire({
            icon: 'error',
            title: 'Don&apos;t do this!',
            text: 'Because this is the task given to me.',
          }) && setLessThenZero(true)
        : dispatch(decrement());
    } else if (event.target.id === 'reset') {
      dispatch(reset());
      lessThenZero === true && setLessThenZero(false);
    }
  };

  return (
    <div className="container" style={{ display: `${display}` }}>
      <h2 className="text">
        <span>Test Task </span>
        <span>|</span>
        <span> Counter</span>
      </h2>
      <div className="button-group">
        <button disabled={lessThenZero} id="decrement" onClick={handleClick}>
          -
        </button>
        <button disabled id="result">
          {counter.value}
        </button>
        <button id="increment" onClick={handleClick}>
          +
        </button>
        <button id="reset" onClick={handleClick}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
