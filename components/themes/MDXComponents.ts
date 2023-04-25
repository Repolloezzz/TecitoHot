import titles from './Titles';
import minComp from './General';
import comments from './Comments';
import boxes from './Box';
import VidAbs from '../global/Video';
import ImgAbs from '../global/Image';
import Quiziz from '../forms/Quiz';
import { ID_txt as SectionID } from '../global/Text';

import { Ltx } from './Text';
const Global = { ...titles, ...minComp, ...comments, ...boxes, SectionID };
const Latex = { Ltx };
const Media = { VidAbs, ImgAbs };
const Forms = { ...Quiziz };

export { Global, Latex, Media, Forms };
