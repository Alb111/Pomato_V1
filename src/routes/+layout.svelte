<script lang="ts">
  import "../app.postcss";
  import Topbar from "$lib/components/Navigation/Topbar.svelte";
  import Sidebar from "$lib/components/Navigation/Sidebar.svelte";
</script>

<main class="h-screen w-screen flex-col overflow-hidden">
  <Topbar />
  <section class="w-full flex">
    <Sidebar />
    <slot />
  </section>
</main>
