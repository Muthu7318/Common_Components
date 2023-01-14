import { useState } from "react";
import Dropdown from "./Components/Dropdown";

function App() {
  const [option, setOption] = useState(null);

  const handleSelect = (option) => {
    setOption(option);
  };

  const options = [
    {
      id: 1,
      label: "Lable 1",
      value: "lbl_1",
    },
    {
      id: 2,
      label: "Lable 2",
      value: "lbl_2",
    },
    {
      id: 3,
      label: "Lable 3",
      value: "lbl_3",
    },
    {
      id: 4,
      label: "Lable 4",
      value: "lbl_4",
    },
  ];
  return (
    <div className="flex">
      <Dropdown
        options={options}
        onSelect={handleSelect}
        defaultOption={option}
      ></Dropdown>
      <Dropdown
        options={options}
        onSelect={handleSelect}
        defaultOption={option}
      ></Dropdown>
    </div>
  );
}

export default App;
