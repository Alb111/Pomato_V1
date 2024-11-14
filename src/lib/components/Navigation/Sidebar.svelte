<script lang="ts">
  import { page } from "$app/stores";
  type route = {
    name: string;
    link: string;
    image: string;
    selected: Boolean;
  };
  // TODO: add more routes when you add more features
  let routes: route[] = [
    {
      name: "dashboard",
      link: "/private",
      selected: false,
      image: "/assets/dash.svg",
    },
    {
      name: "focus",
      link: "/private/focus",
      selected: false,
      image: "/assets/book.svg",
    },
    {
      name: "settings",
      link: "/private/settings",
      selected: false,
      image: "/assets/settings.svg",
    },
  ];
  let vis = false;

  // function for keeping track of what page user is on rn
  function selectedPath(items: route[], path: string): void {
    items.forEach((item) => {
      item.selected = item.link === path;
    });
  }

  // calls function on page update
  $: {
    let pathname = $page.url.pathname;
    selectedPath(routes, pathname);
    //idk why but u need reassign obj arr to get reactivity
    routes = routes;
  }

  async function switchvis() {
    const nav = document.getElementById("expand");
    if (nav) nav.classList.add("animate-expand");
    //delays vis change a bit to allow for smoother animation
    await new Promise((resolve) => setTimeout(resolve, 100));
    vis = !vis;
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<nav id="expand" on:mouseenter={switchvis} on:mouseleave={switchvis}>
  {#each routes as route}
    <a class={route.selected ? "selected" : ""} href={route.link}>
      <img src={route.image} alt="not working" />
      <h1 class={vis ? "visible" : "collapse"}>{route.name}</h1>
    </a>
  {/each}
</nav>

<style>
  nav {
    @apply mt-5 z-10 w-20 h-screen rounded-xl bg-surface-700 flex-col ml-2 hover:w-40 transition-all duration-300 ease-in-out;
  }
  a {
    @apply rounded-xl p-5 flex space-x-3 text-lg font-bold justify-center items-center;
  }
  .selected {
    @apply bg-error-700;
  }
</style>
