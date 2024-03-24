import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Kaenirr';

export const description =
	'I am Martin, a 3D artist/programmer consumed by my desire to learn everything.';

export const links: Array<{ platform: Platform; link: string }> = [
	{
		platform: Platform.GitHub,
		link: 'https://github.com/Kaenirr'
	},
	{
		platform: Platform.Instagram,
		link: 'https://www.instagram.com/kaenirr3d/'
	},
	{
		platform: Platform.Artsation,
		link: 'https://www.artstation.com/kaenirr'
	},
	{
		platform: Platform.Email,
		link: 'kaenirr@gmail.com'
	},

];

export const skills = getSkills('blender','unity','csharp');
