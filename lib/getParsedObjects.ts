import type { Content, Matter, SubTheme, Theme } from '@/data/DataTypes'
import {
  genAllContents,
  genAllSubThemes,
  genAllThemes,
  genAllMatters,
} from '@/lib/getGenerators'
import {
  getContentObject,
  getSubThemeObject,
  getThemeObject,
  getMatterObject,
} from '@/lib/getObjects'

const message = '⚠ Hubo un error al ejecutar la función'

/**
 * * Para obtener el objeto de cotenido parseado al tipo "Content"
 * @param matterGen : Nombre de la materia en la que se encuentra el contenido
 * @param themeGen : Nombre del tema en el que se encuentra el contenido
 * @param subThemeGen : Nombre del subtema en el que se encuentra el contenido
 * @param contentGen : Nombre del contenido
 * @returns : Objeto del contenido pero parseado al tipo "Content" ó null si no existe
 */
export const getContent = (
  matterGen: string,
  themeGen: string,
  subThemeGen: string,
  contentGen: string,
): Content | null => {
  return getContentObject(matterGen, themeGen, subThemeGen, contentGen)
}

/**
 * * Para obtener todos los objetos de contenido parseados al tipo "Content" de un subtema
 * @param matterGen : Nombre de la materia en la que se encuentra los contenidos
 * @param themeGen : Nombre del tema en el que se encuentra los contenidos
 * @param subThemeGen : Nombre del subtema en el que se encuentra los contenidos
 * @returns : Lista de todos los objetos de contenido parseados al tipo "Content" de un subtema
 */
export const allContents = (
  matterGen: string,
  themeGen: string,
  subThemeGen: string,
): Content[] => {
  try {
    const res: Content[] = []
    // Obteniendo los generadores de los contenidos
    const allGens = genAllContents(matterGen, themeGen, subThemeGen)
    for (const gen of allGens) {
      const content = getContentObject(matterGen, themeGen, subThemeGen, gen)
      if (content) res.push(content)
    }
    return res.sort((a, b) => a.index - b.index)
  } catch (error) {
    console.log(`\n\x1b[1m${message} allContents:\x1b[0m\n${error}`)
    return []
  }
}

/**
 * * Para obtener el objeto de subtema parseado al tipo "SubTheme"
 * @param matterGen : Nombre de la materia en la que se encuentra el subtema
 * @param themeGen : Nombre del tema en el que se encuentra el subtema
 * @param subThemeGen : Nombre de el subtema
 * @returns : Objeto del subtema pero parseado al tipo "SubTheme" ó null si no existe
 */
export const getSubTheme = (
  matterGen: string,
  themeGen: string,
  subThemeGen: string,
): SubTheme | null => {
  const obj = getSubThemeObject(matterGen, themeGen, subThemeGen)
  if (obj) {
    const contents = allContents(matterGen, themeGen, subThemeGen)
    return { ...obj, contents }
  }
  return null
}

/**
 * * Para obtener todos los objetos de subtemas parseados al tipo "SubTheme" de un tema
 * @param matterGen : Nombre de la materia en la que se encuentra los subtemas
 * @param themeGen : Nombre del tema en el que se encuentra los subtemas
 * @returns : Lista de todos los objetos de subtemas parseados al tipo "SubTheme" de un tema
 */
export const allSubThemes = (
  matterGen: string,
  themeGen: string,
): SubTheme[] => {
  try {
    const res: SubTheme[] = []
    // Obteniendo los generadores de los subtemas
    const allGens = genAllSubThemes(matterGen, themeGen)
    for (const gen of allGens) {
      const subTheme = getSubTheme(matterGen, themeGen, gen)
      if (subTheme) res.push(subTheme)
    }
    return res.sort((a, b) => a.index - b.index)
  } catch (error) {
    console.log(`\n\x1b[1m${message} allSubThemes:\x1b[0m\n${error}`)
    return []
  }
}

/**
 * * Para obtener el objeto de tema parseado al tipo "Theme"
 * @param matterGen : Nombre de la materia en la que se encuentra el tema
 * @param themeGen : Nombre del tema
 * @returns : Objeto del tema pero parseado al tipo "Theme" ó null si no existe
 */
export const getTheme = (matterGen: string, themeGen: string): Theme | null => {
  const obj = getThemeObject(matterGen, themeGen)
  if (obj) {
    const subThemes = allSubThemes(matterGen, themeGen)
    return { ...obj, subThemes }
  }
  return null
}

/**
 * * Para obtener todos los objetos de temas parseados al tipo "Theme" de una materia
 * @param matterGen : Nombre de la materia en la que se encuentra los temas
 * @returns : Lista de todos los objetos de temas parseados al tipo "Theme" de una materia
 */
export const allThemes = (matterGen: string): Theme[] => {
  try {
    const res: Theme[] = []
    // Obtener los generadores de los temas
    const allGens = genAllThemes(matterGen)
    for (const gen of allGens) {
      const theme = getTheme(matterGen, gen)
      if (theme) res.push(theme)
    }
    return res.sort((a, b) => a.index - b.index)
  } catch (error) {
    console.log(`\n\x1b[1m${message} allThemes:\x1b[0m\n${error}`)
    return []
  }
}

/**
 * * Para obtener el objeto de materia parseado al tipo "Matter"
 * @param matterGen : Nombre de la materia
 * @returns : Objeto de la materia pero parseado al tipo "Matter" ó null si no existe
 */
export const getMatter = (matterGen: string): Matter | null => {
  const obj = getMatterObject(matterGen)
  if (obj) {
    const themes = allThemes(matterGen)
    return { ...obj, themes }
  }
  return null
}

/**
 * * Para obtener todos los objetos de materias parseados al tipo "Matter"
 * @returns : Lista de todos los objetos de materias parseados al tipo "Matter"
 */
export const allMatters = (): Matter[] => {
  try {
    const res: Matter[] = []
    // Obtener los generadores de las materias
    const allGens = genAllMatters()
    for (const gen of allGens) {
      const matter = getMatter(gen)
      if (matter) res.push(matter)
    }
    return res.sort((a, b) => a.index - b.index)
  } catch (error) {
    console.log(`\n\x1b[1m${message} allMatters:\x1b[0m\n${error}`)
    return []
  }
}
