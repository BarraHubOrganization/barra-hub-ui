import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import UploadButton from "../components/UploadButton";

export default {
  title: "Editors/UploadButton",
  component: UploadButton,
  tags: ['autodocs'],
} as Meta<typeof UploadButton>;
  
const Template: StoryFn<typeof UploadButton> = (args) => {
  return <UploadButton {...args} />;
};

export const ComponentUploadButton = Template.bind({});
ComponentUploadButton.args = {
    onFileSelect: ()=>{},
    buttonText: "Selecione um arquivo"
};