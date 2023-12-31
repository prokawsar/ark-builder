import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.8pEviF02.js","_app/immutable/chunks/scheduler.K9Bfs-k6.js","_app/immutable/chunks/index.jFgQWl_Z.js","_app/immutable/chunks/each.-oqiv04n.js","_app/immutable/chunks/config.0YLVYb42.js","_app/immutable/chunks/theme.GWk54sbn.js","_app/immutable/chunks/paths.rEhufYew.js","_app/immutable/chunks/github.MvY8URab.js","_app/immutable/chunks/stores.59thbfEd.js","_app/immutable/chunks/singletons.fPJqxomQ.js"];
export const stylesheets = ["_app/immutable/assets/0.wZDcN15P.css"];
export const fonts = [];
