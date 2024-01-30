<!-- routes/articles/+page.svelte -->

<script>
    import Article from "../../../../../components/article/article.svelte";
    import Header from "../../../../../components/header/header.svelte";

    // Import the articles data from the JSON file
    import articlesData from "../../../../../lib/articles.json";
  
    // Export the article prop from the load function
    export let article;

    // Log the article prop
    console.log("article prop:", article);

</script>

<Header />

{#each Object.keys(articlesData) as slug}
    <Article 
        ArticleImg={articlesData[slug].ArticleImg}
        ArticleTitle={articlesData[slug].ArticleTitle}
        ArticleText={articlesData[slug].ArticleText}
        ParentIssue={articlesData[slug].ParentIssue}
        TextImage={articlesData[slug].TextImage}
        showDidascalie={articlesData[slug].showDidascalie}
        RowsDidascalie={articlesData[slug].RowsDidascalie}
        showBibliografia={articlesData[slug].showBibliografia}
        RowsBibliografia={articlesData[slug].RowsBibliografia}
        Autore={articlesData[slug].Autore}
        Editor={articlesData[slug].Editor}
    />
{/each}
