<script lang="ts">
  import { BookCheck } from "lucide-svelte";
  import { todos } from "../../../stores";
  import TodoItem from "./TodoItem.svelte";

  let x = "";

  const addToArray = () => {
    todos.update((currentTodos) => [
      ...currentTodos,
      {
        task: x,
        complete: false,
      },
    ]);
    x = "";
  };

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addToArray();
    }
  };
</script>

<main>
  <h1>Todo</h1>

  <section>
    {#each $todos as todo}
      <TodoItem task={todo.task} completed={todo.complete} />
    {/each}
  </section>

  <aside>
    <input
      type="text"
      bind:value={x}
      on:keydown={handleKeydown}
      placeholder="Add Task"
    />
    <button on:click={addToArray}>
      <BookCheck size={25} />
    </button>
  </aside>
</main>

<style>
  main {
    @apply flex flex-col items-center min-h-screen bg-surface-600 rounded-xl p-6;
  }
  h1 {
    @apply text-4xl font-bold mb-6 shadow-md bg-surface-700 px-4 py-4 rounded-lg;
  }
  section {
    @apply flex flex-col items-center w-full max-w-4xl h-96 bg-surface-700 rounded-lg p-6 shadow-lg overflow-auto space-y-2;
  }
  aside {
    @apply flex items-center justify-center mt-6 w-full max-w-4xl space-x-4;
  }
  input {
    @apply w-full max-w-md p-3 rounded-lg bg-surface-700 focus:ring-2 focus:ring-primary-500 placeholder-white;
  }
  button {
    @apply flex items-center px-5 py-2 bg-primary-500 text-white rounded-lg shadow-md hover:bg-primary-600 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500;
  }
</style>
