import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import MaskedInput from "../components/MaskedInput";

export default {
  title: "Navigation/MaskedInput",
  component: MaskedInput,
  tags: ["autodocs"],
} as Meta<typeof MaskedInput>;

const Template: StoryFn<typeof MaskedInput> = (args) => {
    const [value, setValue] = useState("");

    return <MaskedInput {...args} value={value} onChange={setValue} />;
};

export const ComponentMaskedInput = Template.bind({});
ComponentMaskedInput.args = {
    id: "phone",
    name: "phone",
    label: "Phone Number",
    mask: "(99) 99999-9999",
    placeholder: "Enter your phone number",
    disabled: false,
};
