<script>
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>Koru Digital | Glenn Bar - Front end web developer</title>
  <meta name="description" content="Front end web developer experienced in a range of roles. Based near Bristol in the South West of England.">
</svelte:head>

<slot></slot>

<Footer />

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    color: white;
    background-color: rgb(60, 68, 60);
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    line-height: 1.5;
  }
  :global(a) {
    color: white;
  }
  :global(#svelte) {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>