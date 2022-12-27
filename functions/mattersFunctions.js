// Variables de manipulacion de archivos JSON
const editJsonFile = require("edit-json-file");
let file = editJsonFile(`./data/dataMatters.json`, { autosave: true });

/**
 * *    getElements
 * 1.- obtener datos del archivo JSON
 * 3.- retornar las datos [matters = Array()]
 * @return  : ARRAY<Matter> - todos los elementos del archivo JSON
 */
export function getElements() {
  try {
    return file.get("matters");
  } catch (error) {
    console.log(error);
  }
}

/**
 * *    pushElement
 * @param head      : OBJECT - información NECESARIA para el proceso
 * ?    level       : NUMBER( INTEGER ) - nivel de manipulación del elemento 📑
 * ?    classID     : STRING - si [ level = 2 | 3 ] => agregar id del OBJETO CONETENDOR [1, 2] 📊
 *                  Ej. head = { level: 3, matterID: mate, themeID: mate_calc1, }
 * @param element   : OBJECT - elemento el cual se agregara
 * !    en caso de que el objeto caresca de un atributo 'preestablecido' => se le asignara un por defecto
 *
 * 1.- obtener datos del archivo JSON
 * CASO 1.- VERIFICAR si no exite otra materia con la misma ID
 * CASO 2.- Buscar la materia => VERIFICAR si no existe otro tema con la misma ID
 * CASO 3.- Buscar la materia => Buscar el tema => VERIFICAR si no existe otro subtema con la misma ID
 * 2.- Agregar el elemento a dataJson
 * 3.- agregar cambios en el archivo Materia
 */
export function pushElement(head, element) {
  try {
    const dataJson = file.get("matters");
    let existID = false;
    let indexI = undefined;
    let indexJ = undefined;

    switch (head.level) {
      case 1:
        existID = dataJson.some((matter) => matter.id == element.id);
        if (existID) {
          console.log('Ya existe un elemento con la misma id')
          break;
        }
        dataJson.push(
          {
            id: element.id != undefined && element.id != '' ? element.id : `${dataJson.length}-element`,
            name: element.name != undefined && element.name != '' ? element.name : `${dataJson.length}-element`,
            url: element.url != undefined ? element.url : '',
            img: element.img != undefined ? element.img : '',
            description: element.description != undefined ? element.description : '',
            themes: element.themes != undefined ? element.themes : []
          }
        );
        file.set("matters", dataJson);
        break;

      case 2:
        dataJson.find((matter, i) => {
          if (matter.id == head.matterID) {
            existID = matter.themes.some((theme) => theme.id == element.id);
            indexI = i;
          }
        });
        if (existID) {
          console.log('Ya existe un elemento con la misma id')
          break;
        }
        dataJson[indexI].themes.push(
          {
            id: element.id != undefined && element.id != '' ? element.id : `${dataJson[indexI].themes.length}-element`,
            name: element.name != undefined && element.name != '' ? element.name : `${dataJson[indexI].themes.length}-element`,
            url: element.url != undefined ? element.url : '',
            img: element.img != undefined ? element.img : '',
            description: element.description != undefined != '' ? element.description : '',
            subthemes: element.subthemes != undefined ? element.subthemes : []
          }
        );
        break;

      case 3:
        dataJson.find((matter, i) => {
          if (matter.id == head.matterID) {
            indexI = i;
            matter.themes.find((theme, j) => {
              if (theme.id == head.themeID) {
                indexJ = j;
                existID = theme.subthemes.some(
                  (subtheme) => subtheme.id == element.id
                );
              }
            });
          }
        });
        if (existID) {
          console.log('Ya existe un elemento con la misma id')
          break;
        }
        dataJson[indexI].themes[indexJ].subthemes.push(
          {
            id: element.id != undefined && element.id != '' ? element.id : `${dataJson[indexI].themes[indexJ].subthemes.length}-element`,
            name: element.name != undefined && element.name != '' ? element.name : `${dataJson[indexI].themes[indexJ].subthemes.length}-element`,
            url: element.url != undefined ? element.url : '',
            img: element.img != undefined ? element.img : '',
            description: element.description != undefined ? element.description : '',
          }
        );
        file.set("matters", dataJson);
        break;

      default:
        console.log('el atributo head { level : ??? } no es valido para la funcion')
        break;
    }
  } catch (error) {
    console.log(error);
    return false
  } finally {
    file.save()
  }
}

