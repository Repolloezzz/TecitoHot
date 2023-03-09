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

export const allContents = (
  matterGen: string,
  themeGen: string,
  subThemeGen: string,
): Content[] => {
  try {
    const res: Content[] = []
    const allGens = genAllContents(matterGen, themeGen, subThemeGen)
    for (const gen of allGens) {
      const content = getContentObject(matterGen, themeGen, subThemeGen, gen)
      if (content) res.push(content)
    }
    return res
  } catch (error) {
    console.log(`\n\x1b[1m${message} allContents:\x1b[0m\n${error}`)
    return []
  }
}

export const allSubThemes = (
  matterGen: string,
  themeGen: string,
): SubTheme[] => {
  try {
    const res: SubTheme[] = []
    const allGens = genAllSubThemes(matterGen, themeGen)
    for (const gen of allGens) {
      const subTheme = getSubThemeObject(matterGen, themeGen, gen)
      if (subTheme) {
        const contents = allContents(matterGen, themeGen, gen)
        res.push({ ...subTheme, contents })
      }
    }
    return res
  } catch (error) {
    console.log(`\n\x1b[1m${message} allSubThemes:\x1b[0m\n${error}`)
    return []
  }
}

export const allThemes = (matterGen: string): Theme[] => {
  try {
    const res: Theme[] = []
    const allGens = genAllThemes(matterGen)
    for (const gen of allGens) {
      const theme = getThemeObject(matterGen, gen)
      if (theme) {
        const subThemes = allSubThemes(matterGen, gen)
        res.push({ ...theme, subThemes })
      }
    }
    return res
  } catch (error) {
    console.log(`\n\x1b[1m${message} allThemes:\x1b[0m\n${error}`)
    return []
  }
}

export const allMatters = (): Matter[] => {
  try {
    const res: Matter[] = []
    const allGens = genAllMatters()
    for (const gen of allGens) {
      const matter = getMatterObject(gen)
      if (matter) {
        const themes = allThemes(gen)
        res.push({ ...matter, themes })
      }
    }
    return res
  } catch (error) {
    console.log(`\n\x1b[1m${message} allMatters:\x1b[0m\n${error}`)
    return []
  }
}
