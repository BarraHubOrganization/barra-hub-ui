import { Meta, StoryFn } from "@storybook/react";
import Radio from "../components/Radio";
import React from "react";

export default {
  title: "Editors/Radio",
  component: Radio,
  tags: ['autodocs'],
} as Meta<typeof Radio>;

const Template: StoryFn<typeof Radio> = (args) => {
  return <Radio {...args} />;
};

export const ComponentRadioEnable = Template.bind({});
ComponentRadioEnable.args = {
 label: "Radio button",
 enable: true
};

export const ComponentRadioDisabled = Template.bind({});
ComponentRadioDisabled.args = {
 label: "Radio button",
 enable: false,
 checked: true,
};
