import { TitleShake } from "./TitleAnimation";
import { Icons } from "./Icons";

interface props {
  className?: string;
}
export function HeroSection({ className }: props) {
  return (
    <section className={`${className} flex flex-col items-center md:justify-center`}>
      <h1 className="flex mb-10 gap-0.5 md:gap-1 lg:gap2 xl:gap-3 text-9xl mt-32 md:mt-0">
        <TitleShake
          content="TeCitoHot"
          colors={[
            "bg-red-500 hover:text-red-500 hover:bg-slate-100",
            "bg-yellow-400 hover:text-yellow-400 hover:bg-slate-100",
            "bg-green-600 hover:bg-slate-100 hover:text-green-600",
            "bg-blue-500 hover:bg-slate-100 hover:text-blue-500",
            "bg-indigo-600 hover:bg-slate-100 hover:text-indigo-600",
            "bg-cyan-500 hover:bg-slate-100 hover:text-cyan-500",
            "bg-stone-600 hover:bg-slate-100 hover:text-stone-600",
            "bg-pink-500 hover:bg-slate-100 hover:text-pink-500",
            "bg-slate-600 hover:bg-slate-100 hover:text-slate-600",
          ]}
          className="text-7xl sm:text-8xl md:text-[9rem] drop-shadow-[0px_5px_0px_rgba(0,0,0,1)] lg:drop-shadow-[0px_10px_0px_rgba(0,0,0,1)] bg lg:text-[10rem] xl:text-[11rem] font-extrabold text-slate-100"
        />
      </h1>
      <p className="w-full lg:w-[60%] md:w-[80%] xl:w-[50%] md:text-xl text-slate-300 bg-slate-700/40 p-2 text-base lg:text-1.5xl bg xl:text-2xl text-center">
        Un buen tecito te prepara para poder empezar a estudiar, pero si creo es
        mejor el café xd para una despertada y ya si quiere le metes tus hojas
        de coca.
      </p>
      <div
        className={`w-3/4 lg:w-full justify-center gap-1 md:gap-5 flex mt-10 flex-col md:flex-row`}
      >
        <button className="p-2 flex justify-center items-center lg:text-2xl xl:text-3xl bg-slate-200 md:min-w-[10rem] lg:min-w-[13rem] border-b-4 border-slate-800 border-l-2 hover:border-r-2 hover:border-l-0 gap-5 transition-all hover:bg-slate-400 hover:border-t-4 hover:border-b-0">
          <Icons
            name="message-text"
            className="w-5 h-5 bg-blue-600 lg:absolute xl:w-8 xl:h-8 lg:-translate-y-8 xl:-translate-y-11 text-slate-100"
          />
          <p>Por qué TeCitoHot?</p>
        </button>
        <button className="p-2 md:min-w-[10rem] flex group justify-center gap-5 items-center xl:text-5xl lg:text-4xl bg-slate-200 lg:min-w-[15em] border-b-4 border-slate-800 border-l-2 hover:border-r-2 hover:border-l-0 transition-all hover:bg-slate-400 hover:border-t-4 hover:border-b-0">
          <Icons
            name="search"
            className="w-5 h-5 xl:w-8 xl:h-8 group-hover:text-slate-400 text-slate-50 bg-slate-800"
          />
          <p>Buscar</p>
        </button>
        <button className="p-2 md:min-w-[10rem] flex justify-center items-center xl:text-3xl lg:text-2xl bg-slate-200 lg:min-w-[13rem] border-b-4 border-slate-800 border-l-2 hover:border-r-2 hover:border-l-0 gap-5 transition-all hover:bg-slate-400 hover:border-t-4 hover:border-b-0">
          <Icons
            name="mood-happy"
            className="w-5 h-5 bg-yellow-400 lg:absolute xl:w-8 xl:h-8 lg:-translate-y-7 xl:-translate-y-11 text-slate-700"
          />
          <p>Tema Random</p>
        </button>
      </div>
    </section>
  );
}
