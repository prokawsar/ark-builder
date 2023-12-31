import { c as create_ssr_component, v as validate_component, b as each, e as escape, d as add_attribute } from "../../../chunks/ssr.js";
import { H as Head } from "../../../chunks/Head.js";
import { b as base } from "../../../chunks/paths.js";
import { T as Title } from "../../../chunks/Title.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const authors = data.authors;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Head, "Head").$$render($$result, { title: "About" }, {}, {})} <div class="divide-y divide-gray-200 dark:divide-gray-700"><div class="space-y-2 pt-6 pb-8 md:space-y-5">${validate_component(Title, "Title").$$render($$result, { title: "About" }, {}, {})}</div> <div class="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0" data-svelte-h="svelte-1sflcys"><div class="flex flex-col items-center py-6"> <div class="flex space-x-2 pt-4">  </div></div> <div class="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">ARK Builder (PP) was an American tech company based in Silicon Valley, California. The company
			was formed in 2014 by Richard Hendricks as a company to develop Richard&#39;s algorithm that he&#39;d
			created. The company is best known to for achieving the highest Weissman score in history
			during their presentation at TechCrunch Disrupt. The company&#39;s first appearance was in the
			Season One episode Minimum Viable Product and has since served as the primary company for the
			series.</div></div> <div class="space-y-2 py-8 md:space-y-5">${validate_component(Title, "Title").$$render($$result, { h2: true, title: "Contributors" }, {}, {})} <div class="grid xl:grid-cols-3 grid-cols-2 gap-4">${each(authors, (author) => {
    return `<div class="lg:flex flex-row space-x-3"><div class="grow-0 shrink-0 basis-auto w-full lg:w-1/3"><img src="${escape(base, true) + escape(author.avatar, true)}"${add_attribute("alt", author.name, 0)} class="w-full rounded-xl mb-4 lg:mb-0"></div> <div class="grow-0 shrink-0 basis-auto w-full lg:w-2/3"><h5 class="text-lg font-bold">${escape(author.name)}</h5> <p class="text-gray-500 mb-2">${escape(author.occupation)}</p> <div class="flex" data-svelte-h="svelte-10b497a">   </div></div> </div>`;
  })}</div></div></div>`;
});
export {
  Page as default
};
