<script>

    import LogoImg from '../../../../../WEBRESOURCES/IDENTITY_IMAGES/tbd_LOGO.webp';
    import ArticleHero from '../../../../../components/article/article_hero.svelte';
    import BuyButton from '../../../../../components/buy_buttons.svelte';

    import Header from "../../../../../components/header/header.svelte";
    import ArticleCorpus from '../../../../../components/article/article_corpus.svelte';

    export let data;

    // console.log("Props", ...data.props.article);

    const articles = data.props.article;
    console.log("Page.svelte", articles)

</script>

<Header/>

<ArticleHero {...data.props.article}/>
<ArticleCorpus {...data.props.article}/>