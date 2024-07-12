import { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import Switch from "../components/Switch";

export default {
  title: "Editors/Switch",
  component: Switch,
  tags: ["autodocs"],
} as Meta<typeof Switch>;

const Template: StoryFn<typeof Switch> = (args) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return <Switch {...args} checked={checked} onChange={handleChange}/>;
};

export const ComponentSwitchEnable = Template.bind({});
ComponentSwitchEnable.args = {
  id: "switchEnable",
  onText: "Sim",
  offText: "Não",
  enable: true,
};

export const ComponentSwitchDisabled = Template.bind({});
ComponentSwitchDisabled.args = {
  id: "switchEnable",
  onText: "Sim",
  offText: "Não",
};
