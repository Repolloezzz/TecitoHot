import type { Meta, StoryObj } from '@storybook/react';
import HeroSection from './HeroSection';

const meta: Meta<typeof HeroSection> = {
  title: 'Home/HeroSection',
  component: HeroSection,
  tags: ['autodocs'],
  argTypes: {
    className: {
      description: 'Clases CSS',
      type: { name: 'string', required: false },
    },
    title: {
      description: 'Titulo de la seccion',
      type: { name: 'string', required: true },
    },
    colors: {
      description: 'Colores de la letras',
    },
  },
};

export default meta;

type Story = StoryObj<typeof HeroSection>;
export const Default: Story = {
    args: {
        className: 'min-w-[50rem] min-h-[30rem]',
    }
}

export const WithTitle: Story = {
    args: {
        title: 'Hello world',
        className: 'min-w-[50rem] min-h-[30rem]',
    }
}