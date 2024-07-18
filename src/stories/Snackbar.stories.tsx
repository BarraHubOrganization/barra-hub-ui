import { Meta, StoryFn } from "@storybook/react";
import Snackbar from "../components/Snackbar";
import React from "react";

export default {
  title: "Interactivity/Snackbar",
  component: Snackbar,
  tags: ['autodocs'],

} as Meta<typeof Snackbar>;

const Template: StoryFn<typeof Snackbar> = (args) => {
  return <div className="h-screen bg-neutral-100 p-10"><Snackbar {...args} /></div>;
};

export const ComponentSnackbarEnable = Template.bind({});
ComponentSnackbarEnable.args = {
 content: "Teste snackbar"
};
