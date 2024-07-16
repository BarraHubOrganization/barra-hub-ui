import { Meta, StoryFn } from "@storybook/react";
import Textarea from "../components/Textarea";
import React from "react";

export default {
  title: "Editors/Textarea",
  component: Textarea,
  tags: ['autodocs'],
} as Meta<typeof Textarea>;

const Template: StoryFn<typeof Textarea> = (args) => {
  return <div className="w-60"><Textarea {...args} /></div>;
};

export const ComponentTextareaEnable = Template.bind({});
ComponentTextareaEnable.args = {
 enable: true,
 label: "Label",
 id: "Textarea",
 value: "teste"
};

export const ComponentTextareaDisabled = Template.bind({});
ComponentTextareaDisabled.args = {
 enable: false,
 label: "Label",
 id: "Textarea",
 value: "teste Textarea"
};
