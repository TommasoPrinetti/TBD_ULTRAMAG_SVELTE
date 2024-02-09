import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
        alias: {
            // Alias configuration as per the updated documentation
            $webresources: '/Users/tommasoprinetti/Documents/TBD-SVELTE-FINAL/tbd_ultramag_svelte/src/lib/webresources',
            $components: 'src/components',
            $routes: 'src/routes',
            $types: 'src/typefaces',
            $issues: 'src/routes/issues/',
            $articles: 'src/routes/issues/[issue]/articles'
        }
    }
};

export default config;
