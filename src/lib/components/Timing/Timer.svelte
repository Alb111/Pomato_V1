<script lang="ts">
  import { ProgressRadial } from "@skeletonlabs/skeleton";
  import { onDestroy } from "svelte";
  import { count, localMin, localSec } from "../../../stores";

  export let setMin: number = 2;
  export let moving: boolean = false;
  export let color: string = "stroke-primary-500";

  if($localMin){
    localMin.set(setMin);
  }

  $: min = $localMin;
  $: sec = $localSec;
  let timerId: any;

  $: percent = ((min * 60 + sec) / (setMin * 60)) * 100;

  //iterates down the seconds of timer on every call
  function countdown() {
    if (min == 0 && sec == 0) {
      clearTimeout(timerId);
      count.update((n) => n + 0.5);
    } else if (sec == 0) {
      //min--;
      localMin.update((n) => n - 1);
      //sec = 59;
      localSec.set(59);
    } else {
      localSec.update((n) => n - 1);
      //sec--;
    }
  }

  //formats number so its 00 not 0
  function formatNumber(num: number): string {
    return num.toString().padStart(2, "0");
  }

  //start or stop the timer
  function startOrStop(moving: boolean) {
    if (moving) {
      timerId = setInterval(countdown, 1000);
    } else {
      if (timerId) {
        clearTimeout(timerId);
      }
    }
  }

  onDestroy(() => {
    clearTimeout(timerId);
  });

  //makes timer start or stop when moving var changes
  $: startOrStop(moving);
</script>

<!-- the progressCircle for the clock -->
<ProgressRadial
  value={percent}
  strokeLinecap="round"
  meter={color}
  track={color + "/30"}
  width="w-60">{formatNumber(min)}:{formatNumber(sec)}</ProgressRadial
>
