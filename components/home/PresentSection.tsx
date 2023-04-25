import { PixelIcons } from '../global/Icons';
import { TextScale } from '../global/TextAnimation';

interface context {
  id?: string;
  theme?: string;
  className?: string;
  title: string;
  children?: JSX.Element[] | JSX.Element;
}
const Present = ({ id, theme, className, title, children }: context) => {
  return (
    <div
      id={id}
      data-theme={theme}
      className={`hero min-h-screen ${className ? className : 'bg-base-200'}`}
    >
      <div className="hero-content flex-col">
        <h1 className="text-5xl lg:text-9xl font-bold flex items-center w-full">
          <PixelIcons name="play" />
          <TextScale
            content={title}
            className="hover:bg-slate-100 hover:text-slate-800"
          />
        </h1>
        <div className="flex flex-col justify-center items-center gap-2 lg:flex-row lg:gap-5 lg:items-start">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Present;
