//system
import React, { useState } from "react";

//consts
import { RoundedConsts } from "../@core/consts/Rounded";
import { IKeyValuePair } from "@/@core/interfaces/IKeyValuePair";

//types
import { RoundedType } from "../@core/types/Rounded";
import Checkbox from "./Checkbox";

interface Props {
  id: string;
  selectedValues: IKeyValuePair[];
  options: IKeyValuePair[];
  name: string;
  enable: boolean;
  rounded: RoundedType;
  label: string;
  onChange?: (selected: IKeyValuePair[]) => void;
}

export default function MultiSelect({
  options,
  rounded,
  label,
  selectedValues = [],
  enable = true,
  onChange,
}: Props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [internalValues, setInternalValues] =
    useState<IKeyValuePair[]>(selectedValues);

  const toggleDropdown = () => {
    if (enable) setDropdownOpen(!dropdownOpen);
  };

  const handleToggle = (value: IKeyValuePair) => {
    const exists = internalValues.some((item) => item.value === value.value);
    const updatedValues = exists
      ? internalValues.filter((item) => item.value !== value.value)
      : [...internalValues, value];

    setInternalValues(updatedValues);
    onChange && onChange(updatedValues);
  };

  return (
    <div className="relative text-neutral-600">
      <div
        onClick={toggleDropdown}
        className={`border px-3 py-2 cursor-pointer ${
          enable ? "" : "cursor-not-allowed opacity-50"
        } ${rounded && RoundedConsts[rounded]}`}
      >
        {internalValues.length > 0
          ? internalValues.map((item) => item.value).join(", ")
          : label}
      </div>
      {dropdownOpen && (
        <ul className="z-10 mt-1 border bg-white rounded w-full text-sm p-3">
          {options.map((option, index) => (
            <div
              key={option.key}
              className={`${options.length - 1 == index ? "" : "mb-2"} ml-2`}
            >
              <Checkbox
                enable={true}
                id={option.value}
                label={String(option.value)}
                checked={internalValues.includes(option)}
                onChange={() => handleToggle(option)}
              />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}
