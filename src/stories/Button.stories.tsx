import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button from "../components/Button";
import { faTrainTram } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Navigation/Button",
  component: Button,
  tags: ['autodocs'],
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => {
  return <Button {...args} />;
};

export const ComponentButtonSolid = Template.bind({});
ComponentButtonSolid.args = {
  text: 'Botão',
  icon: faTrainTram,
  rounded: 'sm',
  shadow: 'md',
  fillMode: 'solid',
  onClick: () => {}
};

export const ComponentButtonTonal = Template.bind({});
ComponentButtonTonal.args = {
  icon: faTrainTram,
  rounded: 'sm',
  shadow: 'md',
  fillMode: 'tonal',
  onClick: () => {}
};

export const ComponentButtonOutline = Template.bind({});
ComponentButtonOutline.args = {
  linkImage: 'https://cdn-icons-png.freepik.com/256/5344/5344453.png?semt=ais_hybrid',
  text: 'Brasil',
  rounded: 'sm',
  shadow: 'md',
  fillMode: 'outline',
  onClick: () => {}
};

export const ComponentButtonLink = Template.bind({});
ComponentButtonLink.args = {
  text: 'Link',  
  fillMode: 'link',
  onClick: () => {}
};

export const ComponentButtonClear = Template.bind({});
ComponentButtonClear.args = {
  text: 'Botão clear',  
  fillMode: 'clear',
  onClick: () => {}
};
