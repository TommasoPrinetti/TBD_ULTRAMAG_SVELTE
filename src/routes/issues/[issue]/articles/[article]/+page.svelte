<script>
    import ArticleHero from '$components/article/article_hero.svelte';
    import Header from "$components/header/header.svelte";
    import ArticleCorpus from '$components/article/article_corpus.svelte';
    import Footer from '$components/footer/footer.svelte'
    import Ultrabutton from '../../../../../components/ULTRABUTTON/ultrabutton.svelte';

    export let data;

    // console.log("Props", ...data.props.article);

    const article = data.props.article;


</script>

<Header headerVar='ARTICLES'/>

<ArticleHero {...article}/>
<ArticleCorpus {...article}/>
<Footer />

<Ultrabutton />