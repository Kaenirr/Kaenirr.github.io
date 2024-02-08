<script>
    export let link = 'https://www.somewhere.com';
    export let imageName = 'image.svg';
    export let imageDescription = 'imageDescription';


    function jumpToPage(){
        window.open(link,"_blank")
    }
  </script>
  
  <style>
    button {
      background-color: transparent;
      border: none;
      color: white;
      width: 150px; 
      height: 150px;
      margin: 4px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      cursor: pointer;
      transition-duration: 0.4s;
    }

    button img {
      vertical-align: middle;
    }
  </style>
  
  <button on:click={jumpToPage}>
    <img src={imageName} alt={imageName} style="width: 100%; height: auto;"/>
  </button>
  