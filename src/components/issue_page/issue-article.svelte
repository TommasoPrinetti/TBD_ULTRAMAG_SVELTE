<script>
    export let ArticleImg;
    export let ArticleTitle;
    export let ArticleText;
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

        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="button">
            <p2> 
                READ THE WHOLE ARTICLE
            </p2>
        </a>

        </div>
    </section>
</article>