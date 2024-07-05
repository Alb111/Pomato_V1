<script lang="ts">
  import "../app.postcss";
  import Topbar from "$lib/components/Navigation/Topbar.svelte";
  import Sidebar from "$lib/components/Navigation/Sidebar.svelte";
</script>

<main class="h-screen w-screen flex-col">
  <Topbar />
  <section class="w-full">
    <Sidebar />
    <slot />
  </section>
</main>
