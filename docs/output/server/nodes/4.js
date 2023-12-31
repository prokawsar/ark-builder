import * as server from '../entries/pages/apps/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/apps/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/apps/+page.server.js";
export const imports = ["_app/immutable/nodes/4.a-IxtSHM.js","_app/immutable/chunks/scheduler.K9Bfs-k6.js","_app/immutable/chunks/index.jFgQWl_Z.js","_app/immutable/chunks/paths.rEhufYew.js","_app/immutable/chunks/Title.X15Dw3sc.js"];
export const stylesheets = [];
export const fonts = [];
