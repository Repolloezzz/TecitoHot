// * Modulos, datos y tipos
import Head from "next/head";
import { allData as defaultData } from "../data/main";
import type { base, Matter } from "../data/Types";
// * Componentes
import HeadNav from "../components/layout/HeadNav";
import Footer from "../components/layout/FooterTCH";
import BackgroundTime from "../components/home/BackgroundTime";
import HeroSection from "../components/global/HeroSection";
import Present from "../components/home/PresentSection";
import { MatterCard } from "../components/home/Card";
import MCarousel from "../components/home/MatterCaruser";
import Ventage from "../components/layout/AbsolutVentage";

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
      <Ventage />
      <section
        id="home"
        className="bg-clouds w-full h-screen relative snap-center"
      >
        <HeroSection className="absolute w-full h-full z-10 overflow-hidden -top-10" />
        <BackgroundTime className="w-full h-full" />
      </section>
      <Present id='Materias' theme={'dracula'}  title="Materias" className="bg-base">
        <p className="text-lg p-2 md:text-xl text-justify lg:text-3xl lg:p-6 bg-slate-50/10">
          Encuentra un repositorio lleno de material sobre temas de varias
          materias que generalmente se tornan o llegan a ser complicados. Donde,
          cada tema se intenta describir de la simple más entendible posible,
          con notas sobre cada concepto que tienen ... osea como unos apuntes
          ... seee? <br />
          Bueno si son apuntes de temas estudiados por mi <a href="https://github.com/Repolloezzz" className="link link-primary">@RepolloEzzz</a>. Pero,
          espero que se de gran ayuda mis apuntes xd 👺.
        </p>
        <div data-theme="dracula">
          <h2 className="text-2xl bg-secondary text-center">
            Seleciona una de tu agrado
          </h2>
          <MCarousel>
            {defaultData?.map((matter: Matter, index: number) => {
              return (
                <MatterCard
                  key={index}
                  className="carousel-item w-52 h-72 lg:w-72 lg:h-[28rem]"
                  base={matter}
                />
              );
            })}
          </MCarousel>
        </div>
      </Present>
      <Present title="Recursos" className="bg-yellow-600"></Present>
      <Present title="Aplicaciones" className="bg-indigo-700"></Present>
      <Footer />
    </>
  );
};

export default Home;
