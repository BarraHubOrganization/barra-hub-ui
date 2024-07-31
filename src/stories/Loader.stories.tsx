import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Loader from "../components/Loader";

export default {
  title: "Interactivity/Loader",
  component: Loader,
  tags: ["autodocs"],
  decorators: [(Story) => <div style={{ height: '100vh', width: '100vw' }}><Story /></div>]
} as Meta<typeof Loader>;

const Template: StoryFn<typeof Loader> = (args) => {
  return <Loader {...args} />;
};

export const ComponentLoader = Template.bind({});
ComponentLoader.args = {
  loading: true,
};
