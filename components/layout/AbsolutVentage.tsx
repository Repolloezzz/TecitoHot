import { useAbsoluteContext } from "../../context/Absolute";
import { Icons } from "../global/Icons";
const Ventage = () => {
  const { change, context } = useAbsoluteContext();
  return (
    <>
      <section
        className={`fixed transition-all z-40 top-0 pt-20 pb-10 right-0 bg-neutral/70 h-full ${
          context.open ? "w-full px-2 lg:px-20" : "w-0"
        }`}
      >
        <div className="bg-base-100 w-full h-full">
            <h1 className='flex bg-neutral p-2 h-[8%]'>
                <p className='text-xl'>{context.title}</p>
                <button onClick={() => change({...context, open:false})} className='ml-auto'>
                <Icons name='close' className="w-8 h-8 bg-red-500"/>
                </button>
            </h1>
            <div className='p-5 overflow-y-auto overflow-x-hidden relative h-[92%]'>
                {context.content}
            </div>
          </div>
      </section>
    </>
  );
};
export default Ventage;
