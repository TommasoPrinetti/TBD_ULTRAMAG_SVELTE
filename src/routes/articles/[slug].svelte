<!-- routes/articles/[slug].svelte -->

<script context="module">
    import articlesData from './articles.json'; // Import the JSON file

    export async function load({ params }) {
        const { slug } = params;
        
        console.log('Slug:', slug); // Debug log: Log the value of the slug parameter
        
        // Find the article in the articlesData object using the slug as the key
        const article = articlesData[slug];

        console.log('Articles Data:', articlesData); // Debug log: Log the articlesData object

        if (!article) {
            console.log('Article not found for slug:', slug); // Debug log: Log when article is not found
            return { status: 404 };
        }

        return {
            props: {
                article,
                slug
            }
        };
    }
</script>


<script>
    import Header from "../../components/header/header.svelte";
    import Footer from "../../components/footer/footer.svelte";
    import Article from "../../components/article/article.svelte";

    export let article;
    export let slug;

    // Ensure to access the article properties correctly for updating the document title
    document.title = article.ArticleTitle || ''; // Update the page title dynamically based on the article title
</script>

<Header />
<Article 
    ArticleImg={article.ArticleImg}
    ArticleTitle={article.ArticleTitle}
    ArticleText={article.ArticleText}
    ParentIssue={article.ParentIssue}
    TextImage={article.TextImage}
    showDidascalie={article.showDidascalie}
    RowsDidascalie={article.RowsDidascalie}
    showBibliografia={article.showBibliografia}
    RowsBibliografia={article.RowsBibliografia}
    Autore={article.Autore}
    Editor={article.Editor}
/>
<Footer />
