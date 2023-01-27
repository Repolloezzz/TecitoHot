export function Title({ txt, className }: { txt: string; className?: string }) {
  return (
    <div className="relative flex items-center w-full mb-5 overflow-hidden h-max bg-red group">
      <h1
        className={`w-full text-start group-hover:text-slate-200 transition-all text-3xl md:text-4xl xl:text-6xl flex z-10 break-normal font-sharemono font-extrabold leading-6 ${
          className ? className : ""
        }`}
      >
        {txt}
      </h1>
      <span className="absolute w-0 h-full transition-all group-hover:w-full bg-slate-700" />
    </div>
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
        className={`w-max text-start underline group-hover:text-slate-200 transition-all text-1.5xl md:text-4xl xl:text-4xl flex z-10 break-normal font-sharemono font-extrabold leading-5 ${
          className ? className : ""
        }`}
      >
        {txt}
      </h2>
      <span className="absolute w-0 h-full transition-all group-hover:w-full bg-slate-700" />
    </div>
  );
}
