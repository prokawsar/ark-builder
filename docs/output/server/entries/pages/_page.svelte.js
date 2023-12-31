import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { H as Head } from "../../chunks/Head.js";
import "github-slugger";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  data.posts;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Head, "Head").$$render($$result, {}, {}, {})} <div class="pt-12 flex flex-col justify-center items-center" data-svelte-h="svelte-7nmw1z"><img class="w-[75%]" src="icon-512.png" alt="ARK Builder"> <div class="flex flex-col w-[85%]"><h1 class="pb-6 text-2xl font-extrabold leading-9 text-center tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Neat, efficient and privacy-focused apps for your productivity</h1> <p class="text-lg text-center font-semibold prose-xl text-gray-800 dark:text-gray-400"><span class="font-extrabold">ARK Builders</span> crafts contemporary software for all platforms, with <br> the mission to elevate daily user experiences through privacy <br> enhancements and seamless cross-device synchronization.</p></div></div> `;
});
export {
  Page as default
};
