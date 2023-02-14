import { Icons } from "../global/Icons";
import { useAbsoluteContext } from "../../context/Absolute";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containStyle: string;
  title: string;
  content: JSX.Element | JSX.Element[];
}

const ImgAbs: React.FC<ImageProps> = ({
  containStyle = "",
  title = "Yuru Camp - Capibaras kawais",
  content = (
    <>
      Una adorable imagen de las protagonistas en forma de capibaras después de
      ver a estos animales, salido del capítulo 13 de la temporada 2.{" "}
      <a
        className="link link-secondary"
        href="https://www.animenewsnetwork.com/thumbnails/crop1200x630gHP/cms/episode-review.3/171424/ss-2021-04-02-11_01_53.jpg"
      >
        Link de la imagen
      </a>
    </>
  ),
  ...props
}) => {
  props.src = props.src
    ? props.src
    : "https://www.animenewsnetwork.com/thumbnails/crop1200x630gHP/cms/episode-review.3/171424/ss-2021-04-02-11_01_53.jpg";
  props.className = props.className ? `${props.className} object-cover block h-full` : "object-cover block h-full max-w-[61%]";
  const { change } = useAbsoluteContext();
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
                <div className="flex flex-col bg-back w-full items-center p-2 mb-2 max-h-[90%] overflow-hidden">
                  <picture className="flex justify-center items-center w-full object-cover max-h-full">
                    <img {...props} alt={props.alt}/>
                  </picture>
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
      <picture className="flex justify-center items-center w-full h-full p-2">
        <img {...props} alt={props.alt} />
      </picture>
    </div>
  );
};

export default ImgAbs;
