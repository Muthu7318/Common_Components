import React from "react";
import Table from "./Table";
import useSort from "../Hooks/useSort";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";

function SortableTable(props) {
  const { config, data } = props;
  const { sortedData, setSortColumn, sortBy, sortOrder } = useSort(
    config,
    data
  );

  const updatedConfig = config.map((col) => {
    if (col.sortValue) {
      return {
        ...col,
        header: () => (
          <th
            className="cursor-pointer hover:bg-gray-100"
            onClick={() => setSortColumn(col.label)}
          >
            <div className="flex items-center">
              {getIcons(col.label, sortBy, sortOrder)}
              {col.label}
            </div>
          </th>
        ),
      };
    } else {
      return col;
    }
  });

  return <Table {...props} config={updatedConfig} data={sortedData}></Table>;
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowSmallUp></GoArrowSmallUp>
        <GoArrowSmallDown></GoArrowSmallDown>
      </div>
    );
  }
  if (sortOrder === null) {
    return (
      <div>
        <GoArrowSmallUp></GoArrowSmallUp>
        <GoArrowSmallDown></GoArrowSmallDown>
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div>
        <GoArrowSmallUp></GoArrowSmallUp>
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div>
        <GoArrowSmallDown></GoArrowSmallDown>
      </div>
    );
  }
}
export default SortableTable;
