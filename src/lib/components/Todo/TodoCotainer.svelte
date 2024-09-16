<script lang="ts">
  import { BookCheck } from 'lucide-svelte';
  import { todos } from "../../../stores";
  import TodoItem from "./TodoItem.svelte";

  let x = "";
  const addToArray = () => {
    $todos.push(x);
    x = "";
    $todos = $todos;
  };
</script>

<main class="flex flex-col items-center min-h-screen bg-primary p-6">
  <h1 class="text-4xl font-bold mb-6 text-secondary shadow-md bg-surface-700 px-4 py-4 rounded-lg">
    Todo
  </h1>

  <section class="flex flex-col items-center w-full max-w-4xl h-96 bg-surface-700 rounded-lg p-6 shadow-lg overflow-hidden">
    {#each $todos as todo}
      <TodoItem content={todo} />
    {/each}
  </section>

  <aside class="flex items-center justify-center mt-6 w-full max-w-4xl space-x-4">
    <input
      type="text"
      bind:value={x}
      class="w-full max-w-md p-3 rounded-lg bg-surface-700 focus:ring-2 focus:ring-primary-500 placeholder-white"
      placeholder="Add Task"
    />
    <button
      on:click={addToArray}
      class="flex items-center px-5 py-2 bg-primary-500 text-white rounded-lg shadow-md hover:bg-primary-600 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500"
    >
      <BookCheck size={25} />
    </button>
  </aside>
</main>

