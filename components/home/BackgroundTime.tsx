import { getStyle } from '../../lib/getStyleTime';
import useMeasure from 'react-use-measure';
import { motion } from 'framer-motion';
import moment from 'moment';
import { useEffect, useState } from 'react';

interface BackgroundContext {
  type?: 'morning' | 'day' | 'magic' | 'sunset' | 'night';
  className?: string;
}

/**
 * Componente de fondo de pantalla
 * Actualmente solomante se usa en la
 * página de inicio y solo es de backgrounds
 * del cielo
 */
export default function BackgroundTime({ type, className }: BackgroundContext) {
  // Ruta de estilos de background
  const [backgroundType, setBackType] = useState(type ?? 'magic');
  useEffect(() => {
    if (!type) {
      setBackType(getStyle());
    } else {
      setBackType(type);
    }
  }, [type]);

  // Obtención de fondos de pantalla
  const images = [1, 2, 3, 4];
  const [ref, { height }] = useMeasure();
  const style = images.map((e) => ({
    backgroundImage: `url(/home/${backgroundType}/${e}.png)`,
    backgroundSize: 'auto 100%',
    backgroundPosition: 'center',
    height: '100%',
  }));
  const scale = 576 * (height / 324);

  // Obtención de fecha y hora
  const [time, setTime] = useState({ day: 0, hour: 0, minute: 0, second: 0 });
  useEffect(() => {
    setTimeout(() => {
      setTime({
        day: moment().date(),
        hour: moment().hour(),
        minute: moment().minute(),
        second: moment().second(),
      });
    }, 1000);
  }, [time]);

  return (
    <section
      ref={ref}
      style={{ ...style[0], backgroundSize: 'cover' }}
      className={`w-full h-full relative ${className ?? ''}`}
    >
      {/* Reloj */}
      <div className="grid grid-flow-col text-center auto-cols-max absolute top-0 right-0">
        {Object.entries(time).map((element, index) => {
          return (
            <div
              key={index}
              className="flex flex-col p-1 lg:p-2 bg-neutral/20 text-neutral-content"
            >
              <span className="countdown font-mono text-xs md:text-xl lg:text-2xl justify-center">
                <span
                  style={{ '--value': element[1] } as React.CSSProperties}
                ></span>
              </span>
              {element[0]}
            </div>
          );
        })}
      </div>
      {}
      <motion.div
        animate={{ backgroundPositionX: ['0px', `${scale}px`] }}
        transition={{
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
          repeatDelay: 0,
        }}
        style={style[1]}
        className="absolute top-0 w-full h-full"
      ></motion.div>
      <motion.div
        animate={{ backgroundPositionX: ['0px', `${scale}px`] }}
        transition={{
          duration: 10,
          ease: 'linear',
          repeat: Infinity,
          repeatDelay: 0,
        }}
        style={style[2]}
        className="absolute top-0 w-full h-full"
      ></motion.div>
      <motion.div
        animate={{ backgroundPositionX: ['0px', `${scale}px`] }}
        transition={{
          duration: 5,
          ease: 'linear',
          repeat: Infinity,
          repeatDelay: 0,
        }}
        style={style[3]}
        className="absolute top-0 w-full h-full"
      ></motion.div>
    </section>
  );
}
