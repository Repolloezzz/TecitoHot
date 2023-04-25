import type { Meta, StoryObj } from '@storybook/react';
import VidAbs from './Video';

const meta: Meta<typeof VidAbs> = {
  title: 'Global/Video',
  component: VidAbs,
  tags: ['autodocs'],
  argTypes: {
    containStyle: {
      description: 'Estilo del contenedor del video',
    },
    videoStyle: {
      description: 'Estilo del video',
    },
    title: {
      description: 'Título del video',
    },
    content: {
      description: 'Contenido del video siendo un JSX',
    },
    url: {
        description: 'URL del video',
    }
  },
};

export default meta;

type Story = StoryObj<typeof VidAbs>;
export const Custom: Story = {
    args: {
        containStyle: '',
        videoStyle: '',
        url: 'https://www.youtube.com/watch?v=bHFKkCcUjW0',
        title: 'Titulo Personalizado',
        content: null,
    }
}