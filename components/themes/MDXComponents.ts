import titles from "./Titles"
import minComp from './General'
import comments from './Comments'
import boxes from './Box'
import VidAbs from "./Video"
import ImgAbs from "./Image"

import { Ltx } from "./Text"
const Global = {...titles, ...minComp, ...comments, ...boxes}
const Latex = {Ltx}
const Media = {VidAbs, ImgAbs}

export {Global, Latex, Media}