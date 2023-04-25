// Funcion que espera un tiempo determinado para continuar, esto para la consola
export default async function wait(time: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
}
