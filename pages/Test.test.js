import { getElements } from "./../functions/mattersMethodsAPI";
import { useEffect, useState } from "react";
import { MatterSection } from "../components/MatterSection";
export default function Test() {

  // Para obtener datos sobre las materias
  const matters = "./api/mattersAPI";
  const [data, setData] = useState([]);
  function refreshData() {
    getElements(matters).then((res) => setData(res));
  }

  useEffect(() => {
    refreshData();
  }, []);

  return (
    <>
      <section>
        {data.length != 0
          ? data.map((element, index) => {
              return <MatterSection key={index} object={element} id={element.id} className=""/>;
            })
          : null}
      </section>
    </>
  );
}
