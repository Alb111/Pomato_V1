<script lang="ts">
  import { ProgressRadial } from "@skeletonlabs/skeleton";
  let setMin: number = 2;
  let min: number = setMin;
  let sec: number = 0;
  let moving: boolean = false;
  //idk what type this would be
  let timerId: any;
  $: percent = ((min * 60 + sec) / (setMin * 60)) * 100;

  //starts the countdown
  function countdown() {
    if (min == 0 && sec == 0) {
      clearTimeout(timerId);
      //timer completes
    } else if (sec == 0) {
      min--;
      sec = 59;
    } else {
      sec--;
    }
  }

  //formats number so its 00 not 0
  function formatNumber(num: number): string {
    return num.toString().padStart(2, "0");
  }

  //start timer
  function start() {
    if (!moving) {
      timerId = setInterval(countdown, 1000);
      moving = true;
    }
  }

  //stops timer
  function stop() {
    if (moving) {
      clearTimeout(timerId);
      moving = false;
    }
  }
</script>

<!-- the progressBar -->
<ProgressRadial
  value={percent}
  strokeLinecap="round"
  meter="stroke-primary-500"
  track="stroke-primary-500/30"
  width="w-60">{formatNumber(min)}:{formatNumber(sec)}</ProgressRadial
>

<!-- Start and Stop buttons -->
<button type="button" class="btn variant-filled-primary h-10" on:click={start}>
  start
</button>
<button type="button" class="btn variant-filled-primary h-10" on:click={stop}>
  stop
</button>
