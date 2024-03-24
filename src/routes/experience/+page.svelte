<script lang="ts">
	import ExperienceCard from '$lib/components/ExperienceCard/ExperienceCard.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import { items, title } from '@data/experience';
	import type { Experience } from '$lib/types';
	import { isBlank } from '@riadh-adrani/utils';

	let result: Array<Experience> = [...items];

    import CommonPage from '$lib/components/CommonPage.svelte';

</script>

<CommonPage {title}>
    <div class="col items-center relative mt-10 flex-1">
        {#each result as job, index (job.slug)}
        <div
            class={`flex ${
                index % 2 !== 0 ? 'flex-row' : 'flex-row-reverse'
            } relative items-center w-full my-[10px]`}
        >
            <div class="flex-1 hidden lg:flex" />
            <div class="hidden lg:inline p-15px bg-[var(--main)] rounded">
                <UIcon icon="i-carbon-condition-point" classes="" />
            </div>
            <div class="flex-1 col items-stretch">
                <ExperienceCard experience={job} />
            </div>
        </div>
    {/each}
    </div>
</CommonPage>