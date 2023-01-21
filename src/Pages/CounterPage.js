import useCounter from "../Hooks/useCounter";
import Button from "../Components/Button";

function CounterPage({ initialCount }) {
  const { count, increment } = useCounter(initialCount);

  return (
    <div>
      count is {count}
      <Button onClick={increment}>click me</Button>
    </div>
  );
}

export default CounterPage;
