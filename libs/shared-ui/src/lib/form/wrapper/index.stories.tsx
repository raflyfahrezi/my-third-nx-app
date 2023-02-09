import type { ComponentStory, ComponentMeta } from '@storybook/react';
import WrapperForm from './index';

const Story: ComponentMeta<typeof WrapperForm> = {
  component: WrapperForm,
  title: 'WrapperForm',
};
export default Story;

const Template: ComponentStory<typeof WrapperForm> = (args) => (
  <WrapperForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
