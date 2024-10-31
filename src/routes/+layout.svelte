<script lang="ts">
  import "../app.postcss";
  import Topbar from "$lib/components/Navigation/Topbar.svelte";
  import Sidebar from "$lib/components/Navigation/Sidebar.svelte";
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;
	$: ({ session, supabase } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>


<main class="h-screen w-screen flex-col overflow-hidden">
  <Topbar />
  <section class="w-full flex">
    <Sidebar />
    <slot />
  </section>
</main>
