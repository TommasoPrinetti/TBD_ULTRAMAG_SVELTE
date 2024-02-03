<script>
    import '$lib/styles/style.css';

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