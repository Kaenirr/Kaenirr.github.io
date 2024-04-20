import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

import blender from '../md/blender.md?raw';
import substancePainter from '../md/substancePainter.md?raw';
import unity from '../md/unity.md?raw';
import photonFusion from '../md/photonFusion.md?raw';
import photonQuantum from '../md/photonQuantum.md?raw';
import unreal from '../md/unreal.md?raw';
import csharp from '../md/cSharp.md?raw';


const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: '3D Software', slug: '3D' }),
	defineSkillCategory({ name: 'Game Engines', slug: 'gameEng' }),
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' }),
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

	export const items = [
		defineSkill({
			slug: 'blender',
			color: 'orange',
			description: blender,
			logo: Assets.Blender,
			name: 'Blender',
			category: '3D'
		}),
		defineSkill({
			slug: 'substancePainter',
			color: 'orange',
			description: substancePainter,
			logo: Assets.SubstancePainter,
			name: 'Substance Painter',
			category: '3D'
		}),
		defineSkill({
			slug: 'unity',
			color: 'white',
			description: unity,
			logo: Assets.Unity,
			name: 'Unity',
			category: 'gameEng'
		}),
		defineSkill({
			slug: 'photonFusion',
			color: 'white',
			description: photonFusion,
			logo: Assets.PhotonFusion,
			name: 'Photon Fusion',
			category: 'framework'
		}),
		defineSkill({
			slug: 'photonQuantum',
			color: 'white',
			description: photonQuantum,
			logo: Assets.PhotonQuantum,
			name: 'Photon Quantum',
			category: 'framework'
		}),
		defineSkill({
			slug: 'unreal',
			color: 'black',
			description: unreal,
			logo: Assets.Unreal,
			name: 'Unreal Engine',
			category: 'gameEng'
		}),
		defineSkill({
			slug: 'csharp',
			color: 'blue',
			description: csharp,
			logo: Assets.Csharp,
			name: 'C#',
			category: 'pro-lang'
		}),
	] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			console.log(item.category);
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
