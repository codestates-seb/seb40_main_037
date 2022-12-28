import { Button } from '.';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = args => <Button {...args} />;

export const Normalbutton = Template.bind({});
Normalbutton.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const Linkbutton = Template.bind({});
Linkbutton.args = {
  primary: 'Linkbutton',
  label: 'Sorting',
};

export const Choosed = Template.bind({});
Choosed.args = {
  primary: 'Linkbutton',
  label: 'Sorting',
  Choosed: 'Choosed',
};

export const Mypagebutton = Template.bind({});
Mypagebutton.args = {
  primary: 'Mypagebutton',
  label: 'Sorting',
};

export const MypageSelected = Template.bind({});
MypageSelected.args = {
  primary: 'Mypagebutton',
  label: 'Sorting',
  Selected: 'Selected',
};

export const Paging = Template.bind({});
Paging.args = {
  primary: 'Pagingbutton',
  label: 'Sorting',
};

export const PagingSelected = Template.bind({});
PagingSelected.args = {
  primary: 'Pagingbutton',
  label: 'Sorting',
  Selected: 'Selected',
};
