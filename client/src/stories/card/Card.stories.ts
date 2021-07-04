import {Story, Meta} from '@storybook/angular/types-6-0';

import Card from './card.component';

export default {
  title: 'Card',
  component: Card,
} as Meta;

const Template: Story<Card> = (args) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
};
