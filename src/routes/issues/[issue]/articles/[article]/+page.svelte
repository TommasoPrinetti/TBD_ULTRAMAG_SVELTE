<script>
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';

    import ArticleHero from '$components/article/article_hero.svelte';
    import Header from "$components/header/header.svelte";
    import ArticleCorpus from '$components/article/article_corpus.svelte';
    import Footer from '$components/footer/footer.svelte'

    /** @type {import('./$types').PageData} */
    export let data;
    export let article;

    $: article = data.props.article;

    export let headerVar='ARTICLES';

    //console.log("article", article)

    

    let isUltra = false;
    let isFirstLoad = true;

    onMount(() => {
        updateBodyClass();
    });

    function updateBodyClass() {
        if (typeof window !== "undefined") {
            const bodyClassList = document.body.classList;
            if (isUltra) {
                bodyClassList.add('ultra');
                bodyClassList.remove('default');
            } else {
                bodyClassList.add('default');
                bodyClassList.remove('ultra');
            }
            isFirstLoad = false;
        }
    }
</script>

<Header {headerVar}/>

<ArticleHero {...article}/>
<ArticleCorpus key={article.articleTitle} {article} />
<Footer />