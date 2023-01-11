import Button from "./Components/Button";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>
        <Button primary>button 1</Button>
      </div>
      <div>
        <Button>button 2</Button>
      </div>
      <div>
        <Button>button 3</Button>
      </div>
      <div>
        <Button>button 4</Button>
      </div>
      <div>
        <Button>button 5</Button>
      </div>
    </div>
  );
}

export default App;
