import { useAbsoluteContext } from "../../context/Absolute";
import { FcGallery } from "react-icons/fc";

import ReactPlayer from "react-player";
import type { BaseReactPlayerProps } from "react-player/base";

interface VideoProps extends BaseReactPlayerProps {
  containStyle: string;
  videoStyle: string;
  title: string;
  content: JSX.Element | JSX.Element[];
}
const VidAbs: React.FC<VideoProps> = ({
  containStyle = "",
  videoStyle = "",
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
  props.playing = props.playing ? props.playing : true;

  return (
    <div
      className={`bg-back ${containStyle} relative flex justify-center my-2`}
    >
      <button
        data-theme="dark"
        className="absolute z-10 top-0 left-0 text-neutral-content flex bg-primary p-1"
        onClick={() =>
          change({
            title,
            open: true,
            content: (
              <>
                <div className="flex flex-col bg-back w-full items-center p-2 mb-2 overflow-hidden">
                  <ReactPlayer
                    controls={true}
                    url={props.url}
                    style={{
                      display: "block",
                      objectFit: "cover",
                      height: "min",
                      maxWidth: "80vw",
                    }}
                  />
                </div>
                <p className="text-lg md:text-xl lg:text-1.5xl xl:text-2xl">
                  {content}
                </p>
              </>
            ),
          })
        }
      >
        <FcGallery className="min-w-[1.25rem] min-h-[1.25rem] md:min-w-[1.50rem] md:min-h-[1.50rem] lg:min-w-[1.75rem] lg:min-h-[1.75rem] bg-transparent" />
      </button>
      <div
        className={`${
          videoStyle ? videoStyle : "w-full sm:w-[75%] md:w-[65%] lg:w-[60%]"
        } relative pt-[60%] sm:pt-[40%] md:pt-[38%] flex justify-center items-center`}
      >
        <ReactPlayer
          className="absolute top-0 left-0 w-1/2 h-1/2"
          width={"100%"}
          height={"100%"}
          {...props}
        />
      </div>
    </div>
  );
};

export default VidAbs;
