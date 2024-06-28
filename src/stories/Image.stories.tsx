import { Meta } from '@storybook/react';

import { Image, IImageProps } from './Image';

const imageMeta: Meta = {
  title: 'Example/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default imageMeta;

type Story = {
  args: Partial<IImageProps>;
};

export const Radius: Story = {
  args: {
    radius: 'circle',
  },
};

export const Ratio: Story = {
  args: {
    ratio: 'square',
  },
};
