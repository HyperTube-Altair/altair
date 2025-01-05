import { defineConfig } from '@hey-api/openapi-ts';

// eslint-disable-next-line import/no-unused-modules
export default defineConfig({
	input: 'http://localhost/api/v1/schema/?format=json',
	output: {
		path: 'src/client',
		format: 'prettier',
		lint: 'eslint',
	},
	client: '@hey-api/client-axios',
	experimentalParser: true,
});
