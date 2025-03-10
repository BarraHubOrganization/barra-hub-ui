import { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import MultiSelect from "../components/MultiSelect";

export default {
  title: "Editors/MultiSelect",
  component: MultiSelect,
  tags: ["autodocs"],
} as Meta<typeof MultiSelect>;

const Template: StoryFn<typeof MultiSelect> = (args) => {
  const [selectedOptions, setSelectedOptions] = useState(args.selectedValues || []);

  const handleChange = (newSelected: typeof selectedOptions) => {
    setSelectedOptions(newSelected);
    console.log("Selected options:", newSelected);
  };

  return (
    <div className="w-60">
      <MultiSelect
        {...args}
        selectedValues={selectedOptions}
        onChange={handleChange}
      />
    </div>
  );
};

export const MultiSelectEnabled = Template.bind({});
MultiSelectEnabled.args = {
  enable: true,
  options: [
    { key: "1", value: "Option 1" },
    { key: "2", value: "Option 2" },
    { key: "3", value: "Option 3" },
  ],
  label: "Select Options",
  id: "multi-select",
  name: "multi-select",
  rounded: "sm",
  selectedValues: [],
};
