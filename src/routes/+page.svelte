<script lang="ts">
  export let data;
  $: ({user} = data)
  import { localName, count } from "../stores";
  let userName = $localName;
  let totalCyclesCompleted = $count;
  let quote = "loadsfdsfdf";
</script>

<main>
  <div class="leftdiv">
    <h1>
      Welcome Back <br /> <span class="redSpan">{userName}</span>!
    </h1>
    <p>
      You have completed a total of: <br />
      <span class="blockSpan">{totalCyclesCompleted} study-break cycles</span>
    </p>
    <p><span class="redSpan">Good Work</span> <br /> Lets add to that number</p>
    <a href="/focus">
      <button> Start Pomato Session</button>
    </a>
  </div>
  <div class="rightdiv"><img src="/assets/studying.png" alt="not working" /></div>
</main>

<style>
  main {
    @apply flex w-screen;
  }
  .leftdiv {
    @apply m-5 bg-surface-700 rounded-lg shadow-lg p-6 text-center w-1/2 pt-24 mx-4 flex flex-col;
  }
  .rightdiv {
    @apply m-5 bg-surface-700 rounded-lg shadow-lg p-6 text-center w-1/2 mx-4 flex flex-col;
  }
  h1 {
    @apply text-7xl font-bold;
  }
  p {
    @apply text-5xl text-white mb-4;
  }
  .redSpan {
    @apply text-primary-500;
  }

  .blockSpan {
    @apply flex p-2 bg-surface-800 font-bold text-center justify-center mt-4;
  }

  button {
    @apply w-full bg-primary-700 text-white text-3xl py-4 mt-10 rounded-xl hover:bg-success-600 transition duration-200;
  }
</style>
