import { Meta } from '@storybook/react';

import { Input, IInputProps } from './Input';

const inputMeta: Meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default inputMeta;

type Story = {
  args: Partial<IInputProps>;
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Size: Story = {
  args: {
    size: 'large',
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
  },
};
