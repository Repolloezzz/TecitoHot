import { useAbsoluteContext } from "../../context/Absolute";
import { PixelIcons } from "../global/Icons";
const Ventage = () => {
  const { change, context } = useAbsoluteContext();
  return (
    <>
      <section
        className={`fixed transition-all origin-center z-40 top-0 pt-20 pb-16 right-0 overflow-hidden bg-neutral/70 h-screen flex justify-center items-center ${
          context.open
            ? "w-full px-2 md:px-5 lg:px-24 xl:px-32"
            : "w-0 duration-[400ms]"
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
          <h1 className="flex bg-neutral p-2 h-[8%] font-bold text-xl md:text-1.5xl lg:text-2xl xl:text-3xl">
            <p className="mx-auto">{context.title}</p>
            <button
              onClick={() =>
                change({
                  title: "hola mundo",
                  open: false,
                  content: <div></div>,
                })
              }
            >
              <PixelIcons name="close" className="w-8 h-8 bg-red-500 block" />
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
