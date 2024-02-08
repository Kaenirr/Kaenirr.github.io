<script lang="ts">
	import { base } from "$app/paths";
	import BottomBar from "./../Components/BottomBar.svelte";
	import GlobalStyles from "../../static/global.css";
</script>

<nav>
	<div class="container">
		<ul>
			<li>
				<a href="{base}/">Kaenirr</a>
			</li>
			<li>
				<a href="{base}/myWork">My Work</a>
			</li>
			<li>
				<a href="{base}/aboutMe">About Me</a>
			</li>
		</ul>
	</div>
</nav>
<div class="container">
	<slot />
</div>
<BottomBar></BottomBar>

<style>
	nav {
		background-color: #126ba3;
		font-size: 2em;
		color: white;
	}
	.container {
		display: flex;
	}
	ul {
		display: flex;
		margin: 0;
		margin-right: auto;
		padding-left: 0%;
		list-style: none;
	}
	li {
		margin-right: 10px;
	}
	a {
		text-decoration: none;
		color: white;
	}
</style>
