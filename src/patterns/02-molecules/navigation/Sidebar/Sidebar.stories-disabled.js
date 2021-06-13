import React from 'react';
import classNames from 'classnames';
import SidebarComponent from './Sidebar';

export default {
  title: '02-molecules',
  component: SidebarComponent,
  decorators: [
    (Story) => (
      <div className={classNames('min-h-screen', 'w-full', 'sm:w-64')}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <SidebarComponent {...args} />;

export const Sidebar = Template.bind({});
Sidebar.parameters = {
  controls: { hideNoControlsWarning: true },
};
