import titles from "./Titles"
import minComp from './General'
import comments from './Comments'

import { Ltx } from "./Text"
const Global = {...titles, ...minComp, ...comments}
const Latex = {Ltx}
const Media = {}

export {Global, Latex, Media}