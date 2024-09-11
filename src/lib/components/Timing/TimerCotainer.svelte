<script lang="ts">
  
  import { count, localMoving } from "../../../stores";
  import Timer from "./Timer.svelte";

  let curCount: number;
  $: curCount = $count;

  let moving: boolean;
  $: moving = $localMoving;
  function changeMoving() {
    localMoving.set(!moving);
  }

  let isBreak: boolean = false;
  $: {
    if (curCount % 1 == 0) {
      isBreak = true;
    } else {
      isBreak = false;
    }
  }
</script>

<div>
  <section></section>
  <section class="py-10">
    <Timer
      setMin={isBreak ? 10 : 1}
      {moving}
      color={isBreak ? "stroke-success-500" : "stroke-primary-500"}
    />
  </section>
  <section>
    <button
      type="button"
      class={isBreak ? "variant-filled-success" : "variant-filled-primary"}
      on:click={changeMoving}
    >
      start
    </button>
    <button
      type="button"
      class={isBreak ? "variant-filled-success" : "variant-filled-primary"}
      on:click={changeMoving}
    >
      stop
    </button>
  </section>
</div>

<style>
  div {
    @apply flex-col items-center justify-center w-full;
  }
  section {
    @apply flex space-x-4  justify-center;
  }
  button {
    @apply btn  h-14 w-28 text-2xl;
  }
</style>
