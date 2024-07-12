import { Meta, StoryFn } from "@storybook/react";
import RadioButton from "../components/RadioButton";
import React from "react";

export default {
  title: "Editors/RadioButton",
  component: RadioButton,
  tags: ['autodocs'],
} as Meta<typeof RadioButton>;

const Template: StoryFn<typeof RadioButton> = (args) => {
  return <RadioButton {...args} />;
};

export const ComponentRadioButtonEnable = Template.bind({});
ComponentRadioButtonEnable.args = {
 label: "Radio button",
 enable: true
};

export const ComponentRadioButtonDisabled = Template.bind({});
ComponentRadioButtonDisabled.args = {
 label: "Radio button",
 enable: false,
 checked: true,
};
