// * Modulos, datos y tipos
import Head from "next/head";
import { allData as defaultData } from "../data/main";
import type { base } from "../data/Types";
// * Componentes
import HeadNav from "./../components/Tests/HeadNav";

const Home = () => {
  const navFormatData = defaultData?.map((matter: base) => {
    return matter;
  });
  return (
    <>
      <Head>
        <title>TeCitoHot - Aprende lo que buscas</title>
      </Head>
      <HeadNav options={navFormatData} />
      <div className="bg-primary">
        <h1 className="text-9xl">Hola mundo</h1>
        <h1 className="text-9xl">Hola mundo</h1>
        <h1 className="text-9xl">Hola mundo</h1>
        <h1 className="text-9xl">Hola mundo</h1>
        <h1 className="text-9xl">Hola mundo</h1>
        <h1 className="text-9xl">Hola mundo</h1>
        <h1 className="text-9xl">Hola mundo</h1>
        <h1 className="text-9xl">Hola mundo</h1>
        <h1 className="text-9xl">Hola mundo</h1>
        <h1 className="text-9xl">Hola mundo</h1>
        <h1 className="text-9xl">Hola mundo</h1>
        <h1 className="text-9xl">Hola mundo</h1>
        <h1 className="text-9xl">Hola mundo</h1>
        <h1 className="text-9xl">Hola mundo</h1>
        <h1 className="text-9xl">Hola mundo</h1>
        <h1 className="text-9xl">Hola mundo</h1>
        <h1 className="text-9xl">Hola mundo</h1>
        <h1 className="text-9xl">Hola mundo</h1>
        <h1 className="text-9xl">Hola mundo</h1>
        <h1 className="text-9xl">Hola mundo</h1>
      </div>
      <div>asdas</div>
    </>
  );
};

export default Home;
