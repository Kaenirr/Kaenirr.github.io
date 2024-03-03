<script lang="ts">
	import NavBar from '../lib/components/NavBar/NavBar.svelte';
	import BottomBar from "../lib/components/BottomBar.svelte";
	import { onHydrated, theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';
	import GlobalStyles from "../../static/global.css";
	import '$lib/index.scss';
	import 'virtual:uno.css'

	onMount(() => onHydrated());
</script>

<div class={`body contents ${$theme ? 'theme-dark' : 'theme-light'}`}>
	<NavBar />
	<div class="content container">	<slot /></div>
	<BottomBar></BottomBar>
</div>


<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 0px 0px;
	}

	.body { 
		margin: 0px;
		background-color: var(--main);
		color: var(--main-text);
		font-family: var(--text-f);
		display: flex;
		flex-direction: column;
		transition-duration: 200ms;

		letter-spacing: 1px;

		min-height: 100vh;
	}

	:global(p) {
		margin: 0px;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		margin: 5px 0px;
	}
</style>