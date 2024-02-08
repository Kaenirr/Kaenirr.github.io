<script>
    import Button from './SqrImgLinkButton.svelte';
</script>

<style>
    .bottom-bar {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #126ba3;
        color: white;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>

<div class="bottom-bar">
    <h1>My socials:</h1>
    <Button link="https://www.instagram.com/kaenirr3d/" imageName="instragramIcon.svg" imageDescription="Instagram icon"></Button>
    <Button link="https://www.artstation.com/kaenirr" imageName="artstationIcon.svg" imageDescription="Artstation icon"></Button>
</div>