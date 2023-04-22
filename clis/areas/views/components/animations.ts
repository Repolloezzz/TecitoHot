export async function wait(action: Function, time: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(action());
    }, time);
  });
}
