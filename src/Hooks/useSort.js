import { useState } from "react";

function useSort(config, data) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const setSortColumn = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  // only sort data if sortdata && sortBy are not null
  // make a copy of data prop, why ? sorting will affect the original array never mutate the original object of prop or state in react
  // find the correct sortvalue fn and use it for sorting
  let sortedData = data;
  if (sortBy && sortOrder) {
    const { sortValue } = config.find((col) => col.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;
      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return {
    setSortColumn,
    sortBy,
    sortOrder,
    sortedData,
  };
}

export default useSort;
