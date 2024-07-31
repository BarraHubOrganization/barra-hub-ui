import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Editor from "../components/Editor";

export default {
  title: "Editor/Editor",
  component: Editor,
  tags: ['autodocs'],
} as Meta<typeof Editor>;

const Template: StoryFn<typeof Editor> = (args) => <Editor {...args} />;

export const ComponentEditor = Template.bind({});
ComponentEditor.args = {
  id: 'editor',
  enable: true,
  value: "<p>Teste</p>",
  onChange: () => {},
};
