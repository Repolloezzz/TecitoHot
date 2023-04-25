import colors from 'tailwindcss/colors';

export const getColor = (prefix: string, color: string, opacity: number) => {
    const clases = Object.entries(colors);
    const res = clases.find(([key, value]) => key === color);
    if (res) {
      const opacitys = Object.entries(res[1]);
      const opacityValue = opacitys.find(([key, value]) => key === `${opacity * 100}`)?.[1];
      if (opacityValue) {
        return `${prefix}-${color}-${opacity * 100}`;
      }
    }
    return null;
  };