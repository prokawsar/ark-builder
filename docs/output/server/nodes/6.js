import * as server from '../entries/pages/blog/_slug_/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/6.WrCpfQr7.js","_app/immutable/chunks/scheduler.K9Bfs-k6.js","_app/immutable/chunks/index.jFgQWl_Z.js","_app/immutable/chunks/Head.xj--iOyw.js","_app/immutable/chunks/config.0YLVYb42.js","_app/immutable/chunks/each.-oqiv04n.js","_app/immutable/chunks/Author.0gF8FdR2.js","_app/immutable/chunks/paths.rEhufYew.js","_app/immutable/chunks/github.MvY8URab.js","_app/immutable/chunks/theme.GWk54sbn.js"];
export const stylesheets = [];
export const fonts = [];
