import { type ChangeEvent } from "react";

type SelectProps<T extends string | number> = {
  data: T[];
  value: T;
  onChange: (value: T) => void;
};

export const Select = <T extends string | number>({
  data,
  value,
  onChange,
}: SelectProps<T>) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value as unknown as T;
    onChange(selectedValue);
  };

  return (
    <select value={value} onChange={handleChange}>
      {data.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};
