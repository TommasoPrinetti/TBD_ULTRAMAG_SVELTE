<script>
    export let ArticleImg;
    export let ArticleTitle;
    export let ArticleText;
    export let ArticleHref;
</script>

<article>
    <section>
        <div class="article_img_container">
            <img class="article_IMG" src={ArticleImg} alt="AltText">
        </div>

        <div class="article_text_container">
        
        <h2>
            {ArticleTitle}
        </h2>

        <p3>
            {ArticleText}
        </p3>

        <a class="button" href={ArticleHref}>
            <p2> 
                READ THE WHOLE ARTICLE
            </p2>
        </a>

        </div>
    </section>
</article>