<script lang="ts">
  import TimerCotainer from "$lib/components/Timing/TimerCotainer.svelte";
  import TodoCotainer from "$lib/components/Todo/TodoCotainer.svelte";
</script>

<main class=" w-full flex">
  <section>
    <TimerCotainer/>
 </section>
  <section>
    <TodoCotainer/>
  </section>
</main>

<style>
  section {
    @apply bg-surface-600 h-full w-full m-5 rounded-xl;
  }
</style>
