import { useSelector } from "react-redux";

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  console.log(count);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button>Increment</button>
      <button>Decrement</button>
    </div>
  );
};

export default CounterView;
