import { useRef } from "react";
import { PixelIcons } from "../global/Icons";
import { motion } from "framer-motion";
interface context {
  children: JSX.Element[];
}
const MCarousel = ({ children }: context) => {
  const ref = useRef<HTMLDivElement>(null);
  function toScroll(direction: string) {
    if (direction == "r") {
      ref.current?.scrollBy(50, 0);
    } else {
      ref.current?.scrollBy(-50, 0);
    }
  }
  return (
    <div className="relative">
      <button
        onClick={() => {
          toScroll("l");
        }}
        className="absolute top-0 bottom-0 -left-3 hover:scale-110 transition-all"
      >
        <PixelIcons
          name="chevron-left"
          className="w-8 h-8 text-slate-700 bg-slate-200 block"
        />
      </button>
      <motion.div
        ref={ref}
        animate={{opacity: 1}}
        style={{scrollBehavior: 'smooth'}}
        className="carousel carousel-center max-w-[16rem] lg:max-w-md xl:max-w-xl 2xl:max-w-2xl p-4 space-x-4 bg-neutral box-content transition-all"
      >
        {children}
      </motion.div>
      <button
        onClick={() => {
          toScroll("r");
        }}
        className="absolute top-0 bottom-0 -right-3 hover:scale-110 transition-all"
      >
        <PixelIcons
          name="chevron-right"
          className="w-8 h-8 text-slate-700 bg-slate-200 block"
        />
      </button>
    </div>
  );
};

export default MCarousel;
