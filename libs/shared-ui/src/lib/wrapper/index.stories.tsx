import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Wrapper from './index';

const Story: ComponentMeta<typeof Wrapper> = {
  component: Wrapper,
  title: 'Wrapper',
};
export default Story;

const Template: ComponentStory<typeof Wrapper> = (args) => (
  <Wrapper {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
