import titles from "./Titles";
import minComp from "./General";
import comments from "./Comments";
import boxes from "./Box";
import VidAbs from "./Video";
import ImgAbs from "./Image";
import Quiziz from "../forms/Quiz";

import { Ltx } from "./Text";
const Global = { ...titles, ...minComp, ...comments, ...boxes };
const Latex = { Ltx };
const Media = { VidAbs, ImgAbs };
const Forms = { ...Quiziz };

export { Global, Latex, Media, Forms };
