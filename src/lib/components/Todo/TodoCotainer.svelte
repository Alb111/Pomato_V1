<script lang="ts">
  import { todos } from "../../../stores";
  import TodoItem from "./TodoItem.svelte";

  let x = "";
  const addToArray = () => {
    $todos.push(x);
   x = ''; 
    $todos = $todos;
  };
</script>

<main
  class="flex flex-col items-center  min-h-screen bg-primary"
>
  <h1 class="text-2xl font-bold mb-4">Todo</h1>
  <input
    type="text"
    bind:value={x}
    class="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="Type here..."
  />
  <button
    on:click={addToArray}
    class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    Submit
  </button>

  {#each $todos as todo}
    <TodoItem content={todo} />
  {/each}

  <button on:click={addToArray}> click me </button>
</main>
