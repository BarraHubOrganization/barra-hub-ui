import React from "react";

interface AvatarProps {
  label: string;
  enable: boolean;
  checked: boolean;
}

export default function Avatar({ label, enable, checked }: AvatarProps) {
  return (
    <div id="checkbox" className="flex items-center">
      <input
        disabled={!enable}
        id="checkbox"
        type="checkbox"
        checked={checked}
        className={`${!enable ? "bg-neutral-200 text-neutral-300" : " border border-gray-300 rounded-sm bg-white checked:bg-red-500"} focus:outline-none transition duration-200 cursor-pointer appearance-none h-5 w-5`}
      />
      <label
        htmlFor="checkbox"
        className={`${enable ? "text-neutral-800" : "text-neutral-300"} ml-2 block w-full h-full  cursor-pointer`}
      >
        {label}
      </label>
    </div>
  );
}
