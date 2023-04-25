import type { Meta, StoryObj } from '@storybook/react';
import { ID_txt } from './Text';

const meta: Meta<typeof ID_txt> = {
  title: 'Global/Text',
  component: ID_txt,
  tags: ['autodocs'],
  argTypes: {
    id: {
      description: 'ID del texto',
    },
    url: {
      description: 'URL del texto',
    },
    children: {
      description: 'Contenido del texto',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ID_txt>;

export const ID: Story = {
  args: {
    id: 'TituloPersonalizadoID',
    children: 'Titulo Personalizado',
  },
};

export const URL: Story = {
  args: {
    url: 'https://www.google.com',
    children: 'Titulo Personalizado',
  },
};

export const None: Story = {
  args: {
    children: 'Titulo Personalizado',
  },
};
