import { c as create_ssr_component, b as each, e as escape, d as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { n as navLinks, c as config } from "../../chunks/config.js";
import { b as base } from "../../chunks/paths.js";
import { T as Twitter, G as Github } from "../../chunks/github.js";
const Transition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pathname = "" } = $$props;
  if ($$props.pathname === void 0 && $$bindings.pathname && pathname !== void 0)
    $$bindings.pathname(pathname);
  return `<div>${slots.default ? slots.default({}) : ``}</div>`;
});
const ThemeSwitch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button aria-label="Toggle Dark Mode" class="h-8 w-8 rounded p-1" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-gray-900 dark:text-gray-100">${``}</svg></button>`;
});
const MobileMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="sm:hidden"><button type="button" class="ml-1 mr-1 h-8 w-8 rounded py-1" aria-label="Toggle Menu" data-svelte-h="svelte-1pzhami"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-gray-900 dark:text-gray-100"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg></button> <div class="${[
    "fixed top-0 left-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800",
    " translate-x-full"
  ].join(" ").trim()}"><div class="flex justify-end"><button type="button" class="mr-5 mt-11 h-8 w-8 rounded" aria-label="Toggle Menu" data-svelte-h="svelte-igq5ce"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-gray-900 dark:text-gray-100"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button></div> <nav class="fixed mt-8 h-full">${each(navLinks, (link) => {
    return `<div class="px-12 py-4"><a href="${escape(base, true) + escape(link.href, true)}" class="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100">${escape(link.title)}</a> </div>`;
  })}</nav></div></div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <header class="flex items-center justify-between py-3 sticky top-0 bg-white dark:bg-gray-900 bg-opacity-95"><div class="flex flex-row items-center"><a href="${escape(base, true) + "/"}"${add_attribute("aria-label", config.headerTitle, 0)}><div class="flex items-center justify-between"><div class="mr-3" data-svelte-h="svelte-lmsn3q"></div> <div class="hidden text-4xl font-semibold sm:block font-title">${escape(config.headerTitle)}</div></div></a> <div class="hidden sm:block ml-5">${each(navLinks, (link) => {
    return `<a href="${escape(base, true) + escape(link.href, true)}"${add_attribute("target", link.title == "Research" ? "_blank" : "", 0)} class="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-2">${escape(link.title)}</a>`;
  })}</div></div> <div class="flex items-center gap-3 text-base leading-5"> ${validate_component(ThemeSwitch, "ThemeSwitch").$$render($$result, {}, {}, {})} <a${add_attribute("href", config.twitter, 0)} target="_blank">${validate_component(Twitter, "Twitter").$$render($$result, {}, {}, {})}</a> <a${add_attribute("href", config.github, 0)} target="_blank">${validate_component(Github, "Github").$$render($$result, {}, {}, {})}</a> ${validate_component(MobileMenu, "MobileMenu").$$render($$result, {}, {}, {})}</div> </header>`;
});
const Analytics = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${``} ${``} ${``}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = {} } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="mx-auto max-w-6xl px-4 sm:px-6 xl:max-w-6xl xl:px-0"><div class="flex h-screen flex-col justify-between">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="mb-auto">${validate_component(Transition, "Transition").$$render($$result, { pathname: data?.pathname }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</main> </div></div> ${validate_component(Analytics, "Analytics").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
