<script lang="ts">
    import { base } from "$app/paths";
	import { items } from '../../data/navbar';
	import { theme, toggleTheme } from '$lib/stores/theme';

	import UIcon from '../Icon/UIcon.svelte';

	let expanded = false;

	const toggleExpanded = (v?: boolean) => {
		if (typeof v === 'undefined') {
			expanded = !expanded;
		} else {
			expanded = v;
		}
	};
</script>

<div class="nav-bar">
	<nav class="container flex flex-row items-center text-sm">
		<a 
            href="{base}/"
            class="nav-bar-left decoration-none w-auto Smd:w-150px lg:w-auto row flex flex-row items-center cursor-pointer px-4 text-[var(--secondary-text)] self-stretch hover:bg-[color:var(--main-hover)]">
            <span
			class="ml-2 text-md font-bold hidden md:inline overflow-hidden whitespace-nowrap text-ellipsis"
			>Kaenirr
			</span>
        </a>
        <div class="flex-1 block overflow-hidden md:hidden whitespace-nowrap text-ellipsis text-center">
			Kaenirr
		</div>
		<div class="flex-row flex-1 self-center h-full justify-center hidden md:flex">
			{#each items as item}
				<a href={`${base}${item.to}`} class="nav-bar-item !text-[var(--secondary-text)]">
					<span class="nav-bar-item-label">{item.title}</span>
				</a>
			{/each}
		</div>
		
		<div
			class="row h-full justify-center items-stretch m-l-auto md:m-l-0 w-auto md:w-150px gap-1 text-1.15em"
		>
			<div class="row hidden md:flex">
                <button
                class="bg-transparent text-1em border-none cursor-pointer hover:bg-[color:var(--main-hover)] text-[var(--secondary-text)] px-2"
                on:click={() => toggleTheme()}
            >
				{#if $theme}
					<span>Dark</span>
				{:else}
					<span>Light</span>
				{/if}
                </button>
			</div>

			<div class="col-center md:hidden h-full hover:bg-[var(--main-hover)] cursor-pointer">
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					class={`nav-bar-mobile-btn col-center ${expanded ? 'nav-bar-mobile-btn-expanded' : ''}`}
					on:keydown
					on:keyup
					on:click={() => toggleExpanded()}
				/>
			</div>
			
		</div>
	</nav>

	<div class={`nav-bar-mobile ${expanded ? 'nav-bar-mobile-open' : ''} md:hidden`}>
		<div class="flex-col flex-1 self-center h-full justify-center m-t-7">
			{#each items as item}
				<a
					href={`${base}${item.to}`}
					class="nav-bar-item !text-[var(--secondary-text)] gap-5"
					on:click={() => toggleExpanded(false)}
				>
					<span class="">{item.title}</span>
				</a>
			{/each}
		</div>
		<div class="col gap-2 m-t-7">
			<button
				class="bg-transparent text-1em border-none cursor-pointer px-6 py-3 gap-2 row hover:bg-[color:var(--main-hover)] text-[var(--secondary-text)] px-2"
				on:click={() => toggleTheme()}
			>
				{#if $theme}
					<span>Dark</span>
				{:else}
					<span>Light</span>
				{/if}
			</button>
		</div>
	</div>

</div>



<style lang="scss">
    	.nav-bar {
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

	.nav-bar-mobile {
		z-index: -1;
		max-height: calc(100vh - 50px - 1px);
		min-height: calc(100vh - 50px - 1px);
		width: 100%;
		position: absolute;
		background-color: var(--main);
		top: 51px;
		transform: translateY(-100vh);
		transition-property: transform opacity;
		transition: 400ms ease;
		opacity: 0;

		&-open {
			opacity: 1;
			transform: translateY(0vh);
		}
	}
</style>

