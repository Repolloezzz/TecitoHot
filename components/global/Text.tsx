// Texto que hace referencia a un ID

interface context extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
}

// Componente que se verá como: # TituloPersonalizadoID
export const ID_txt = ({ ...props }: context) => {
  return (
    <div
      {...props}
      className={`${
        props.className ?? 'text-4xl md:text-5xl lg:text-6xl font-vt323'
      } flex items-center group link link-primary font-semibold no-underline`}
    >
      <a
        href={`#${props.id}`}
        className="select-none opacity-0 group-hover:opacity-100 hover:underline font-light"
      >
        #
      </a>
      <span>{props.children}</span>
    </div>
  );
};
