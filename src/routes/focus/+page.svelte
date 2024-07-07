<script lang="ts">
import { ProgressRadial } from '@skeletonlabs/skeleton';
    let setMin:number = 2
    let min:number = setMin
    let sec:number = 0
    let timerId = setInterval( countdown, 1000)
    $: percent = ((min*60+sec)/(setMin*60))*100

    function countdown(){
        if ( min == 0 && sec==0){
            clearTimeout(timerId)
            //timer completes
        }
        else if ( sec == 0){
            min--
            sec=59
        }
        else{
            sec--
        }
    }
    
    function formatNumber(num: number): string {
        return num.toString().padStart(2, '0');
    }
</script>

<ProgressRadial value={percent}>{formatNumber(min)}:{formatNumber(sec)}</ProgressRadial>

