<script lang="ts">
  import { page } from "$app/stores";
  type route = {
    name: string;
    link: string;
    image: string;
    selected: Boolean;
  }
  // TODO: add more routes when you add more features
  let routes: route[] = [
    { 
        name: "dashboard", 
        link: "/", 
        selected: false, 
        image: "/assets/dash.svg" 
    },
    {
      name: "focus",
      link: "/focus",
      selected: false,
      image: "/assets/book.svg",
    },
    {
      name: "settings",
      link: "/settings",
      selected: false,
      image: "/assets/settings.svg",
    },
  ];
  let vis=false

  // function for keeping track of what page user is on rn
  function selectedPath(items: route[], path: string): void {
    items.forEach((item) => {
      item.selected = item.link === path;
    });
    console.log(routes);
  }
  
  // calls function on page update
  $: {
    let pathname = $page.url.pathname;
    selectedPath(routes, pathname);
    //idk why but u need reassign obj arr to get reactivity
    routes=routes
  }

  function switchvis()
  {
        vis=!vis
  }

</script>

<nav on:mouseenter={switchvis} on:mouseleave={switchvis}>
  {#each routes as route}
    <a class={route.selected ? "selected" : ""} href={route.link} >
      <img src={route.image} alt="not working" />
      <h1 class={vis ? "text-blue-50" : "invisble"}>{route.name}</h1>
    </a>
  {/each}
</nav>

<style>
  nav {
    @apply w-20 h-screen rounded-xl bg-surface-700 flex-col ml-2;
  }
  a {
    @apply rounded-xl p-5 flex space-x-3 hover:bg-error-500 justify-center items-center stroke-white;
  }
  .selected {
    @apply  bg-error-700;
  }
</style>
