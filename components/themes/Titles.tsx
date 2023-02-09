export function Title({
  txt,
  date = new Date(),
  author = { link: "https://github.com/Repolloezzz", name: "RepolloEzzz" },
  className,
}: {
  txt: string;
  date: Date;
  author?: { link: string; name: string };
  className?: string;
}) {
  return (
    <>
      <div className="relative flex-col flex justify-center w-full overflow-hidden h-max bg-red group">
        <h1
          className={`w-full text-start px-0.5 py-2 group-hover:text-slate-200 transition-all text-3xl md:text-4xl xl:text-6xl flex z-10 break-normal font-extrabold leading-6 ${
            className ? className : ""
          }`}
        >
          {txt}
        </h1>
        <span className="absolute w-0 h-full transition-all group-hover:w-full bg-slate-700" />
      </div>
      <span className="flex flex-col md:flex-row md:gap-5 font-vt323 p-2 bg-slate-500/20">
        <p className="flex items-center gap-2">
          <b>Create:</b> {date.toDateString()}
        </p>
        <p className="flex items-center gap-2">
          <b>Author:</b>{" "}
          <a className="bg-slate-800 inline-block hover:bg-slate-600 transition-all hover:scale-105 text-white p-1 md:p-2" href={author.link}>
            @{author.name}
          </a>
        </p>
      </span>
    </>
  );
}
export function SubTitle({
  txt,
  className,
}: {
  txt: string;
  className?: string;
}) {
  return (
    <div className="relative flex items-center justify-end my-3 overflow-hidden lg:my-5 hover:justify-start w-max bg-red group">
      <h2
        className={`w-max text-start underline group-hover:text-slate-200 transition-all text-1.5xl md:text-4xl xl:text-4xl flex z-10 break-normal font-extrabold leading-5 ${
          className ? className : ""
        }`}
      >
        {txt}
      </h2>
      <span className="absolute w-0 h-full transition-all group-hover:w-full bg-slate-700" />
    </div>
  );
}
