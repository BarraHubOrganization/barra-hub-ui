import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Loader from "../components/Loader";

export default {
  title: "Navigation/Loader",
  component: Loader,
  tags: ["autodocs"],
} as Meta<typeof Loader>;

const Template: StoryFn<typeof Loader> = (args) => {
  return <Loader {...args} />;
};

export const ComponentLoader = Template.bind({});
ComponentLoader.args = {
  loading: true,
};
