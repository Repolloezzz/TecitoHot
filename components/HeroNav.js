import style from "../styles/HeroNav.module.css";
import { useState, useEffect } from "react";
import { ButtonRef } from "./Buttons";

/**
 * * Vertical nav - responsive
 * ! Cada parametro se validara para evitar elementos sin aspectos o contenido
 * @param options = [ { className, name, to, typeTo, containerId, typeButton, subOptions, icon } ]
 * !      "options" es un ARRAY de objetos, cada objeto es una opcion con las siguientes propiedades:
 * *      Cada Atributo viene por defecto con un valor Atrbibuto{_Default_}
 *        className  {""}         : STRING - Clase para el boton
 *        name  {"Exmaple"}       : STRING - contenido dentro del boton
 *        to  {"#"}               : STRING - href del boton
 *        toIn  {false}           : BOOLEAN - href dentro ( true ) o fuera ( false ) de la pagina
 * ?      containerId  {""}       : STRING - si [ typeTo = "in" ] => incluir id del contenedor del elemento al cual llegar
 *        subOptions  {false}     : BOOLEAN - boton simple ( false ) o buton con submenu ( true )
 * ?      options  [{name, to, toIn}]             : ARRAY<STRING> - si [ subOptions = true ] => incluir opciones del submenu
 * *      icon  {"home"}          : STRING - nombre del icono del paquete PixelArt
 * ?      especial {false}        : BOOLEAN - si la opcion es de tipo especial
 *
 * @param user    =  { name, link, img }
 * !      "user" es UN objeto para una seccion de usuario, posee los siguientes atributos:
          name  {"@Example"}    : STRING - contenido dentro del menu
          link  {"#"}           : STRING - href externo si o si
          img  {}               : STRING - link o URL de imagen representativa
 * @returns       <HeroNav> = <nav>
 */
