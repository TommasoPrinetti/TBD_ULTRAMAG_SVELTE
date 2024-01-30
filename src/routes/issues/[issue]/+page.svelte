<script>
    // Import the components you need
    import CowElement from '../../../components/issue_page/cow-element.svelte';
    import IssueHero from '../../../components/issue_page/issue-hero.svelte';
    import MagGallery from '../../../components/issue_page/mag-gallery.svelte';
    import Header from '../../../components/header/header.svelte';
    import ArticleListContainer from '../../../components/issue_page/article_list_container.svelte';
  
    // Import the articles data from the JSON file
    import articlesData from "../../../lib/articles.json";
  
    // Export the article prop from the load function
    export let article;
  
    // Log the article prop
    console.log("article prop:", article);
  </script>
  
  <Header />
  <IssueHero />
  <MagGallery />
  <CowElement />
  {#if article}
    <h1>{article.ArticleTitle}</h1>
    <img src={article.ArticleImg} alt="Article image" />
    <h2>{article.section}</h2>
    <p>{article.ArticleText}</p>
  {/if}
  <ArticleListContainer {articlesData}/>
  