// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

declare module '*.md' {
	const content: string;
	export default content;
}