export function HeroNavV({
  options = [
    {
      className: "",
      name: "Example",
      to: "#",
      toIn: false,
      containerId: "",
      subOptions: false,
      options: [],
      icon: "home",
      especial: false,
    },
  ],
  user = { name: "@Example", link: "#", img: undefined },
}) {
  /**
   * * Funcion que EXPANDE el HERONAV por el HAMBUERGER - BUTTON
   * 1.- agregar estado BOOLEANO (sw) para controlar el despliege
   * 2.- agregar estados de clases CSS para controlar el tamaño del HERONAV y el estilo de HAMBUERGER - BUTTON
   * 3.- evento ONCLICK en HAMBURGER - BUTTON para cambiar el estado BOOLEANO a un negado (set(!true) = set(false))
   * 4.- si !sw = true => expandir HERONAV y agregar estilo a HAMBURGUER - BUTTON
   * 5.- si !sw = false => volver al original HERONAV y quitar el estilo a HAMBURGUER - BUTTON
   */

  const [hamburger, setHamburger] = useState("");
  const [navSize, setNavSise] = useState("unset");
  const [sw, setSW] = useState(true);
  function HamburgerActive() {
    setSW(!sw);
    if (sw) {
      setHamburger(style.Hamburger_active);
      setNavSise(style.V_active);
    } else {
      setHamburger("");
      setNavSise("");
    }
  }

  /**
   * * ONCLICK para opciones que contienen un SUBMENU
   * 1.- selecionar TODOS las opciones que contienen un SUBMENU
   * 2.- agregar un evento ONCLICK para desplegar el SUBMENU
   * 3.- selecionar el <ol> que contiene las opciones del SUBMENU
   * 4.- definir un algoritmo que cambie el HEIGHT del SUBMENU en cada CLICK
   * 5.- redefinir para que cuando el HERONAV se contraiga => los submenu también lo hagan
   * ! si HERONAV se contrae (vuelve al original) => los SUBMENUS se contraen y ya no se pueden desplegar
   * ! si HERONAV se despliega (se EXPANDE) => los SUBMENUS se pueden desplegar
   */
  useEffect(() => {
    const subMenus = document
      .querySelector(".HERONAV")
      .querySelector("menu")
      .querySelectorAll(".subMenu");
    subMenus.forEach((e) => {
      e.children[0].addEventListener("click", () => {
        const options = e.children[1];
        let height = 0;
        if (options.clientHeight == "0" && !sw) {
          height = options.children.length * options.children[0].clientHeight;
        }
        options.style.height = `${height}px`;
      });
      if (sw) {
        e.children[1].style.height = "0px";
      }
    });
  }, [sw]);

  return (
    <>
      <nav
        className={`box-content flex flex-col items-center w-12 bg-vector-100 text-slate-50 transition-all duration-500 ${navSize} overflow-hidden h-screen HERONAV`}
      >
        {/*   HAMBURGUER - BUTTON  */}
        <div
          className={`flex justify-center w-full border-red-800 ${
            !sw
              ? "bg-red-600 border-b-8 hover:bg-red-700 hover:border-b-2 hover:mt-3.5 sm:hover:mt-3.5"
              : ""
          } mt-2 p-1 sm:p-0 mb-2 sm:mt-2 sm:mb-2 box-content transition-all duration-300 cursor-pointer`}
          onClick={HamburgerActive}
        >
          <ul
            className={`flex flex-col overflow-hidden gap-1.5 w-8 sm:w-10 h-10 justify-center cursor-pointer transition-all duration-500 ${hamburger} `}
          >
            <li
              className={`bg-tropical-100 w-full h-1.5 block transition-all duration-500`}
            ></li>
            <li
              className={`bg-tropical-100 w-full h-1.5 block transition-all duration-500`}
            ></li>
            <li
              className={`bg-tropical-100 w-full h-1.5 block transition-all duration-500`}
            ></li>
          </ul>
        </div>
        {/*   USER SECTION  - @use user */}
        {/* validando si poner una imagen de user.img */}
        {user.img != undefined ? (
          <picture
            className={`flex justify-center w-full h-28 sm:h-40 select-none ${
              !sw ? "bg-blue-500" : ""
            } transition-all duration-500 box-content`}
          >
            <img
              className={`top-0 object-cover object-top rounded-full transition-all duration-300 cursor-pointer border-4 border-dotted ${
                !sw
                  ? "w-24 h-24 sm:h-36 sm:w-36 m-2 hover:rotate-12 hover:scale-105"
                  : "w-8 h-8 m-0 sm:h-10 sm:w-10"
              }`}
              src={user.img}
              alt="userImage"
            ></img>
          </picture>
        ) : null}
        {/* validando si poner un boton <a> del user.name y user.link */}
        {user.name != undefined && user.link !== undefined ? (
          <a
            href={!sw ? user.link : "#"}
            className={`opacity-0 transition-all w-full h-10 flex items-center justify-center duration-300 bg-white text-black text-xl font-semibold  ${
              !sw ? "opacity-100 w-full hover:pl-7" : "text-xs"
            }`}
          >
            {user.name}
          </a>
        ) : null}
        <hr className="w-full border-4 border-dashed"></hr>
        {/*   CREACION DEL MENU - @use options */}
        <menu className={`flex flex-col w-full mt-auto h-3/5`}>
          {/* mapeado de cada opcion */}
          {options.map((element, index) => {
            /*
              ! si el element(opcion del menu) tiene su atributo [subOption = true]
              entonces agregar una clase subMenu al <li> para agregar EVENTOS ONCLICK
            */
            return (
              <li
                key={index}
                className={`${element.subOptions ? "subMenu" : ""} ${
                  element.especial ? "mt-auto" : ""
                }`}
              >
                <ButtonRef
                  to={element.to}
                  toIn={element.toIn}
                  containerId={element.containerId}
                  name={element.name}
                  icon={element.icon}
                  className={`block min-w-max box-content select-none ${
                    !sw ? "pl-2" : ""
                  } pt-1 pb-1 ${
                    element.className
                  } text-slate-200 hover:bg-tropical-100 hover:text-black transition-all duration-300 hover:scale-105 hover:pl-1`}
                  iconClass={"w-8 h-8 sm:w-10 sm:h-10 p-1"}
                  nameClass={"pl-4 text-xl sm:text-2xl"}
                />
                {/* validando si la opción tiene un submenu [ SUBOPTIONS = TRUE ] => crear un SUBMENU */}
                {element.subOptions ? (
                  <ol className="flex flex-col h-0 pl-5 overflow-hidden transition-all duration-300 bg-slate-200">
                    {element.options.map((suboption, k) => {
                      return (
                        <ButtonRef
                          name={suboption.name}
                          to={suboption.to}
                          toIn={suboption.toIn}
                          containerId={suboption.containerId}
                          className={
                            "text-black border-l-tropical-100 border-l-4 pl-5 text-xl hover:bg-tropical-200 hover:pl-9 transition-all duration-200"
                          }
                          key={k}
                        />
                      );
                    })}
                  </ol>
                ) : null}
              </li>
            );
          })}
        </menu>
      </nav>
    </>
  );
}
