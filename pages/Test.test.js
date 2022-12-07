import { HeroBackground } from "../components/Background";
import { HeroNavV } from "../components/HeroNav";



export default function Test() {

  const data = require('../data/dataMatters.json')
  console.log(data)

  return (
    <>
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
            description = {"El lugar donde encontraras recursos donde en otros sitio son escasos o incluso ni siquiera existen."}
            options={[{ name: "Tema random", to: "#" }, {name: "Por qué TeCito?", to: "./About"}]}
          />
          <div id="materias" className="w-full h-full bg-sky-400">
            <div id="mat_mat" className="w-full h-full bg-red-500">
              Massss
            </div>
            <div id="mat_fis" className="w-full h-full bg-blue-500">
              Massss
            </div>
            <div id="mat_inf" className="w-full h-full bg-slate-800">
              Massss
            </div>
            <div id="mat_mus" className="w-full h-full bg-indigo-600">
              Massss
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
