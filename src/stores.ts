import { writable } from 'svelte/store';

//TIMER STUFF
//count of completed cycles
export const count = writable<number>(.5);
//current min
export const localMin = writable<number>(1);
//current sec 
export const localSec = writable<number>(0);
//current timer state
export const localMoving = writable<boolean>(false);

interface TodoItem {
    task: string;
    complete: boolean;
}
export const todos = writable<TodoItem[]>([]);

//Settings stuff
export const localName = writable<string>("Hello World")
export const localStudyTime = writable<number>(2)
export const localBreakTime = writable<number>(1)