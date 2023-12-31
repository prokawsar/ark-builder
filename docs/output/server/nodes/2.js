import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.WarAarF7.js","_app/immutable/chunks/scheduler.K9Bfs-k6.js","_app/immutable/chunks/index.jFgQWl_Z.js","_app/immutable/chunks/Head.xj--iOyw.js","_app/immutable/chunks/config.0YLVYb42.js","_app/immutable/chunks/paths.rEhufYew.js"];
export const stylesheets = [];
export const fonts = [];
