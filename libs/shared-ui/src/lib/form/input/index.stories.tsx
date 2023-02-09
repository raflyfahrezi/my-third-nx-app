import type { ComponentStory, ComponentMeta } from '@storybook/react';
import InputForm from './index';

const Story: ComponentMeta<typeof InputForm> = {
  component: InputForm,
  title: 'InputForm',
};
export default Story;

const Template: ComponentStory<typeof InputForm> = (args) => (
  <InputForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
