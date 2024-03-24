import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
    {
		slug: 'unannouncedVideoGame',
		color: '#5e95e3',
		description:
			'WIP',
		shortDescription:
			'WIP',
		links: [{ to: 'https://kaenirr.com', label: 'Placeholder' }],
		logo: Assets.Unknown,
		name: 'Unannounced video game',
		period: {
			from: new Date(2024,2,1)
		},
		skills: getSkills('blender', 'substancePainter', 'unity', 'photonQuantum'),
		type: 'Video Game'
	},
];

export const title = 'Projects';
	