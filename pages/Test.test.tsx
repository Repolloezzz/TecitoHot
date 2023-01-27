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
      <motion.div style={{scaleX: scrollYProgress}} className="fixed w-20 h-20 bg-yellow-400">Hola</motion.div>
      <div className="w-full h-screen bg-red-400"></div>
      <div className="w-full h-screen bg-red-400"></div>
      <div className="w-full h-screen bg-red-400"></div>
      <div className="w-full h-screen bg-red-400"></div>
      <div className="w-full h-screen bg-red-400"></div>
      <div className="w-full h-screen bg-red-400"></div>
    </section>
  );
};

export default Test;
