<script lang="ts">
  export let onButtonClick: any;
</script>

<nav>
  <div>
    <img src="/assets/logo.png" alt="logo" class="h-16" />
    <h1>Pomato</h1>
  </div>
  <div class="hoverable">
    <button on:click={onButtonClick}> <h1>Logout</h1> </button>
  </div>
</nav>

<style>
  nav {
    @apply bg-surface-700 sticky top-0 flex justify-between rounded-lg m-2 py-1;
  }
  div {
    @apply flex items-center mx-4 my-2 space-x-3;
  }
  h1 {
    @apply font-bold px-2 text-3xl;
  }
  .hoverable {
    @apply rounded-xl px-2 flex hover:bg-error-500;
  }
</style>
