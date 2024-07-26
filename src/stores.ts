import { writable } from 'svelte/store';
export const count = writable<number>(.5);

export const todos = writable<string[]>([]);

