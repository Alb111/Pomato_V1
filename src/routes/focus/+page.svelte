<script lang="ts">
  import Clock from "$lib/components/Clock.svelte";
  let moving:boolean = false;
  function changeMoving(){
    moving=!moving
  }
</script>


<Clock setMin={2} moving={moving}/>

<!-- Start and Stop buttons -->
<button type="button" class="btn variant-filled-primary h-10" on:click={changeMoving}>
  start
</button>
<button type="button" class="btn variant-filled-primary h-10" on:click={changeMoving}>
  stop
</button>