/**
 * *  editElement
 * @param head      : OBJECT - información NECESARIA para el proceso
 * ?    level       : NUMBER( INTEGER ) - nivel de manipulación del elemento 📑
 * ?    classID     : STRING - si [ level = 2 | 3 ] => agregar id del OBJETO CONETENDOR [1, 2] 📊
 *                  Ej. head = { level: 3, matterID: mate, themeID: mate_calc1, }
 * @param element   : OBJECT - elemento que se remplazara por el definido en @head
 * !    solo se editaran los atributos definidos en @element, si no se definieron => no se editaran
 *
 * 1.- obtener datos del archivo JSON
 * CASO 1.- Buscar materia => Editar la materia
 * CASO 2.- Buscar materia => Buscar tema => editar tema
 * CASO 3.- Buscar materia => Buscar tema => Buscar subtema => editar subtema
 * !    si se editara ID => VERIFICAR QUE NO EXISTA OTRO OBJETO CON LA MISMA ID [exceptuando si es el mismo]
 * 2.- editar dataJson con los parametros requeridos según su CASO
 * 3.- guardar los cambios en el archivo JSON
 */
export function editElement(head, element) {
  try {
    const dataJson = file.get("matters");
    let existID = false
    let indexI = undefined;
    let indexJ = undefined;
    let indexK = undefined;

    switch (head.level) {
      case 1:
        dataJson.some((matter, i) => {
          if(matter.id == head.matterID) {
            indexI = i
          }
          if(matter.id == element.id && matter.id != head.matterID) {
            existID = true
          }
        })

        if(existID) {
          console.log('Ya existe un elemento con la misma ID!!!')
          break;
        }

        dataJson[indexI] = {
            id: element.id != undefined ? element.id : dataJson[indexI].id,
            name: element.name != undefined ? element.name : dataJson[indexI].name,
            url: element.url != undefined ? element.url : dataJson[indexI].url,
            img: element.img != undefined ? element.img : dataJson[indexI].img,
            description: element.description != undefined ? element.description : dataJson[indexI].description,
            themes: element.themes != undefined ? element.themes : dataJson[indexI].themes
        }
        file.set('matters', dataJson)
        break;

      case 2:
        dataJson.find((matter, i) => {
          if(matter.id == head.matterID) {
            indexI = i
            matter.themes.some((theme, j) => {
              if(theme.id == head.themeID) {
                indexJ = j
              }
              if(theme.id == element.id && theme.id != head.themeID) {
                existID = true
              }
            })
          }
        })

        if(existID) {
          console.log('Ya existe un elemento con la misma ID!!!')
          break;
        }

        dataJson[indexI].themes[indexJ] = {
            id: element.id != undefined ? element.id : dataJson[indexI].themes[indexJ].id,
            name: element.name != undefined ? element.name : dataJson[indexI].themes[indexJ].name,
            url: element.url != undefined ? element.url : dataJson[indexI].themes[indexJ].url,
            img: element.img != undefined ? element.img : dataJson[indexI].themes[indexJ].img,
            description: element.description != undefined ? element.description : dataJson[indexI].themes[indexJ].description,
            subthemes: element.subthemes != undefined ? element.subthemes : dataJson[indexI].themes[indexJ].subthemes
        }
        file.set('matters', dataJson)
        break;

      case 3:
        dataJson.find((matter, i) => {
          if(matter.id == head.matterID) {
            indexI = i
            matter.themes.find((theme, j) => {
              if(theme.id == head.themeID) {
                indexJ = j
                theme.subthemes.some((subtheme, k) => {
                  if(subtheme.id == head.subthemeID) {
                    indexK = k
                  }
                  if(subtheme.id == element.id && subtheme.id != head.subthemeID) {
                    existID = true
                  }
                })
              }
            })
          }
        })

        if(existID) {
          console.log('Ya existe un elemento con la misma ID!!!')
          break;
        }

        dataJson[indexI].themes[indexJ].subthemes[indexK] = {
            id: element.id != undefined ? element.id : dataJson[indexI].themes[indexJ].subthemes[indexK].id,
            name: element.name != undefined ? element.name : dataJson[indexI].themes[indexJ].subthemes[indexK].name,
            url: element.url != undefined ? element.url : dataJson[indexI].themes[indexJ].subthemes[indexK].url,
            img: element.img != undefined ? element.img : dataJson[indexI].themes[indexJ].subthemes[indexK].img,
            description: element.description != undefined ? element.description : dataJson[indexI].themes[indexJ].subthemes[indexK].description,
        }

        file.set('matters', dataJson)
        break;
      default:
        console.log('el atributo head { level : ??? } no es valido para la funcion')
        break;
    }
    return true
  } catch (error) {
    console.log(error)
    return false
  } finally {
    file.save()
  }
}

