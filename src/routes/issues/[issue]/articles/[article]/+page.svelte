<script>
    import ArticleHero from '$components/article/article_hero.svelte';
    import Header from "$components/header/header.svelte";
    import ArticleCorpus from '$components/article/article_corpus.svelte';
    import Footer from '$components/footer/footer.svelte'

    /** @type {import('./$types').PageData} */
    export let data;

    const article = data.props.article;

    export let headerVar='ARTICLES';

    //console.log("article", article)

</script>

<Header {headerVar}/>

<ArticleHero {...article}/>
<ArticleCorpus {...article}/>
<Footer />