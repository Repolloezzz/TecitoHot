import { PixelIcons } from '../global/Icons';
import { LComment } from './Comments';
import { useState } from 'react';
import { Ref } from './General';
import {
  useThemeContext,
  DarkOptions,
  LightOptions,
} from '../../context/ThemeContent';

export function BImp({
  title = 'hola mundo',
  comment,
  color,
  icon = 'file',
  id,
  children = <></>,
}: {
  title: string;
  comment?: string;
  children?: any;
  color?: string;
  icon?: string;
  id?: string;
}) {
  let style: {
    icon: string | null;
    bg: string | null;
    text: string | null;
    border: string | null;
  } = { icon: null, bg: null, text: null, border: null };
  switch (color) {
    case 'red':
      style.icon = 'bg-red-300/70';
      style.bg = 'bg-red-600';
      style.text = 'text-red-800';
      style.border = 'border-red-500';
      break;
    case 'orange':
      style.icon = 'bg-orange-300/70';
      style.bg = 'bg-orange-600';
      style.text = 'text-orange-800';
      style.border = 'border-orange-500';
      break;
    case 'green':
      style.icon = 'bg-lime-300/70';
      style.bg = 'bg-lime-600';
      style.text = 'text-lime-800';
      style.border = 'border-green-500';
      break;
    case 'pink':
      style.icon = 'bg-red-300/70';
      style.bg = 'bg-pink-600';
      style.text = 'text-pink-800';
      style.border = 'border-pink-500';
      break;
    case 'blue':
      style.icon = 'bg-sky-300/70';
      style.bg = 'bg-sky-600';
      style.text = 'text-sky-800';
      style.border = 'border-sky-500';
      break;
    case 'purple':
      style.icon = 'bg-violet-300/70';
      style.bg = 'bg-violet-600';
      style.text = 'text-violet-800';
      style.border = 'border-violet-500';
      break;
    default:
      style.icon = 'bg-slate-300/70';
      style.bg = 'bg-neutral/30';
      style.text = 'text-neutral-content';
      style.border = 'border-slate-300';
      break;
  }
  const { themeContent } = useThemeContext();

  return (
    <>
      <Ref id={id ? id : '#'} />
      <div
        className={`${style.bg} ${
          style.border
        } w-full group p-1 lg:p-3 border-l-4 list-none ${
          themeContent.is ? 'bg-opacity-50' : 'bg-opacity-100'
        } my-2`}
      >
        <h1
          className={`${style.text} text-start text-2xl lg:text-3xl font-semibold flex gap-1 md:gap-2 items-center`}
        >
          <PixelIcons
            name={`${icon ? icon : 'align-justify'}`}
            className={`group-hover:scale-125 group-hover:-translate-y-1 transition-all lg:min-w-[2rem] min-w-[1.25rem] min-h-[1.25rem] lg:min-h-[2rem] ${style.text} ${style.bg}`}
          />
          <p
            className={`${
              themeContent.is ? '' : 'grayscale brightness-[1000%]'
            }`}
          >
            {title}
          </p>
        </h1>
        <div className={`pr-3 pl-5 lg:px-8 text-base-content`}>
          {comment ? <LComment>{comment}</LComment> : null}
          <div className="text-justify md:text-lg lg:text-xl">{children}</div>
        </div>
      </div>
    </>
  );
}

interface Section {
  name: string;
  section: JSX.Element;
}

export function BSect({ data, className = '' }: any) {
  const [page, setPage] = useState(0);
  const { themeContent } = useThemeContext();
  return (
    <div
      data-theme={`${themeContent.is ? LightOptions[4] : DarkOptions[1]}`}
      className={`${className} my-2 bg-base-200 overflow-hidden rounded-t-lg`}
    >
      <div className="w-full flex overflow-hidden bg-primary">
        {data.map((element: Section, index: number) => {
          return (
            <button
              onClick={() => {
                setPage(index);
              }}
              className={`w-full p-0.5 md:p-2 tab tab-lifted text-xs md:text-lg lg:text-lg transition-all ${
                index == page
                  ? 'tab-active text-base-content'
                  : 'text-secondary-content'
              }`}
              key={index}
            >
              {element.name}
            </button>
          );
        })}
      </div>
      {data.map((e: any, index: number) => {
        return (
          <div
            key={index}
            className={`${
              page == index ? 'block' : 'hidden'
            } relative overflow-hidden p-0.5 md:p-3 lg:p-5`}
          >
            {e.section}
          </div>
        );
      })}
    </div>
  );
}

