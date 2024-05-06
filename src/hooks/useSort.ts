import { useState, useEffect } from "react";

type DataItem = {
  [key: string]: string | number;
};

export const useSortData = <T extends DataItem>(
  data: T[],
  sortBy: keyof T,
  sortOrder: "asc" | "desc"
) => {
  const [sortedData, setSortedData] = useState<T[]>([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const sorted = [...data].sort((a, b) => {
        const propA =
          typeof a[sortBy] === "string"
            ? a[sortBy].toString().toLowerCase()
            : a[sortBy];
        const propB =
          typeof b[sortBy] === "string"
            ? b[sortBy].toString().toLowerCase()
            : b[sortBy];

        if (typeof propA === "string" && typeof propB === "string") {
          return sortOrder === "asc"
            ? propA < propB
              ? -1
              : 1
            : propB < propA
              ? -1
              : 1;
        } else {
          return sortOrder === "asc"
            ? (propA as number) - (propB as number)
            : (propB as number) - (propA as number);
        }
      });
      setSortedData(sorted);
    }
  }, [data, sortBy, sortOrder]);

  return sortedData;
};
