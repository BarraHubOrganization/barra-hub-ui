import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Collapse from "../components/Collapse";

export default {
  title: "Layout/Collapse",
  component: Collapse,
  tags: ["autodocs"],    
} as Meta<typeof Collapse>;

const Template: StoryFn<typeof Collapse> = (args) => {
  return (
    <>
      <Collapse {...args} />
    </>
  );
};

export const ComponentCollapse = Template.bind({});
ComponentCollapse.args = {
  title: "Viagem",
  children:<b>Teste</b>,
  subCollapse: [
    {
      title: "SubCollapse 1.1",
      content: "Conteúdo do SubCollapse 1.1",
    },
    {
      title: "SubCollapse 2",
      content: "Conteúdo do SubCollapse 2",
    },
  ],
};
