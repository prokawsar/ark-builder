import * as server from '../entries/pages/about/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/about/+page.server.js";
export const imports = ["_app/immutable/nodes/3.yi5VKPJU.js","_app/immutable/chunks/scheduler.K9Bfs-k6.js","_app/immutable/chunks/index.jFgQWl_Z.js","_app/immutable/chunks/each.-oqiv04n.js","_app/immutable/chunks/Head.xj--iOyw.js","_app/immutable/chunks/config.0YLVYb42.js","_app/immutable/chunks/paths.rEhufYew.js","_app/immutable/chunks/Title.X15Dw3sc.js"];
export const stylesheets = [];
export const fonts = [];
