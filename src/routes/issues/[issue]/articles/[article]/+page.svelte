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

<svelte:head>
    <title>{article.articleTitle}</title>
  <meta name="description" content={article.articleText} />

  <meta property="og:site_name" content="TBD ULTRAMAGAZINE" />
  <meta property="og:locale" content="it" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={article.articleTitle} />
  <meta property="og:description" content={article.articleText} />
  <meta property="og:image" content={`${article.articleImg}`} />
  <meta property="og:image:alt" content={article.articleTitle} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="627" />
</svelte:head>

<Header {headerVar}/>

<ArticleHero {...article}/>
<ArticleCorpus key={article.articleTitle} {article} />
<Footer />