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
import { Ltx, BLtx } from "./themes/Text";
import { Img } from "./global/ImgComp";
import { Video } from "./global/VidComp";
import { Icons } from "./global/Icons";
import { PFooter } from "./global/Footer";
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
  Icons,
};
const layouts = {
  PFooter,
}
const latexComponets = {
  Ltx,
  BLtx,
};

export { generalComponents, latexComponets, layouts };
