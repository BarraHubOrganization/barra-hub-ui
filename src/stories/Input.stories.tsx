import { Meta, StoryFn } from "@storybook/react";
import Input from "../components/Input";
import React from "react";

export default {
  title: "Editors/Input",
  component: Input,
  tags: ['autodocs'],
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => {
  return <div className="w-60"><Input {...args} /></div>;
};

// Exemplo de Input habilitado com validação
export const ComponentInputEnable = Template.bind({});
ComponentInputEnable.args = {
  enable: true,
  label: "Nome",
  id: "input",
  value: "teste",
  required: true,
  validations: [
    {
      rule: (value) => value.length >= 3,
      message: "O nome deve ter pelo menos 3 caracteres."
    }
  ]
};

// Exemplo de Input desabilitado com validação
export const ComponentInputDisabled = Template.bind({});
ComponentInputDisabled.args = {
  enable: false,
  label: "Nome",
  id: "input",
  value: "teste input",
  required: true,
  validations: [
    {
      rule: (value) => value.length >= 3,
      message: "O nome deve ter pelo menos 3 caracteres."
    }
  ]
};

// Exemplo de Input com mensagem de erro
export const ComponentInputError = Template.bind({});
ComponentInputError.args = {
  enable: true,
  label: "Nome",
  id: "input-error",
  value: "t",
  errorMessage: "Este campo é obrigatório.",
  required: true,
  validations: [
    {
      rule: (value) => value.length >= 3,
      message: "O nome deve ter pelo menos 3 caracteres."
    }
  ]
};

// Exemplo de Input obrigatório
export const ComponentInputRequired = Template.bind({});
ComponentInputRequired.args = {
  enable: true,
  label: "Nome",
  id: "input-required",
  value: "",
  required: true,
  validations: [
    {
      rule: (value: string | any[]) => value.length >= 3,
      message: "O nome deve ter pelo menos 3 caracteres."
    }
  ]
};
