import parser from "./parser";
import { display, displayError } from "./display";

const url = `https://raw.githubusercontent.com/sean-7777/scripts/${new URL(document.location).searchParams.get("url")}`;
const rawText = await (await fetch(url)).text();
const { result, error } = parser(rawText);
if (error !== null) displayError(error);
else {
  display(result, url, rawText);
} 