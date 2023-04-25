import { motion } from 'framer-motion';
import style from '../../styles/TitleMove.module.css';

interface props {
  content: string;
  className?: string;
  colors?: Array<string>;
}
export function TextDown({ content, className, colors = [] }: props) {
  const title: Array<string> = [...content.split('')];

  return (
    <>
      {title.map((letter: string, index: number) => {
        let color = colors[index % colors.length];
        return (
          <motion.span
            animate={{
              translateY:
                index % 2 === 0 ? [0, 10, 0, -10, 0] : [0, -10, 0, 10, 0],
              rotateZ: index % 2 === 0 ? [0, 3, 0, -3, 0] : [0, -3, 0, 3, 0],
            }}
            transition={{
              ease: 'easeInOut',
              duration: 4,
              repeat: Infinity,
              repeatDelay: 0.5,
            }}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              const char = e.currentTarget;
              char.classList.add(`${style.ClickDown}`);
              setTimeout(() => {
                char.classList.remove(`${style.ClickDown}`);
              }, 1500);
            }}
            className={`${
              className ? className : ''
            } cursor-pointer select-none inline-block ${color}`}
            key={index}
          >
            {letter}
          </motion.span>
        );
      })}
    </>
  );
}

export function TextScale({ content, className = '', colors = [] }: props) {
  const title: Array<string> = [...content.split('')];
  return (
    <>
      {title.map((letter: string, index: number) => {
        let color = colors[index % colors.length];
        return (
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className={`${className} ${
              color ? color : ''
            } cursor-pointer select-none ${
              index % 2 === 0 ? style.Shake_a : style.Shake_b
            }`}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              const char = e.currentTarget;
              char.classList.add(`${style.ClickScale}`);
              setTimeout(() => {
                char.classList.remove(`${style.ClickScale}`);
              }, 700);
            }}
            key={index}
          >
            {letter}
          </motion.span>
        );
      })}
    </>
  );
}
