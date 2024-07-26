<script lang="ts">
  import { todos } from "../../stores";
  import TodoItem from "./TodoItem.svelte";

  //idk what never is
  const addToArray = () => {
    $todos.push("adsfasdf");
    //for reactivity
    $todos = $todos
  };
</script>

<main>
  {#each $todos as todo}
    <TodoItem content={todo} />
  {/each}

  <button on:click={addToArray}> click me </button>
</main>
