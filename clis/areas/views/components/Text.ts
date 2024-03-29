import chalk from "chalk";
const justified = require("justified");
import { viewBox } from "./Boxes";
// Dracula theme
export const MyTheme = {
  primary: chalk.hex("#FF79C6"),
  secondary: chalk.hex("#BD93F9"),
  accent: chalk.hex("#FFB86C"),
  neutral: chalk.hex("#414558"),
  base: chalk.hex("#282A36"),
  info: chalk.hex("#8BE9FD"),
  success: chalk.hex("#50FA7B"),
  warning: chalk.hex("#F1FA8C"),
  error: chalk.hex("#FF5555"),
};

export const H1 = (text: string) => {
  return MyTheme.primary.bold(text);
};

export const p = (text: string) => {
  return MyTheme.neutral(text);
};

export const justify = (text: string) => {
  const textJustified = justified(text, {
    width: 110,
    indent: 0,
    hyphenate: true,
  });
  return MyTheme.neutral(textJustified);
};

export const errorMSG = (text: string) => {
  return MyTheme.error.bold(text);
};

export const successMSG = (text: string) => {
  return MyTheme.success.bold(text);
};

type ChalkOptions = Parameters<typeof chalk>[1];

export function printBoxSection(
  title: string,
  description: string,
  options?: string[]
) {
  const opt = options?.map((o) => `  - ${o}`).join("\n");
  const header = viewBox(
    H1(`>>> ${title} <<<`),
    justify(description) + "\n" + p(opt ?? "")
  );
  console.log(header);
}

export function printT<K extends keyof typeof MyTheme>(
  color: K,
  text: string,
  options?: ChalkOptions
) {
  let result = MyTheme[color](text);
  if (options) {
    result = MyTheme[color](text, options);
  }
  console.log(result);
}
