<script>
    import '$lib/styles/style.css';
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';

    inject({ mode: dev ? 'development' : 'production' });


    import articlesData from '$lib/articles.json';

    export const load = () => {
        return {
            props: {
                articles: articlesData
            }
        };
    };
</script>

<slot />