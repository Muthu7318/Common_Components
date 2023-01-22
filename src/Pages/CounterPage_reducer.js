import produce from "immer";
import Button from "../Components/Button";
import { useReducer } from "react";
import Panel from "../Components/Panel";
import { CounterConstants } from "../Constants";

function CounterPageReducer({ initialCount }) {
  //   const [count, setCount] = useState(initialCount);
  //   const [ValueToAdd, setValueToAdd] = useState(0);
  const reducer = (state, action) => {
    switch (action.type) {
      case CounterConstants.increment:
        state.count = state.count + 1;
        return;
      case CounterConstants.decrement:
        state.count = state.count - 1;
        return;
      case CounterConstants.valuetoadd:
        state.count = state.count + (parseInt(state.ValueToAdd) || 0);
        state.ValueToAdd = 0;
        return;
      case CounterConstants.valuetochange:
        state.ValueToAdd = action.payload;
        return;
      default:
        return;
    }
  };
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    ValueToAdd: 0,
  });

  const increment = () => {
    // setCount(count + 1);
    dispatch({
      type: CounterConstants.increment,
    });
  };

  const decrement = () => {
    // setCount(count - 1);
    dispatch({
      type: CounterConstants.decrement,
    });
  };

  const handleChange = (e) => {
    // setValueToAdd(e.target.value);
    dispatch({
      type: CounterConstants.valuetochange,
      payload: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setCount(count + (parseInt(ValueToAdd) || 0));
    // setValueToAdd(0);
    dispatch({
      type: CounterConstants.valuetoadd,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.ValueToAdd}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it</Button>
      </form>
    </Panel>
  );
}

export default CounterPageReducer;
