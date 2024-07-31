import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Card from "../components/Card";

export default {
  title: "Layout/Card",
  component: Card,
  tags: ['autodocs'],
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => {
  return <Card {...args} />;
};

export const ComponentCard = Template.bind({});
ComponentCard.args = {
  content: <span>Teste HTML</span>,
  shadow: 'sm',
  rounded: "sm",
};