/**
 * *  delElement
 * @param head      : OBJECT - información NECESARIA para el proceso
 * ?    level       : NUMBER( INTEGER ) - nivel de manipulación del elemento 📑
 * ?    classID     : STRING - si [ level = 2 | 3 ] => agregar id del OBJETO CONETENDOR [1, 2] 📊
 *                  Ej. head = { level: 3, matterID: mate, themeID: mate_calc1, }
 *
 * ! no incluye elemento ya que no es necesario agregar-editar algo
 * 1.- obtener datos del archivo JSON
 * CASO 1.- Buscar materia => Borrar la materia
 * CASO 2.- Buscar materia => Buscar tema => Borrar tema
 * CASO 3.- Buscar materia => Buscar tema => Buscar subtema => Borrar subtema
 * 2.- hacer el proceso segun el CASO
 * 3.- guardar los cambios en el archivo JSON
 */
export function delElement(head) {
  try {
    const dataJson = file.get("matters");
    let indexI = undefined;
    let indexJ = undefined;
    let indexK = undefined;

    switch (head.level) {
      case 1:
        dataJson.some((matter, i) => {
          if(matter.id == head.matterID) {
            indexI = i
          }
        })

        if(indexI != undefined) {
          dataJson.splice(indexI, 1)
        } else {
          console.log('No existe un elemento con esa ID')
          break
        }

        file.set('matters', dataJson)
        break;

      case 2:
        dataJson.find((matter, i) => {
          if(matter.id == head.matterID) {
            indexI = i
            matter.themes.some((theme, j) => {
              if(theme.id == head.themeID) {
                indexJ = j
              }
            })
          }
        })

        if(indexI != undefined && indexJ != undefined) {
          dataJson[indexI].themes.splice(indexJ, 1)
        } else {
          console.log('No existe un elemento con esa ID')
          break
        }

        file.set('matters', dataJson)
        break;

      case 3:
        dataJson.find((matter, i) => {
          if(matter.id == head.matterID) {
            indexI = i
            matter.themes.find((theme, j) => {
              if(theme.id == head.themeID) {
                indexJ = j
                theme.subthemes.some((subtheme, k) => {
                  if(subtheme.id == head.subthemeID) {
                    indexK = k
                  }
                })
              }
            })
          }
        })

        if(indexI != undefined && indexJ != undefined && indexK != undefined) {
          dataJson[indexI].themes[indexJ].subthemes.splice(indexK, 1)
        } else {
          console.log('No existe un elemento con esa ID')
          break
        }

        file.set('matters', dataJson)
        break;
      default:
        console.log('el atributo head { level : ??? } no es valido para la funcion')
        break;
    }
    return true
  } catch (error) {
    console.log(error)
    return false
  } finally {
    file.save()
  }
}