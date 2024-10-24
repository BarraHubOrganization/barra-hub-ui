import { Meta, StoryFn } from "@storybook/react";
import Sidebar from "../components/Sidebar";
import React from "react";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Navigation/Sidebar",
  component: Sidebar,
  tags: ['autodocs'],
} as Meta<typeof Sidebar>;

const Template: StoryFn<typeof Sidebar> = (args) => {
  return <Sidebar {...args} />;
};

export const ComponentSidebar = Template.bind({});
ComponentSidebar.args = {
  username: "Vitória Fusco",
  profile: "Administrador",
  itemsSidebar: [{ link: "www.google.com.br", name: "Fluxo de caixa", icon: faChartLine }],
};
