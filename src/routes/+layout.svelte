<script>
    import '../style.css'

    import articlesData from './articles/articles.json';

    export const load = () => {
        return {
            props: {
                articles: articlesData
            }
        };
    };
</script>

<slot />