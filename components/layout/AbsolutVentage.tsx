import { useAbsoluteContext } from "../../context/Absolute";
import { Icons } from "../global/Icons";
const Ventage = () => {
  const { change, context } = useAbsoluteContext();
  return (
    <>
      <section
        className={`fixed transition-all origin-center z-40 top-0 pt-20 pb-10 right-0 overflow-hidden bg-neutral/70 h-screen flex ${
          context.open ? "w-full px-2 lg:px-20" : "w-0 duration-[400ms]"
        }`}
      >
        <div
          className={`${
            context.open
              ? setTimeout(() => {
                  return "scale-100 ";
                }, 1000)
              : "scale-0"
          } relative w-full h-full mockup-window bg-base-300 transition-all duration-300 `}
        >
          <h1 className="flex bg-neutral p-2 h-[8%] font-bold text-xl">
            <p className="text-xl mx-auto">{context.title}</p>
            <button
              onClick={() => change({ title: 'hola mundo', open: false, content: (<div></div>) })}
            >
              <Icons name="close" className="w-8 h-8 bg-red-500" />
            </button>
          </h1>
          <div className="p-5 overflow-y-auto overflow-x-hidden relative h-[90%] bg-base-200 scrollbar-thin scrollbar-w-1 scrollbar-thumb-stone-600 scrollbar-track-stone-800 md:scrollbar-w-2">
            {context.content}
          </div>
        </div>
      </section>
    </>
  );
};
export default Ventage;
