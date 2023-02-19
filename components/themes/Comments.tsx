import { PixelIcons } from "../global/Icons";
import {
  useThemeContext,
  DarkOptions,
  LightOptions,
} from "../../context/ThemeContent";
export function LComment({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <span
      className={`${
        className ? className : ""
      } text-start text-base-content/80 flex items-center gap-1`}
    >
      <PixelIcons
        name="info-box"
        className="min-w-[1.25rem] min-h-[1.25rem] text-base-content"
      />
      <span className="break-all leading-5 text-sm md:text-base">
        {children}
      </span>
    </span>
  );
}

export function BComment({
  type,
  children,
}: {
  type: string;
  children: JSX.Element[] | JSX.Element;
}) {
  let props: {
    cube: string;
    border: string;
    icon: string;
    text: string;
  };
  switch (type) {
    case "note":
      props = {
        cube: "bg-success text-success-content",
        text: "text-base-content/90",
        border: "border-success",
        icon: "invert",
      };
      break;
    case "warn":
      props = {
        cube: "bg-warning text-warning-content",
        text: "text-base-content/90",
        border: "border-warning",
        icon: "bullseye-arrow",
      };
      break;
    case "alert":
      props = {
        cube: "bg-error text-error-content",
        text: "text-base-content/90",
        border: "border-error",
        icon: "alert",
      };
      break;
    default:
      props = {
        cube: "bg-neutral text-neutral-content",
        text: "text-base-content/90",
        border: "border-neutral",
        icon: "article",
      };
      break;
  }
  const { themeContent } = useThemeContext();
  return (
    <span
      data-theme={`${themeContent.is ? LightOptions[2] : DarkOptions[1]}`}
      className={`flex overflow-hidden p-1 pr-3 group transition-all w-full gap-1 lg:gap-5 lg:p-5 py-2 my-2 lg:pr-10 border-l-4 text-slate-600 ${props.border} ${props.cube} bg-opacity-5 shadow-sm`}
    >
      <div className={`w-5 h-full`}>
        <PixelIcons
          name={props.icon}
          className={`${props.cube} group-hover:rotate-6 group-hover:scale-125 lg:w-8 h-5 w-5 lg:h-8 text-slate-700 transition-all`}
        />
      </div>
      <span
        className={`w-full text-base leading-5 text-justify lg:text-lg ${props.text}`}
      >
        {children}
      </span>
    </span>
  );
}

const all = { BComment, LComment };
export default all;
