<script lang="ts">
    let x:boolean = true
    import { BookCheck } from 'lucide-svelte';
</script>
<nav>
    <BookCheck/>
    <h1>Pomato</h1>
    <h1>{ x ? "Login" : "Logout"}</h1>
</nav>

<style>
    nav{
        @apply bg-primary-50;
    }
</style>