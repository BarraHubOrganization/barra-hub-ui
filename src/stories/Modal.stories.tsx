import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Modal from "../components/Modal";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Layout/Modal",
  component: Modal,
  tags: ["autodocs"],
  decorators: [(Story) => <div style={{ height: '100vh', width: '100vw' }}><Story /></div>]
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => {
  return (
    <>
      <Modal {...args} />
    </>
  );
};

export const ComponentModal = Template.bind({});
ComponentModal.args = {
  iconTitle: faBuilding,
  title: 'Cadastro de empresas',
  isVisible: true,
  onClose: ()=>{},
  content: <div>Your modal content here</div>,
  textButton: 'Salvar',
  onClickButton: ()=>{},
};
