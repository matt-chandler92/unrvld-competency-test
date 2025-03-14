import { useState } from "react";
export interface option {
  name: string;
  value: string;
}

export interface FilterProps {
  options: option[];
  onChange: (value: string) => void;
}
export function Filters({ options, onChange }: FilterProps) {
  const [selected, setSelected] = useState("");

  return (
    <fieldset className="filters">
      <legend>Filter by:</legend>
      {options.map((option, index) => (
        <label
          htmlFor={`filter-${index}`}
          key={index}
          className="filters__option button button__secondary"
        >
          <input
            type="radio"
            name="filter"
            value={option.value}
            checked={selected === option.value}
            onChange={() => {
              setSelected(option.value);
              onChange(option.value);
            }}
            id={`filter-${index}`}
          />
          {option.name}
        </label>
      ))}
    </fieldset>
  );
}
