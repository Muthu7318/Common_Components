import Route from "./Components/Route";
import AccordionPage from "./Pages/AccordionPage";
import DropdownPage from "./Pages/DropdownPage";
import Sidebar from "./Components/Sidebar";
import ButtonPage from "./Pages/ButtonPage";
import ModalPage from "./Pages/ModalPage";
import TablePage from "./Pages/TablePage";
import CounterPage from "./Pages/CounterPage";
import CounterPageReducer from "./Pages/CounterPage_reducer";

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar></Sidebar>
      <div className="col-span-5">
        <Route path="/accordion">
          <AccordionPage></AccordionPage>
        </Route>
        <Route path="/">
          <DropdownPage></DropdownPage>
        </Route>
        <Route path="/buttons">
          <ButtonPage></ButtonPage>
        </Route>
        <Route path="/modal">
          <ModalPage></ModalPage>
        </Route>
        <Route path="/table">
          <TablePage></TablePage>
        </Route>
        <Route path="/count">
          <CounterPage initialCount={0}></CounterPage>
        </Route>
        <Route path="/countReducer">
          <CounterPageReducer initialCount={0}></CounterPageReducer>
        </Route>
      </div>
    </div>
  );
}

export default App;
