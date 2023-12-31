import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component, m as missing_component } from "./ssr.js";
import { b as base } from "./paths.js";
import { slug } from "github-slugger";
import { G as Github, T as Twitter } from "./github.js";
import { c as config } from "./config.js";
const Mail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M7 9l5 3.5L17 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 17V7a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2z" stroke="currentColor" stroke-width="1.5"></path></svg>`;
});
const Facebook = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M17 2h-3a5 5 0 00-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
});
const Youtube = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M14 12l-3.5 2v-4l3.5 2z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 12.707v-1.415c0-2.895 0-4.343.905-5.274.906-.932 2.332-.972 5.183-1.053C9.438 4.927 10.818 4.9 12 4.9c1.181 0 2.561.027 3.912.065 2.851.081 4.277.121 5.182 1.053.906.931.906 2.38.906 5.274v1.415c0 2.896 0 4.343-.905 5.275-.906.931-2.331.972-5.183 1.052-1.35.039-2.73.066-3.912.066-1.181 0-2.561-.027-3.912-.066-2.851-.08-4.277-.12-5.183-1.052C2 17.05 2 15.602 2 12.708z" stroke="currentColor" stroke-width="1.5"></path></svg>`;
});
const Linkedin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5zM7 17v-7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
});
const SocialIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url = "" } = $$props;
  let { icon = "" } = $$props;
  let { popup = false } = $$props;
  let { small = false } = $$props;
  let size = small ? "w-5" : "w-7";
  const options = [
    { caption: "mail", component: Mail },
    { caption: "github", component: Github },
    {
      caption: "facebook",
      component: Facebook
    },
    {
      caption: "youtube",
      component: Youtube
    },
    {
      caption: "linkedin",
      component: Linkedin
    },
    {
      caption: "twitter",
      component: Twitter
    }
  ];
  let svg = options.find((option) => option.caption === icon)?.component;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.popup === void 0 && $$bindings.popup && popup !== void 0)
    $$bindings.popup(popup);
  if ($$props.small === void 0 && $$bindings.small && small !== void 0)
    $$bindings.small(small);
  return `${url ? `<a class="flex gap-x-2 text-gray-500 transition hover:text-primary-600" href="${escape(base, true) + escape(url || "#", true)}"${add_attribute("target", popup ? "_blank" : "", 0)} rel="noreferrer"><span class="sr-only">${escape(icon)}</span> ${validate_component(svg || missing_component, "svelte:component").$$render($$result, { class: size + " " }, {}, {})} <span>${slots.default ? slots.default({}) : ``}</span></a>` : ``}`;
});
const Tag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "" } = $$props;
  let { size = "text-sm" } = $$props;
  let { url = slug(text) } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  return `<a href="${escape(base, true) + escape(`/tags/${url}`, true)}" class="${"mr-3 font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 " + escape(size, true)}">${escape(text)}</a>`;
});
const formatDate = (date) => {
  return new Date(date).toLocaleDateString(config.locale, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
};
const Author = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { author = "" } = $$props;
  let { avatar = "" } = $$props;
  let { twitter = "" } = $$props;
  let { postDate = "" } = $$props;
  if ($$props.author === void 0 && $$bindings.author && author !== void 0)
    $$bindings.author(author);
  if ($$props.avatar === void 0 && $$bindings.avatar && avatar !== void 0)
    $$bindings.avatar(avatar);
  if ($$props.twitter === void 0 && $$bindings.twitter && twitter !== void 0)
    $$bindings.twitter(twitter);
  if ($$props.postDate === void 0 && $$bindings.postDate && postDate !== void 0)
    $$bindings.postDate(postDate);
  return `${avatar ? `<img${add_attribute("src", avatar, 0)} width="38px" height="38px" alt="avatar" class="h-10 w-10 rounded-lg">` : ``} <dl class="whitespace-nowrap text-sm font-medium leading-5"><dt class="sr-only" data-svelte-h="svelte-1mvp860">Author</dt><dd class="text-base font-bold leading-6 text-gray-600 dark:text-gray-300">${escape(author)}</dd>${twitter ? `<dt class="sr-only" data-svelte-h="svelte-1pmpmce">Twitter</dt> <dd>${validate_component(SocialIcon, "SocialIcon").$$render(
    $$result,
    {
      icon: "twitter",
      url: twitter,
      small: true
    },
    {},
    {
      default: () => {
        return `${escape(twitter?.replace("https://twitter.com/", "@"))}`;
      }
    }
  )}</dd>` : ``}${postDate ? `<dt class="sr-only" data-svelte-h="svelte-dxm560">Published on</dt> <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"><time${add_attribute("datetime", postDate, 0)}>${escape(formatDate(postDate))}</time></dd>` : ``}</dl>`;
});
export {
  Author as A,
  Tag as T
};
