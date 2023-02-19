export function Ref({ id }: { id: string }) {
  return <span id={id} className="relative -top-20 lg:-top-32" />;
}
export function Sep() {
  return <div className="divider" />;
}

export function Lnk({ url = "#", txt = "link" }: { url: string; txt: string }) {
  return (
    <a className="link link-secondary" href={url}>
      {txt}
    </a>
  );
}
export function List({ items, type, className='' }: { items: JSX.Element[]; type?: string, className?: string }) {
  return (
    <ol className={`${className} my-1`}>
      {items.map((item, i) => {
        return (
          <li key={i} className="flex items-center gap-3">
            <span className="select-none">{type ? null : `${i + 1}.`}</span>
            <span>{item}</span>
          </li>
        );
      })}
    </ol>
  );
}

const all = { Ref, Sep, Lnk, List };
export default all;
