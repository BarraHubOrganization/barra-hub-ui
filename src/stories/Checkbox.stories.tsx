import { Meta, StoryFn } from "@storybook/react";
import Checkbox from "../components/Checkbox";
import React from "react";

export default {
  title: "Editors/Checkbox",
  component: Checkbox,
  tags: ['autodocs'],
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = (args) => {
  return <Checkbox {...args} />;
};

export const ComponentCheckboxEnable = Template.bind({});
ComponentCheckboxEnable.args = {
 label: "Checkbox",
 enable: true
};

export const ComponentCheckboxDisabled = Template.bind({});
ComponentCheckboxDisabled.args = {
 label: "Checkbox",
 enable: false,
 checked: true,
};
