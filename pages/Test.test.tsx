import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { useTransform } from "framer-motion";
import { useRef } from "react";

const Test = () => {
const ref = useRef(null)
const {scrollYProgress} = useScroll({
    target: ref
})

  return (
    <section ref={ref} className="min-h-screen">
      
    </section>
  );
};

export default Test;

/**
 <section className="relative flex flex-col w-full bg-red-700 overflow-hidden scroll-smooth snap-y scrollbar-thin scrollbar-w-1 md:scrollbar-w-2 lg:scrollbar-w-3 scrollbar-thumb-stone-800 scrollbar-track-amber-100 lg:flex-row lg:gap-2 bg-slate-300/20">
          <NavSearch index={index} props={subThemes} actually={slug} />
          <section className="p-2 py-8 text-base leading-6 text-justify break-normal lg:leading-8 md:text-lg lg:text-xl lg:p-5 lg:pr-8 font-patrick bg-slate-50 h-max">
            <MDXRemote
              lazy={true}
              {...source}
              components={{ ...generalComponents, ...latexComponets }}
            />
          </section>
        </section>
 */