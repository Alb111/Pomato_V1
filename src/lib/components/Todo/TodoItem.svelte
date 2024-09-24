<script lang="ts">
  export let task: string;
  export let completed: boolean;

  import { todos } from "../../../stores";

  function change() {
    todos.update((todoArray) => {
      return todoArray.map((todo) => {
        if (todo.task === task) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    });
  }
</script>

<div
  class="flex items-center w-full min-h-12 bg-surface-500 border border-surface-900 rounded-lg shadow-sm px-5"
>
  <!-- Checkbox -->
  <input
    type="checkbox"
    bind:checked={completed}
    on:change={change}
    class="form-checkbox h-5 w-5 rounded focus:ring-0 mr-3 {completed
      ? 'text-primary-500'
      : 'text-gray-400'}"
  />
  <!-- Task Text -->
  <span
    class={`text-xl ${completed ? "line-through text-primary-500" : "text-white"}`}
  >
    {task}
  </span>
</div>
