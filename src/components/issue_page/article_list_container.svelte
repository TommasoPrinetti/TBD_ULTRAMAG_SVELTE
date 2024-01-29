<script>
    import IssueArticle from "./issue-article.svelte";
    import Divider from '../../components/issue_container/divider.svelte';

    export let articlesData;

    // Function to get a unique list of sections
    function getSections() {
        return Array.from(new Set(Object.values(articlesData).map(article => article.section)));
    }

    // Function to filter articles based on section
    function filterArticlesBySection(section) {
        return Object.keys(articlesData)
            .filter(slug => articlesData[slug].section === section)
            .map(slug => articlesData[slug]);
    }
</script>

<div class="article_list_container" id="ARTICLES">
    {#each getSections() as section}
        <Divider SectionName={section}/>
        {#each filterArticlesBySection(section) as article}
            <IssueArticle 
                ArticleImg={article.ArticleImg}
                ArticleTitle={article.ArticleTitle}
                ArticleText={article.ArticleText}
            />
        {/each}
    {/each}
</div>