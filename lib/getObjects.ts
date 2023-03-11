import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { rootMarkdown, Pages, Public } from '@/data/routes'
import type { Content } from '@/data/DataTypes'
import { genAllMatters } from '@/lib/getGenerators'

const message = '⚠ Hubo un error al ejecutar la función'

const readFile = (...route: string[]) =>
  fs.readFileSync(path.join(...route), 'utf8')

export const getMatterObject = (matterGen: string) => {
  try {
    const file = readFile(rootMarkdown, matterGen, 'index.json')
    const data = JSON.parse(file)
    return {
      name: data.name,
      index: data.index ? data.index : 0,
      gen: matterGen,
      url: `${Pages}/${matterGen}`,
      description: data.description ? data.description : '',
      img: `${Public}/${matterGen}/${data.img ? data.img : 'Icon.webp'}`,
      color: data.color ? data.color : 'slate',
      character: data.character ? data.character : 'patos',
    }
  } catch (error) {
    console.log(`\n\x1b[1m${message} getMatterObject:\x1b[0m\n${error}`)
    return null
  }
}

export const getAllMatterObject = () => {
  try {
    const gens = genAllMatters()
    const matters = gens.map((gen) => getMatterObject(gen))
    return matters
  } catch (error) {
    console.log(`\n\x1b[1m${message} getMatterObject:\x1b[0m\n${error}`)
    return []
  }
}

export const getThemeObject = (matterGen: string, themeGen: string) => {
  try {
    const file = readFile(rootMarkdown, matterGen, themeGen, 'index.json')
    const data = JSON.parse(file)
    return {
      name: data.name,
      index: data.index ? data.index : 0,
      gen: themeGen,
      url: `${Pages}/${matterGen}/${themeGen}`,
      description: data.description ? data.description : '',
      img: `${Public}/${matterGen}/${themeGen}/${
        data.img ? data.img : 'Icon.webp'
      }`,
    }
  } catch (error) {
    console.log(`\n\x1b[1m${message} getThemeObject:\x1b[0m\n${error}`)
    return null
  }
}

export const getSubThemeObject = (
  matterGen: string,
  themeGen: string,
  subThemeGen: string,
) => {
  try {
    const file = readFile(
      rootMarkdown,
      matterGen,
      themeGen,
      subThemeGen,
      'index.json',
    )
    const data = JSON.parse(file)
    return {
      name: data.name,
      index: data.index ? data.index : 0,
      gen: subThemeGen,
      url: `${Pages}/${matterGen}/${themeGen}/${subThemeGen}`,
      description: data.description ? data.description : '',
    } as {
      name: string
      index: number
      gen: string
      url: string
      description: string
    }
  } catch (error) {
    console.log(`\n\x1b[1m${message} getSubThemeObject:\x1b[0m\n${error}`)
    return null
  }
}

export const getContentObject = (
  matterGen: string,
  themeGen: string,
  subThemeGen: string,
  contentGen: string,
) => {
  try {
    const file = readFile(
      rootMarkdown,
      matterGen,
      themeGen,
      subThemeGen,
      `${contentGen}.mdx`,
    )
    const parsed = matter(file)
    const data = parsed.data as Content
    return {
      name: data.name,
      index: data.index ? data.index : 0,
      gen: contentGen,
      url: `${Pages}/${matterGen}/${themeGen}/${subThemeGen}/${contentGen}`,
      description: data.description ? data.description : '',
      keys: data.keys ? data.keys : [],
    }
  } catch (error) {
    console.log(`\n\x1b[1m${message} getContentObject:\x1b[0m\n${error}`)
    return null
  }
}

export const getContentSource = async (
  matterGen: string,
  themeGen: string,
  subThemeGen: string,
  contentGen: string,
) => {
  try {
    const file = readFile(
      rootMarkdown,
      matterGen,
      themeGen,
      subThemeGen,
      `${contentGen}.mdx`,
    )
    const { content } = matter(file)
    const source = await serialize(content, {})
    return {
      source,
    }
  } catch (error) {
    console.log(`\n\x1b[1m${message} getContentSource:\x1b[0m\n${error}`)
    return null
  }
}
