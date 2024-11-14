<script>
  import { localStudyTime, localBreakTime, localName } from "../../../stores";
  let name = $localName;
  let studyTime = $localStudyTime;
  let breakTime = $localBreakTime;

  // @ts-ignore
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Updated settings:", { name, studyTime, breakTime });
    localStudyTime.set(studyTime);
    localBreakTime.set(breakTime);
    localName.set(name)
    alert("Settings updated!");
  };
</script>

<main>
  <div class="maindiv">
    <div class="w-full justify-center">
      <h2>Settings</h2>
    </div>
    <form on:submit={handleSubmit}>
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" bind:value={name} required />
      </div>
      <div>
        <label for="studyTime">Study Time (minutes):</label>
        <input type="number" id="studyTime" bind:value={studyTime} required />
      </div>
      <div>
        <label for="breakTime">Break Time (minutes):</label>
        <input type="number" id="breakTime" bind:value={breakTime} required />
      </div>
      <button type="submit"> Save Settings </button>
    </form>
  </div>
  <div class="maindiv">
    <img src="/assets/settings.png" alt="settings icon" class="flex rounded-lg">
  </div>
</main>

<style>
  main {
    @apply flex w-screen;
  }
  label {
    @apply block text-white text-2xl font-bold my-2 bg-primary-500 p-2 mx-32 rounded-xl flex justify-center;
  }
  div {
    @apply w-full;
  }
  .maindiv {
    @apply m-5 w-1/2 p-6 bg-surface-700 rounded-lg shadow-md flex-col;
  }
  input {
    @apply w-full border border-surface-900 bg-surface-900 h-12 rounded text-center focus:outline-none focus:ring focus:ring-primary-400;
  }

  h2 {
    @apply text-4xl font-semibold flex w-full justify-center p-5 rounded-lg bg-surface-900 my-14;
  }

  button {
    @apply w-full bg-primary-700 text-white text-3xl py-4 mt-10 rounded-xl hover:bg-success-600 transition duration-200;
  }
</style>
