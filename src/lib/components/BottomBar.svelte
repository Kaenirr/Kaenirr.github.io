<script>
    import Button from './SqrImgLinkButton.svelte';
</script>

<div class="bottom-bar">
    <h1>This page is WIP</h1>
   <!-- <h1>My socials:</h1>
    <Button link="https://www.instagram.com/kaenirr3d/" imageName="instragramIcon.svg" imageDescription="Instagram icon"></Button>
    <Button link="https://www.artstation.com/kaenirr" imageName="artstationIcon.svg" imageDescription="Artstation icon"></Button> -->
    
</div>

<style lang="scss">
    .bottom-bar {
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0px;
    z-index: 10;
    padding: 0px 10px;
    height: 50px;
    border-bottom: 1px solid var(--secondary);
    background-color: var(--main);

    &-item {
        text-decoration: none;
        font-weight: 400;
        padding: 10px 20px;
        color: inherit;
        display: flex;
        align-items: center;
        border-bottom: 3px solid transparent;

        &-label {
            margin-left: 10px;

            @media (max-width: 950px) {
                & {
                    display: none;
                }
            }
        }

        &:hover {
            background-color: var(--main-hover);
        }
    }
}
</style>