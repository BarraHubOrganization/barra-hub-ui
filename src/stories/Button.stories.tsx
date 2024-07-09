import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button from "../components/Button";

export default {
  title: "Navigation/Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => {
  return <Button {...args} />;
};

export const ComponentButton = Template.bind({});
ComponentButton.args = {
  type: "text",
  text: "VK",
  rounded: "rounded-full",
};