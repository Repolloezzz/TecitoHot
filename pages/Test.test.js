import { HeroNavV } from "../components/HeroNav";


export default function Test() {
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
            },
            {
              name: "Materias",
              icon: "folder-minus",
              to: "materias",
              toIn: true,
              containerId: "contentContainer",
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
            },
            {
              name: "Biblioteca",
              icon: "book",
              to: "./Library",
            },
            {
              name: "Sobre TeCito",
              icon: "downasaur",
              to: "./About",
              especial: true,
              className: "bg-cgreen-200 hover:bg-cgreen-600",
            },
          ]}
        ></HeroNavV>
        <div
          id="contentContainer"
          className="w-full h-screen overflow-y-scroll"
        >
          <div id="heroback" className="w-full h-full bg-sky-400">
            Background
          </div>
          <div id="materias" className="w-full h-full bg-sky-400">
            <div id="mat_mat" className="w-full h-full bg-red-400">
              Massss
            </div>
            <div id="mat_fis" className="w-full h-full bg-red-400">
              Massss
            </div>
            <div id="mat_inf" className="w-full h-full bg-red-400">
              Massss
            </div>
            <div id="mat_mus" className="w-full h-full bg-red-400">
              Massss
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
