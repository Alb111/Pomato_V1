<script lang="ts">
  import type { PageData } from "./$types";
  import Register from "../lib/components/auth/Register.svelte";
  import Login from "../lib/components/auth/Login.svelte"
  export let data: PageData;
</script>

<div class="flex h-screen w-screen items-center justify-center">
  <div class="max-w-md flex-grow">
    <Register data={data.form} />
    <Login data={data.form}/>
  </div>
</div>
