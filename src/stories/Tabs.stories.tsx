import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Tabs from "../components/Tabs";
import { faBus, faCar, faTractor } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Navigation/Tabs",
  component: Tabs,
  tags: ["autodocs"],
} as Meta<typeof Tabs>;

const Template: StoryFn<typeof Tabs> = (args) => {
  return <Tabs {...args} />;
};

export const ComponentTabsText = Template.bind({});
ComponentTabsText.args = {
  tabs: [
    {
      label: "Tab 1",
      icon: faTractor,
      content: <div className="text-neutral-700">Content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      icon: faCar,
      content: <div className="text-neutral-700">Content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      icon: faBus,
      content: <div className="text-neutral-700">Content for Tab 3</div>,
    },
  ],
};
