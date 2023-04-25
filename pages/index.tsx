// Modulos de la app
import type { Matter, Base } from '@/data/DataTypes';
import type { GetStaticProps } from 'next/types';
import { allMatters } from '@/lib/getParsedObjects';
import { getAllMatterObject } from '@/lib/getObjects';
// Componentes
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import Present from '@/components/home/PresentSection';
import { PresentCard } from '@/components/home/Card';
import MCarousel from '@/components/home/MatterCaruser';

interface HomeParams {
  listMatter: Matter[];
  dataLayout: Base[];
}

/**
 * @param { listmatter } : Lista de materias que se mostraran en el home
 * @param { dataLayout } : Datos para el layout de las páginas
 * @returns Página principal
 */
function Home({ listMatter, dataLayout }: HomeParams) {
  return (
    <>
      <Head>
        <title>TeCitoHot - Aprende lo que buscas</title>
      </Head>
      <Layout listData={dataLayout}>
        {/* HeroSection */}
        <section
          id="home"
          className="bg-clouds w-full h-screen relative snap-center"
        >
          <HeroSection />
        </section>
        {/* Presentación de materias */}
        <Present
          id="Materias"
          theme="dracula"
          title="Materias"
          className="bg-base"
        >
          <p className="text-lg p-2 md:text-xl text-justify lg:text-3xl lg:p-6 bg-slate-50/10">
            Encuentra un repositorio lleno de material sobre temas de varias
            materias que generalmente se tornan o llegan a ser complicados.
            Donde, cada tema se intenta describir de la simple más entendible
            posible, con notas sobre cada concepto que tienen ... osea como unos
            apuntes ... seee? <br />
            Bueno si son apuntes de temas estudiados por mi{' '}
            <a
              href="https://github.com/Repolloezzz"
              className="link link-primary"
            >
              @RepolloEzzz
            </a>
            .Pero, espero que se de gran ayuda mis apuntes xd 👺.
          </p>
          <div data-theme="dracula">
            <h2 className="text-2xl bg-secondary text-center">
              Seleciona una de tu agrado
            </h2>
            <MCarousel>
              {listMatter?.map((matter: Matter, index: number) => {
                return (
                  <PresentCard
                    key={index}
                    className="carousel-item w-52 h-72 lg:w-72 lg:h-[28rem]"
                    base={matter}
                  />
                );
              })}
            </MCarousel>
          </div>
        </Present>
        {/* Presentación de recursos Existentes */}
        <Present title="Recursos" className="bg-yellow-600">
          <h1>Pendiente...</h1>
        </Present>
        {/* Presentación de aplicaciones Existentes */}
        <Present title="Aplicaciones" className="bg-indigo-700">
          <h1>Pendiente...</h1>
        </Present>
      </Layout>
    </>
  );
}
export default Home;

// ! Para todas las páginas dinámicas se debe de obtener dataLayout
export const getStaticProps: GetStaticProps = async () => {
  const listMatter = allMatters();
  // Datos para el layout de las páginas
  const dataLayout = getAllMatterObject();
  return {
    props: {
      listMatter,
      dataLayout,
    },
  };
};
