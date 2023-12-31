const prerender = true;
const load = async ({ url: { pathname } }) => {
  return { pathname };
};
export {
  load,
  prerender
};
