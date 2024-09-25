<script lang="ts">
  import { ProgressRadial } from "@skeletonlabs/skeleton";
  import { onDestroy } from "svelte";
  import { count, localMin, localSec, localMoving, localStudyTime, localBreakTime } from "../../../stores";

  //props
  export let moving: boolean = false;
  export let color: string = "stroke-primary-500";

  //reactive vars
  $: isBreak = $count % 1 == 0;
  let setMin:number;
  $: {
    setMin = isBreak ? $localBreakTime : $localStudyTime;
    localMin.set(setMin);
  }
  $: percent = (($localMin * 60 + $localSec) / (setMin * 60)) * 100;

  //other vars
  let timerId: any;



  //iterates down the seconds of timer on every call
  function countdown() {
    if ($localMin == 0 && $localSec == 0) {
      clearTimeout(timerId);
      count.update((n) => n + 0.5);
      localMoving.set(false);
    } else if ($localSec == 0) {
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
      timerId = setInterval(countdown, 100);
    } else {
      if (timerId) {
        clearTimeout(timerId);
      }
    }
  }

  onDestroy(() => {
    clearTimeout(timerId);
    localSec.set(0)
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
  width="w-60">{formatNumber($localMin)}:{formatNumber($localSec)}</ProgressRadial
>
