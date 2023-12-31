// @ts-nocheck
import { getEntries } from '$utils/entries.js';

const authors = getEntries('authors');

/** */
export async function load() {
	return {
		authors: authors
	};
}
