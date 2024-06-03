<script>
    export let articleImg;
    export let articleTitle;
    export let articleText;
    export let articleName;
    export let parentIssue;

    import { goto } from '$app/navigation';

</script>

<article>
    <section>
        <div class="article_img_container">
            <img class="article_IMG" src={articleImg} alt="AltText">
        </div>

        <div class="article_text_container">
        
        <h2>
            {articleTitle}
        </h2>

        <p3>
            {articleText}
        </p3>

        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="button" on:click={() => { goto(`./${parentIssue}/articles/${articleName}`); }}>
            <p2> 
                READ ALL
            </p2>
        </a>
        
        
        </div>
    </section>
</article>