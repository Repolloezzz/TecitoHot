import type { Meta, StoryObj } from '@storybook/react';
import { PresentCard } from './Card';

const meta: Meta<typeof PresentCard> = {
  title: 'Home/PresentCard',
  component: PresentCard,
  tags: ['autodocs'],
  argTypes: {
    className: {
      description: 'Clases CSS',
      type: { name: 'string', required: false },
    },
    base: {
      description:
        'Base de la tarjeta, un objeto con propiedades necesarias para representar el componente. Los tipos son Matter o Theme que se especifican en los tipos de datos de /data/DataTypes',
    },
    theme: {
      description:
        'Switch para cambiar el comportamiento del componente. Segun los tipos de datos de /data/DataTypes',
      type: { name: 'boolean', required: false },
    },
  },
};

export default meta;

export const Default: StoryObj<typeof PresentCard> = {
  args: {
    base: {
      name: 'Hola mundo',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      img: 'https://picsum.photos/200/300',
      url: 'https://www.google.com',
    },
  },
};

export const WithTheme: StoryObj<typeof PresentCard> = {
    args: {
        base: {
            name: 'Hola Matter',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            img: 'https://picsum.photos/200/300',
            url: 'https://www.google.com',
            themes: []
        }
    }
}

export const WithSubThemes: StoryObj<typeof PresentCard> = {
    args: {
        base: {
            name: 'Hola Theme',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            img: 'https://picsum.photos/200/300',
            url: 'https://www.google.com',
            subThemes :[]
        }
    }
}