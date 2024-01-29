<script>

    import CowElement from '../../components/issue_page/cow-element.svelte';
    import IssueHero from '../../components/issue_page/issue-hero.svelte';
    import MagGallery from '../../components/issue_page/mag-gallery.svelte';

    import Header from '../../components/header/header.svelte';
    import ArticleListContainer from '../../components/issue_page/article_list_container.svelte';
    
    // Import the articles data from the JSON file
    import articlesData from "../articles/articles.json";

</script>
    

<Header />
<IssueHero />
<MagGallery />
<CowElement />
<ArticleListContainer {articlesData}/>




