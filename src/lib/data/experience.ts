import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience, type Link} from '../types';

const trisgramLink: Link = {
    to: 'https://trisgram.com',
    label: 'Website',
    newTab: true 
};

export const items: Array<Experience> = [
	{
		slug: 'trisgram',
		company: 'Trisgram',
		description: 'Making assets and programming game mechanics',
		contract: ContractType.FullTime,
		type: 'Game development',
		location: 'Pilsen',
		period: { from: new Date(2022,9,1) },
		skills: getSkills('unity', 'blender', 'csharp'),
		name: '3D artist/Gameplay programmer',
		color: 'blue',
		links: [trisgramLink],
		logo: Assets.Trisgram,
		shortDescription: 'Making assets and programming game mechanics'
	},
];

export const title = 'Experience';
