import { Meta, StoryFn } from "@storybook/react";
import Tooltip from "../components/Tooltip";
import React from "react";

export default {
  title: "Editors/Tooltip",
  component: Tooltip,
  tags: ['autodocs'],
} as Meta<typeof Tooltip>;

const Template: StoryFn<typeof Tooltip> = (args) => {
  return <div className="relative flex h-screen items-center justify-center">
  <button
    id="my-button"
    className="rounded-md bg-blue-500 px-4 py-4 text-white"
  >
    Hover me
  </button>
  <Tooltip {...args} />
</div>;
};

export const ComponentTooltip = Template.bind({});
ComponentTooltip.args = {
  text: 'Tooltip',
  targetId: 'my-button',
};