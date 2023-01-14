import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

const Dropdown = ({ options, onSelect, defaultOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderedOption = options.map((item) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        key={item.value}
        onClick={() => {
          setIsOpen(false);
          onSelect(item);
        }}
      >
        {item.label}
      </div>
    );
  });

  return (
    <div className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={() => {
          setIsOpen((currentIsOpen) => !currentIsOpen);
        }}
      >
        {defaultOption?.label || "--Select--"}
        <GoChevronDown></GoChevronDown>
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOption}</Panel>}
    </div>
  );
};

export default Dropdown;
