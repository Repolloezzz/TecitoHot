import Head from 'next/head'
import { HeroBackground } from "../components/Background";
import { HeroNavV } from "../components/HeroNav";
import { SectionSelector } from "../components/SectionSelector";

export default function Test() {
  const data = require("../data/dataMatters.json");
  console.log(data);

  return (
    <>
    <Head>
        <title>TeCitoHot - Repositorio Puro</title>
        
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="flex">
        <HeroNavV
          user={{
            name: "by @Repolloez",
            link: "https://github.com/Repolloezzz",
            img: "https://avatars.githubusercontent.com/u/96484170?v=4",
          }}
          options={[
            {
              name: "Incio",
              icon: "home",
              to: "heroback",
              toIn: true,
              containerId: "contentContainer",
              className: "hover:bg-tropical-100 hover:text-black",
            },
            {
              name: "Materias",
              icon: "folder-minus",
              to: "materias",
              toIn: true,
              containerId: "contentContainer",
              className: "hover:bg-tropical-100 hover:text-black",
              subOptions: true,
              options: [
                {
                  name: "Matemáticas",
                  to: "mat_mat",
                  toIn: true,
                  containerId: "contentContainer",
                },
                {
                  name: "Física",
                  to: "mat_fis",
                  toIn: true,
                  containerId: "contentContainer",
                },
                {
                  name: "Informática",
                  to: "mat_inf",
                  toIn: true,
                  containerId: "contentContainer",
                },
                {
                  name: "Música",
                  to: "mat_mus",
                  toIn: true,
                  containerId: "contentContainer",
                },
              ],
            },
            {
              name: "Prácticas",
              icon: "archive",
              to: "./Examples",
              className: "hover:bg-tropical-100 hover:text-black",
            },
            {
              name: "Biblioteca",
              icon: "book",
              to: "./Library",
              className: "hover:bg-tropical-100 hover:text-black",
            },
            {
              name: "Sobre TeCito",
              icon: "downasaur",
              to: "./About",
              especial: true,
              className: "bg-cgreen-200 hover:bg-nature-400 hover:text-black",
            },
          ]}
        ></HeroNavV>
        <div
          id="contentContainer"
          className="w-full h-screen overflow-x-hidden overflow-y-scroll"
        >
          <HeroBackground
            id="heroback"
            className="bg-sky-400"
            title={"TeCitoHot"}
            description={`El lugar donde encontraras recursos donde en otros sitio son escasos o incluso ni siquiera existen.`}
            options={[
              { name: "Tema random", to: "#" },
              { name: "Por qué TeCito?", to: "./About" },
            ]}
          />
          <div id="materias" className="w-full h-full bg-sky-400">
            <SectionSelector
              className={`w-full h-full bg-red-500 text-white`}
              id="mat_mat"
              title={"Matemáticas"}
              description={`
              La matemática2​ (del latín mathematĭca, y este del griego μαθηματικά, transliterado como mathēmatiká, derivado de μάθημα, tr. máthēma. 'conocimiento') es una ciencia formal que surgió del estudio de las figuras geométricas y la aritmética con números. No existe una definición generalmente aceptada de las matemáticas; hoy en día se suelen describir como una ciencia que utiliza la lógica para examinar las propiedades y los patrones de las estructuras abstractas creadas por las definiciones lógicas.
              `}
            />
            <SectionSelector
              className={`w-full h-full bg-blue-500`}
              id="mat_fis"
              title={"Física"}
              description={"eaisnfiansfias"}
            />
            <SectionSelector
              className={`w-full h-full bg-slate-800`}
              id="mat_inf"
              title={"Informática"}
              description={"eaisnfiansfias"}
            />
            <SectionSelector
              className={`w-full h-full bg-indigo-600`}
              id="mat_mus"
              title={"Música"}
              description={"eaisnfiansfias"}
            />
          </div>
        </div>
      </section>
    </>
  );
}