export function BChord({
  title = 'Hola mundo',
  style,
  children = <></>,
  open = false,
  color,
  top = false,
  bottom = false,
}: {
  title?: string;
  style?: { bg: string; border: string; bgContent: string };
  children?: JSX.Element | JSX.Element[];
  open?: boolean;
  className?: string;
  color?: string;
  top?: boolean;
  bottom?: boolean;
}) {
  function getColor(opt = 'default') {
    return {
      bg: {
        blue: 'bg-info text-info-content',
        green: 'bg-success text-success-content',
        yellow: 'bg-warning text-warning-content',
        red: 'bg-error text-error-content',
        default: 'bg-neutral text-neutral-content',
      }[opt],
      border: {
        blue: 'border-blue-600',
        green: 'border-green-600',
        yellow: 'border-yellow-600',
        red: 'border-red-600',
        default: 'border-neutral',
      }[opt],
      bgContent: {
        blue: 'bg-blue-500/10',
        green: 'bg-green-500/10',
        yellow: 'bg-yellow-500/10',
        red: 'bg-red-500/10',
        default: 'bg-neutral/10',
      }[opt],
    };
  }
  const [state, setOpen] = useState(open);
  const { themeContent } = useThemeContext();
  const styleBox = style ? style : getColor(color);
  return (
    <div
      data-theme={`${themeContent.is ? LightOptions[4] : DarkOptions[4]}`}
      className={`border-l-4 group overflow-hidden ${top ? 'mt-3' : ''} ${
        bottom ? 'mb-3' : ''
      } ${styleBox.border}`}
    >
      <h1
        onClick={() => {
          setOpen(!state);
        }}
        className={`w-full flex gap-3 md:gap-4 p-1.5 md:p-2 lg:p-3 rounded-none lg:gap-5 justify-start items-center cursor-pointer md:text-2xl transition-all shadow-md ${styleBox.bg}`}
      >
        <PixelIcons
          name="add-box"
          className={`min-w-[1.5rem] min-h-[1.5rem] group-hover:scale-125 transition-all md:min-w-[1.75rem] md:min-h-[1.75rem] lg:min-h-[2rem] lg:min-w-[2rem] ${
            state ? 'rotate-45' : ''
          }`}
        />
        <p>{title}</p>
      </h1>
      <div
        className={`${
          state ? 'h-max py-3' : 'h-0 py-0'
        } overflow-hidden px-2 md:px-4 lg:px-5 xl:px-6 text-start text-sm md:text-lg transition-all ${
          styleBox.bgContent
        }`}
      >
        {state ? children : null}
      </div>
    </div>
  );
}

export function Balph({
  children,
  color,
}: {
  children: JSX.Element | JSX.Element[];
  className?: string;
  color?: string;
}) {
  let bg;
  switch (color) {
    case 'red':
      bg = 'bg-red-400/5';
    case 'yellow':
      bg = 'bg-yellow-400/5';
    case 'green':
      bg = 'bg-lime-400/5';
    case 'blue':
      bg = 'bg-sky-400/5';
    case 'pink':
      bg = 'bg-pink-400/5';
    case 'purple':
      bg = 'bg-purple-400/10';
    default:
      bg = 'bg-neutral/5';
  }
  return (
    <>
      <span className={`my-1 ${bg} block p-1.5`}>{children}</span>
    </>
  );
}

const all = { BChord, BImp, BSect, Balph };
export default all;
