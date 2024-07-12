import React from "react";

interface Props {
  id: string;
  label: string;
  enable: boolean;
  checked: boolean;
  onChange: () => void;
}

export default function Avatar({
  id,
  label,
  enable,
  checked,
  onChange,
}: Props) {
  return (
    <div id="checkbox" className="flex items-center">
      <input
        disabled={!enable}
        id={id}
        type="checkbox"
        checked={checked}
        className={`${!enable ? "bg-neutral-200 text-neutral-300" : " border border-gray-300 rounded-sm bg-white checked:bg-red-500"} focus:outline-none transition duration-200 cursor-pointer appearance-none h-5 w-5`}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className={`${enable ? "text-neutral-800 hover:text-red-500" : "text-neutral-300"} ml-2 block w-full h-full  cursor-pointer`}
      >
        {label}
      </label>
    </div>
  );
}
