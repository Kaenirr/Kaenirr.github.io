<script>
  let images = [
    "MyWorkPreviewImages/preview1.png",
    "MyWorkPreviewImages/preview2.png",
  ];
</script>

<h1>Portfolio:</h1>
<div class="grid-container">
  {#each images as image}
    <img src={image} alt="Image from my portfolio"/>
  {/each}
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
    max-width: 500px;
    max-height: 500px;
  }
  .grid-container img {
    max-width: 100%; /* Ensure images don't exceed container width */
    max-height: 100%; /* Ensure images don't exceed container height */
    object-fit: cover; /* Maintain aspect ratio while filling the container */
  }
</style>
