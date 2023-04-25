import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

export function Ltx({
  txt,
  block = false,
  containStyle,
}: {
  txt: string;
  block: boolean;
  containStyle: string;
}) {
  if (block) {
    return (
      <span className={`${containStyle} w-full p-0.5 bg-neutral/5 block`}>
        <Latex>{`$${txt}$`}</Latex>
      </span>
    );
  }
  return <Latex>{`$${txt}$`}</Latex>;
}

const all = { Ltx };
export default all;
