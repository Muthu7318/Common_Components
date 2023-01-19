import Route from "./Components/Route";
import AccordionPage from "./Pages/AccordionPage";
import DropdownPage from "./Pages/DropdownPage";
import Sidebar from "./Components/Sidebar";
import ButtonPage from "./Pages/ButtonPage";

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
      </div>
    </div>
  );
}

export default App;
