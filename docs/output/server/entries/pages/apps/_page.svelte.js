import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { T as Title } from "../../../chunks/Title.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  data.projects;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="divide-y divide-gray-200 dark:divide-gray-700"><div class="space-y-2 pt-6 pb-8 md:space-y-5">${validate_component(Title, "Title").$$render(
    $$result,
    {
      title: "Apps",
      subtitle: "All the apps are completely open-source and ads-free"
    },
    {},
    {}
  )}</div> <div class="container py-12" data-svelte-h="svelte-1kypi2j"><div class="-m-4 flex flex-wrap"></div></div></div>`;
});
export {
  Page as default
};
