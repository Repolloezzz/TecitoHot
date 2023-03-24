import moment from 'moment';
import { PixelIcons } from '../global/Icons';
import type { Content } from '@/data/DataTypes';

interface HeadTitleContext {
  content: Content;
  author?: { name: string; link: string };
}
export const HeadTitle = ({
  content,
  author = { name: '@RepolloEzzz', link: 'https://github.com/Repolloezzz' },
}: HeadTitleContext) => {
  const created = moment(content.created, 'DD-MM-YYYY');
  const updated = moment(
    content.updated ? content.updated : content.created,
    'DD-MM-YYYY'
  );
  let msgCreated: string, msgUpdated: string;
  if (created.isValid()) {
    msgCreated = created.format('LL');
    msgUpdated = updated.format('LL');
  } else {
    msgCreated = 'Desconocido';
    msgUpdated = 'Desconocido';
  }

  return (
    <div className="font-vt323 mb-2 md:mb-4 lg:mb-6">
      <h1 className="font-bold text-3xl text-start break-normal leading-5 md:text-4xl lg:text-6xl mb-2 group">
        <span className="border-2 transition-all border-back inline-flex mx-2 items-center justify-center group-hover:scale-125 group-hover:rotate-6 w-8 h-8 lg:w-12 lg:h-12">
          {content.index}
        </span>
        {content.name}
      </h1>
      <div className="flex flex-col xl:flex-row leading-4 gap-1 xl:gap-10 text-lg lg:text-2xl bg-base-300 p-2">
        <span className="flex items-center gap-2 font-bold">
          <span>Creación:</span>
          <span className="font-dotgot text-sm lg:text-xl">{msgCreated}</span>
        </span>
        <span className="flex items-center gap-2 font-bold">
          <span>Modificación:</span>
          <span className="font-dotgot text-sm lg:text-xl">{msgUpdated}</span>
        </span>
        <span className="flex items-center gap-2">
          <span className="font-bold">Autor:</span>
          <a
            href={author.link}
            className="link link-success text-base p-0 md:text-2xl leading-4 bg-slate-600 px-2"
          >
            {author.name}
          </a>
        </span>
      </div>
      <p className="p-2 leading-5">{content.description}</p>
    </div>
  );
};

export const TitleSection = ({ txt, nr }: { txt: string; nr: number }) => {
  return (
    <h1 className="flex gap-2 text-2xl md:text-4xl lg:text-5xl items-center font-vt323 text-base-content link hover:link-primary">
      {nr ? (
        <span className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-xl md:text-2xl text-neutral-content lg:text-3xl bg-slate-600 flex items-center justify-center">
          {nr}
        </span>
      ) : (
        <PixelIcons name="circle" />
      )}
      <span>{txt}</span>
    </h1>
  );
};

const all = { HeadTitle, TitleSection };
export default all;
