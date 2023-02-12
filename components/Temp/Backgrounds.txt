import { getStyle } from "../../lib/getStyleTime";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";
export function CloudBack({ className = "" }: { className?: string }) {
  const backgroundType = getStyle();
  const images = [1, 2, 3, 4];
  const [ref, { height }] = useMeasure();
  const style = images.map((e) => ({
    backgroundImage: `url(/home/${backgroundType}/${e}.png)`,
    backgroundSize: "auto 100%",
    backgroundPosition: "center",
  }));
  const scale = 576 * (height / 324);

  return (
    <section ref={ref} style={style[0]} className={`${className}`}>
      <motion.div
        animate={{ backgroundPositionX: ["0px", `${scale}px`] }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 0,
        }}
        style={style[1]}
        className="absolute top-0 w-full h-full"
      ></motion.div>
      <motion.div
        animate={{ backgroundPositionX: ["0px", `${scale}px`] }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 0,
        }}
        style={style[2]}
        className="absolute top-0 w-full h-full"
      ></motion.div>
      <motion.div
        animate={{ backgroundPositionX: ["0px", `${scale}px`] }}
        transition={{
          duration: 5,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 0,
        }}
        style={style[3]}
        className="absolute top-0 w-full h-full"
      ></motion.div>
    </section>
  );
}
