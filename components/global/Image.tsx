import { useAbsoluteContext } from '../../context/Absolute';
import { FcGallery } from 'react-icons/fc';
import { imgNotFound } from '../../data/routes';

/**
 * @prop containStyle : clases CSS para el contenedor de la imagen
 * @prop title        : titulo de la imagen
 * @prop content      : contenido de la imagen
 * @return Imagen con un boton para mostrarla en grande
 * ! Si sucede un error -> retorna una imagen de error
 */
interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containStyle?: string;
  title: string;
  content?: JSX.Element | JSX.Element[] | null;
}

/**
 * Una imagen que usa el contexto de Absolute para mostrar una imagen en grande.
 * Por otro lado, el componente se extiende a los atributos y funciones de
 * una imagen HTML
 */
const ImgAbs = ({
  containStyle,
  title = 'TeCitoHot',
  content = null,
  ...props
}: ImageProps) => {
  const notFound = imgNotFound;
  props.src = props.src ?? notFound;
  const styleImage = `${
    props.className ?? 'object-cover block h-full max-w-[61%]'
  }`;
  const { change } = useAbsoluteContext();
  return (
    <div
      className={`bg-back ${containStyle} relative flex justify-center my-2`}
    >
      <button
        data-theme="dark"
        className="absolute top-0 left-0 bg-primary text-neutral-content flex p-1"
        onClick={(e) => {
          console.log('Hola');
          change({
            title,
            open: true,
            content: (
              <>
                <div className="flex flex-col bg-back w-full items-center p-2 mb-2 h-[65%] overflow-hidden">
                  <picture className="flex justify-center items-center w-full object-cover h-full">
                    <img
                      {...props}
                      alt={props.alt}
                      className={`${
                        props.className ?? ''
                      } ${styleImage} w-full h-full object-contain`}
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = notFound;
                      }}
                    />
                  </picture>
                </div>
                <p className="text-lg md:text-xl lg:text-1.5xl xl:text-2xl">
                  {content}
                </p>
              </>
            ),
          });
        }}
      >
        <FcGallery className="min-w-[1.25rem] min-h-[1.25rem] md:min-w-[1.50rem] md:min-h-[1.50rem] lg:min-w-[1.75rem] lg:min-h-[1.75rem]" />
      </button>
      <picture className="flex justify-center items-center w-full max-h-[25rem] p-2">
        <img
          {...props}
          alt={props.alt}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = notFound;
          }}
          className={`${props.className ?? ''} ${styleImage} max-h-[25rem]`}
        />
      </picture>
    </div>
  );
};

export default ImgAbs;
