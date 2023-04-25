import type { Meta, StoryObj } from '@storybook/react';
import { PixelIcons } from './Icons';

const meta: Meta<typeof PixelIcons> = {
  title: 'Global/Icons API',
  component: PixelIcons,
  tags: ['autodocs'],
  argTypes: {
    className: {
      description: 'Lista de clases de Tailwind que se le aplican al componente',
      control: 'text',
    },
    name: {
      control: 'text',
    },
  },
};

type Story = StoryObj<typeof PixelIcons>;
export const Unique: Story = {
  args: {
    className: 'w-10 h-10',
    name: 'home',
  },
};
export default meta;
