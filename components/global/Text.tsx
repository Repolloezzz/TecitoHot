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
        props.className ?? 'text-2xl md:text-3xl lg:text-5xl font-vt323'
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
