import { getColor } from "@/lib/getTailwind";
export default function Test() {
  const color = getColor('bg','orange', 1)
  return (
    <>
      <section className='w-full h-screen flex justify-center item-center bg-yellow-100'>
        <h1 className={`font-bold text-5xl ${color}`}>Hola mundo</h1>
      </section>
    </>
  );
}
