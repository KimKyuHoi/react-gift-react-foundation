import { Meta } from '@storybook/react';

import { Layout, ILayoutProps } from './Layout';

const layoutMeta: Meta = {
  title: 'Example/Layout',
  component: Layout,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default layoutMeta;

type Story = {
  args: Partial<ILayoutProps>;
};

export const Default: Story = {
  args: {
    children: 'Hello, world!',
  },
};

export const FullScreen: Story = {
  args: {
    maxWidth: '100%',
    children: 'Hello, world!',
  },
};
