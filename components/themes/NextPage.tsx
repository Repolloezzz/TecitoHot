import type { SubTheme, Content } from '@/data/DataTypes';
import { Sep } from './General';
import Link from 'next/link';
import { PixelIcons } from '../global/Icons';
export const NextPage = ({
  options,
  gen,
  type = false,
  content = [],
}: {
  options: SubTheme[];
  gen: string;
  type?: boolean;
  content: Content[];
}) => {
  const index: number = options.findIndex((opt) => opt.gen === gen) || 0;
  const buttons = { left: false, right: false };
  if (index < options.length - 1) {
    buttons.right = true;
  }
  if (index > 0) {
    buttons.left = true;
  }

  function buttonOpt(direction: boolean, text: string) {
    const iconRight = !direction ? (
      <PixelIcons
        name="chevron-right"
        className="min-w-[1.2rem] min-h-[1.2rem] md:min-w-[2rem] md:min-h-[2rem] lg:min-w-[3rem] lg:min-h-[3rem]"
      />
    ) : null;
    const iconLeft = direction ? (
      <PixelIcons
        name="chevron-left"
        className="min-w-[1.2rem] min-h-[1.2rem] md:min-w-[2rem] md:min-h-[2rem] lg:min-w-[3rem] lg:min-h-[3rem]"
      />
    ) : null;
    return (
      <>
        {iconLeft}
        <span className="flex flex-col">
          <span className="opacity-50 text-sm">
            {direction ? 'Prev' : 'Next'}
          </span>
          <span className="text-lg">{text}</span>
        </span>
        {iconRight}
      </>
    );
  }

  return (
    <>
      <Sep />
      <div className="w-full flex flex-col md:flex-row items-center font-vt323 justify-around">
        <div className="w-full flex">
          {buttons.left ? (
            <Link
              href={options[index - 1].url}
              className="flex justify-start gap-2 btn rounded-none min-w-[70%]"
            >
              {buttonOpt(true, options[index - 1].name)}
            </Link>
          ) : (
            <button
              className="flex btn gap-2 justify-start rounded-none min-w-[70%]"
              disabled
            >
              {buttonOpt(true, 'None')}
            </button>
          )}
        </div>
        <div className="w-full flex justify-end">
          {buttons.right ? (
            <Link
              href={options[index + 1].url}
              className="flex justify-end gap-2 btn rounded-none min-w-[70%]"
            >
              {buttonOpt(false, options[index + 1].name)}
            </Link>
          ) : (
            <button
              className="flex btn gap-2 justify-end rounded-none min-w-[70%]"
              disabled
            >
              {buttonOpt(false, 'None')}
            </button>
          )}
        </div>
      </div>
    </>
  );
};
