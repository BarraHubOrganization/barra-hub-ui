import { Meta, StoryFn } from "@storybook/react";
import Select from "../components/Select";
import React from "react";

export default {
  title: "Editors/Select",
  component: Select,
  tags: ["autodocs"],
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args) => {
  return (
    <div className="w-60">
      <Select {...args} />
    </div>
  );
};

export const ComponentSelectEnable = Template.bind({});
ComponentSelectEnable.args = {
  enable: true,
  options: [
    { key: 1, value: "Option 1" },
    { key: 2, value: "Option 2" },
    { key: 3, value: "Option 3" },
  ],
  label: "Label",
  id: "Select",
  value: "teste",
};

export const ComponentSelectDisable = Template.bind({});
ComponentSelectDisable.args = {
  enable: false,
  options: [
    { key: 1, value: "Option 1" },
    { key: 2, value: "Option 2" },
    { key: 3, value: "Option 3" },
  ],
  label: "Label",
  id: "Select",
  value: "teste",
};
