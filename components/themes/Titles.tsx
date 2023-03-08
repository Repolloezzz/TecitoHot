import moment from "moment";
import { PixelIcons } from "../global/Icons";

interface HeadTitleContext {
  title: string;
  created: string;
  finished: string;
  author: { name: string; link: string };
}
export const HeadTitle = ({
  title,
  created = "1-1-0",
  finished,
  author = { name: "@RepolloEzzz", link: "https://github.com/Repolloezzz" },
}: HeadTitleContext) => {
  const data1 = moment(created, "DD-MM-YYYY").format("LL");
  const data2 = moment(finished ? finished : created, "DD-MM-YYYY").format("LL");

  return (
    <div className="font-vt323">
      <h1 className="font-bold text-3xl text-start break-normal leading-5 md:text-4xl lg:text-6xl">
        {title}
      </h1>
      <div className="flex flex-col xl:flex-row leading-4 xl:gap-10 text-lg lg:text-2xl bg-base-300 p-1 md:p-2">
        <span className="flex items-center gap-2 font-bold">
          <span>Creación:</span>
          <span className="font-dotgot text-sm lg:text-xl">
            {data1.toString()}
          </span>
        </span>
        <span className="flex items-center gap-2 font-bold">
          <span>Modificación:</span>
          <span className="font-dotgot text-sm lg:text-xl">
            {data2.toString()}
          </span>
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
