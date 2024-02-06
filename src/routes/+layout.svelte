<script lang="ts">
	import { base } from "$app/paths";
</script>

<nav>
	<div class="container">
		<ul>
			<li>
				<a href="{base}/">Kaenirr</a>
			</li>
			<li>
				<a href="{base}/myWork">MyWork</a>
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

<style>
	nav {
		background-color: #126ba3;
		color: white;
	}
	.container {
		display: flex;
	}
	ul {
		display: flex;
		margin: 0;
		margin-right: auto;
		list-style: none;
	}
	li {
		margin-left: 10px;
	}
	a {
		text-decoration: none;
		color: white;
	}
</style>
