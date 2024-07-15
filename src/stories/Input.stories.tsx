import { Meta, StoryFn } from "@storybook/react";
import Input from "../components/Input";
import React from "react";

export default {
  title: "Editors/Input",
  component: Input,
  tags: ['autodocs'],
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => {
  return <div className="w-60"><Input {...args} /></div>;
};

export const ComponentInputEnable = Template.bind({});
ComponentInputEnable.args = {
 enable: true,
 label: "Label",
 id: "input",
 value: "teste"
};

export const ComponentInputDisabled = Template.bind({});
ComponentInputDisabled.args = {
 enable: false,
 label: "Label",
 id: "input",
 value: "teste input"
};
