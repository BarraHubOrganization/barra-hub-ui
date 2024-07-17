import { Meta, StoryFn } from "@storybook/react";
import Progressbar from "../components/Progressbar";
import React from "react";

export default {
  title: "Interactivity/Progressbar",
  component: Progressbar,
  tags: ['autodocs'],
} as Meta<typeof Progressbar>;

const Template: StoryFn<typeof Progressbar> = (args) => {
  return <div className="w-60"><Progressbar {...args} /></div>;
};

export const ComponentProgressbarEnable = Template.bind({});
ComponentProgressbarEnable.args = {
 enable: true,
 value: 5
};

export const ComponentProgressbarDisabled = Template.bind({});
ComponentProgressbarDisabled.args = {
 enable: false,
 value: 5
};
