import { useAbsoluteContext } from "../../context/Absolute";
import { Icons } from "../global/Icons";
import ReactPlayer from "react-player";
import type { BaseReactPlayerProps } from "react-player/base";

interface VideoProps extends BaseReactPlayerProps {
  containStyle: string;
  title: string;
  content: JSX.Element | JSX.Element[];
}
const VidAbs: React.FC<VideoProps> = ({
  containStyle = "",
  title = "1 hour of Studio Ghibli | Relaxing Piano Music (relax, study, sleep) by Vagabond",
  content = (
    <>
      Una playlist de canciones del estudio Ghibli, este video es de prueba{" "}
      <a
        className="link link-secondary"
        href="https://www.youtube.com/watch?v=bHFKkCcUjW0"
      >
        Link del video
      </a>
    </>
  ),
  ...props
}) => {
  props.url = props.url
    ? props.url
    : "https://www.youtube.com/watch?v=bHFKkCcUjW0";
  const { change } = useAbsoluteContext();
  props.playing = props.playing ? props.playing : true

  return (
    <div
      className={`bg-back ${containStyle} relative flex justify-center my-2`}
    >
      <button
        className="absolute top-0 left-0 bg-neutral text-neutral-content flex md:p-1 hover:gap-2 group border-r-2 border-b-2 border-primary"
        onClick={() =>
          change({
            title,
            open: true,
            content: (
              <>
                <div className="flex flex-col bg-back w-full items-center p-2 mb-2 overflow-hidden">
                  <ReactPlayer controls={true} url={props.url} style={{display: 'block', objectFit: 'cover', height: 'min', maxWidth: '80vw'}}/>
                </div>
                <p className="text-lg">{content}</p>
              </>
            ),
          })
        }
      >
        <Icons
          name="external-link"
          className="min-w-[1.25rem] min-h-[1.25rem] md:min-w-[1.50rem] md:min-h-[1.50rem] lg:min-w-[1.75rem] lg:min-h-[1.75rem]"
        />
        <span className="hidden group-hover:block">Ver más</span>
      </button>
      <div className="p-2">
        <ReactPlayer style={{display: 'block', objectFit: 'cover', height: 'min', maxWidth: '80vw'}} {...props}/>
      </div>
    </div>
  );
};

export default VidAbs;
