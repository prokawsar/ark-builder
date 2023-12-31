import { g as getEntries } from "../../../chunks/entries.js";
const authors = getEntries("authors");
async function load() {
  return {
    authors
  };
}
export {
  load
};
