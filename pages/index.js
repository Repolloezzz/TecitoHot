import Head from "next/head";
import { HeroBackground } from "../components/Background";
import { HeroNavV } from "../components/HeroNav";
import { getElements } from "./../functions/mattersMethodsAPI";
import { useEffect, useState } from "react";
import { MatterSection } from "../components/MatterSection";

export default function Test() {
  // Obteniendo datos de MattersAPI
  const [data, setData] = useState([]);
  const mattersURL = "./api/mattersAPI";
  function refreshData() {
    getElements(mattersURL).then((res) => setData(res));
  }

  useEffect(() => {
    refreshData();
  }, []);

  // colores para las secciones
  const colors = ["bg-red-500", "bg-blue-500", "bg-slate-700", "bg-indigo-500"];

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
              options: data.map((matter) => {
                return {
                  name: matter.name,
                  to: matter.id,
                  toIn: true,
                  containerId: "contentContainer",
                };
              }),
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
        <section
          id="contentContainer"
          className="w-full h-screen overflow-x-hidden overflow-y-scroll scroll-smooth snap-y"
        >
          <HeroBackground
            id="heroback"
            className="bg-purple-900"
            title={"TeCitoHot"}
            description={`El lugar donde encontraras recursos donde en otros sitio son escasos o incluso ni siquiera existen.`}
            options={[
              { name: "Tema random", to: "#" },
              { name: "Por qué TeCito?", to: "./About" },
            ]}
          />
          <section id="materias">
            {data.length != 0
              ? data.map((element, index) => {
                  return (
                    <MatterSection
                      key={index}
                      object={element}
                      id={element.id}
                      className={`${colors[index]} snap-start`}
                    />
                  );
                })
              : null}
          </section>
        </section>
      </section>
    </>
  );
}
