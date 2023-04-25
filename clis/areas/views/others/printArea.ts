import { BaseArea } from "../../../../data/types/Area";
import { viewAreaBox } from "../components/Boxes";

const { Toggle } = require("enquirer");
export default async function printPreviewArea(
  area: BaseArea,
  message: string,
  enabled: string,
  disabled: string
) {
  console.log(viewAreaBox(area));
  const props = new Toggle({
    name: "Continue",
    message,
    enabled,
    disabled,
  });
  const continueOption = await props.run();
  return continueOption;
}
