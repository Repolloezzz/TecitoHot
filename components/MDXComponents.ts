import { Title, SubTitle } from "./themes/Titles";
import {
  ImportantBox,
  BoxwC,
  ButtonBox,
  SimpleBox,
  ChordBox,
} from "./themes/Box";
import { LComment, BComment } from "./themes/Comments";
import { Ref } from "./themes/General";
import { Ltx } from "./themes/Text";
import { Img } from "./global/ImgComp";
import { Video } from "./global/VidComp";
import { Icons } from "./global/Icons";
const generalComponents = {
  Title,
  SubTitle,
  ImportantBox,
  BoxwC,
  LComment,
  BComment,
  ButtonBox,
  SimpleBox,
  ChordBox,
  Ref,
  Img,
  Video,
  Icons
};

const latexComponets = {
  Ltx,
};

export { generalComponents, latexComponets };
