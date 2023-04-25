import type { Meta, StoryObj } from '@storybook/react';
import BackgroundTime from './BackgroundTime';

const meta: Meta<typeof BackgroundTime> = {
  title: 'Home/BackgroundTime',
  component: BackgroundTime,
  tags: ['autodocs'],
  argTypes: {
    type: {
      description: 'Tipo de fondo de pantalla',
    },
    className: {
      description: 'Clases CSS',
      type: { name: 'string', required: false },
    },
  },
};

export default meta;

type Story = StoryObj<typeof BackgroundTime>;
export const ByTime: Story = {
  args: {
    className: 'min-w-[50rem] min-h-[30rem]',
  },
};

export const Morning: Story = {
  args: {
    type: 'morning',
    className: 'min-w-[50rem] min-h-[30rem]',
  },
};

export const Day: Story = {
  args: {
    type: 'day',
    className: 'min-w-[50rem] min-h-[30rem]',
  },
};

export const Magic: Story = {
  args: {
    type: 'magic',
    className: 'min-w-[50rem] min-h-[30rem]',
  },
};

export const Sunset: Story = {
  args: {
    type: 'sunset',
    className: 'min-w-[50rem] min-h-[30rem]',
  },
};

export const Night: Story = {
  args: {
    type: 'night',
    className: 'min-w-[50rem] min-h-[30rem]',
  },
};
