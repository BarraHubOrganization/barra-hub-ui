import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Avatar from "../components/Avatar";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Layout/Avatar",
  component: Avatar,
} as Meta<typeof Avatar>;

const Template: StoryFn<typeof Avatar> = (args) => {
  return <Avatar {...args} />;
};

export const ComponentAvatarText = Template.bind({});
ComponentAvatarText.args = {
  type: "text",
  text: "VK",
  rounded: "rounded-full",
};

export const ComponentAvatarIcon = Template.bind({});
ComponentAvatarIcon.args = {
  type: "icon",
  icon: faCalendarDay,
  rounded: "rounded-full",
};

export const ComponentAvatarImage = Template.bind({});
ComponentAvatarImage.args = {
  type: "image",
  linkImage: "https://t2.tudocdn.net/213478?w=1920",
  rounded: "rounded-full",
};
