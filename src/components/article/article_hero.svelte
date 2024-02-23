<script>

 export let articleImg
 export let articleTitle
 export let parentIssue
 export let articleText


</script>

<hero>
    <section>

        <div class="heroimgcontainer">
            <img class="heroimgcontainer" src={articleImg} alt="">
        </div>

        <div class="herotextcontainer">
            <h1>
                {articleTitle}
            </h1>

            <h3>
                ../ {parentIssue}
            </h3>

            <p2>
                {articleText}
            </p2>

            <div style="display: flex; flex-direction: row; gap: 15px;">
                <!-- svelte-ignore a11y-missing-attribute -->
                <a class="button">
                    <p2>
                        #ARTICLE
                    </p2>
                </a>

                <!-- svelte-ignore a11y-missing-attribute -->
                <a class="button" >
                    <p2>
                        #{parentIssue}
                    </p2>
                </a>
            </div>
        </div>
    </section>
</hero>
