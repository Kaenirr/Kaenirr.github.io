import { defineConfig, presetUno } from 'unocss';


export default defineConfig({

    presets: [
		presetUno()
    ],

    rules: [
        [/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
      ],

    shortcuts: [
		{
			col: 'flex flex-col',
			row: 'flex flex-row',

			'col-center': 'col justify-center items-center',
			'row-center': 'row justify-center items-center'
		}
	]
})