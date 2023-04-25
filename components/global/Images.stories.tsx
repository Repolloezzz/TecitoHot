import type { Meta, StoryObj } from '@storybook/react';
import ImgAbs from './Image';

const meta: Meta<typeof ImgAbs> = {
  title: 'Global/Image',
  component: ImgAbs,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'Titulo de la imagen',
    },
    containStyle: {
      description: 'Estilo del contenedor de la imagen',
    },
    content: {
      description:
        'Contenido de la ventana absoluta de la imagen, la misma es un elementos JSX',
    },
    src: {
      description: 'URL de la imagen',
      defaultValue: 'https://pbs.twimg.com/media/E9VuA4FXoAUTkSZ.jpg:large',
      type: { name: 'string', required: true },
    },
  },
  parameters: {
    src: {
      values: [
        { image: 'https://pbs.twimg.com/media/E9VuA4FXoAUTkSZ.jpg:large' },
        { error: '/imgNotFound.webp' },
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof ImgAbs>;
export const Custom: Story = {
  args: {
    title: 'Esto es una imagen',
    containStyle: 'bg-yellow-500',
    src: 'https://pbs.twimg.com/media/E9VuA4FXoAUTkSZ.jpg:large',
    content: <p>Contenido de la imagen</p>,
  },
};

import imgnotfound from '../../public/imgNotFound.webp';

export const Error: Story = {
  args: {
    title: 'Esto es una imagen de error',
    containStyle: '',
    src: imgnotfound.src,
    content: <p>Contenido de la imagen</p>,
  },
  tags: ['error'],
};
