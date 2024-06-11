<script>
    // article_corpus.svelte
    import { tick } from 'svelte';
    import { goto } from '$app/navigation';
    
    import articlesData from '$lib/articles_new.json';
    import issuesData from '$lib/issues_new.json';

    import BuyButtons from "$components/buy_buttons.svelte";
    import BuyingSlider from "$components/sliders/buying_slider.svelte";
    import ArticleGallery from "./article_gallery.svelte";
    import ArticleImg from "./article_img.svelte";

    $: relatedArticles = [];
    $: rowsDidascalie = [];
    $: rowsBibliografie = [];
    $: currentIssueData = {};
    $: isSliderOpen = false;

    $: reloadStatus = false;

    const TbdLogo = '/IDENTITY_IMAGES/tbd_LOGO.webp';

    export let article;
    
    // Derived properties for easier access
    let {articleTitle, showDidascalie, showBibliografia, autore, note_autore, parentIssue, issueNumber, bibliografie, didascalie, articleContent } = article;

    $: if (article) {
    ({ articleTitle, showDidascalie, showBibliografia, autore, note_autore, parentIssue, issueNumber, bibliografie, didascalie, articleContent } = article);
    }

    $: if (article) {
        ({ articleTitle, showDidascalie, showBibliografia, autore, note_autore, parentIssue, issueNumber, bibliografie, didascalie, articleContent } = article);

        relatedArticles = articlesData.filter(a => a.parentIssue === parentIssue && a.articleName !== articleTitle); 
        currentIssueData = issuesData.find(issue => String(issue.issueNumber) === String(article.parentIssue));

        if (didascalie) {
            rowsDidascalie = didascalie.split('*').filter(Boolean);
        }
        
        if (bibliografie) {
            rowsBibliografie = bibliografie.split('*').filter(Boolean);
        }
    }

    // console.log("Looking for issueNumber:", currentIssueData);

    function navigateToArticle(relatedArticle) {
        const url = `../../../issues/${relatedArticle.parentIssue}/articles/${relatedArticle.articleName}`;

        const opts = {
            replaceState: true,
            noScroll: false,
            keepFocus: true,
            invalidateAll: true,
        }

        goto(url, opts);

        reloadStatus = !reloadStatus
        tick();
    }

    function handleSliderToggle() {
        isSliderOpen = !isSliderOpen;
        // console.log("PREMUTO", isSliderOpen)
    }

    function closeSlider() {
      isSliderOpen = false;
      console.log("Slider is closed:",isSliderOpen )
    }

</script>

<article_2>
    <section>
            <div class="side_menu">
                <div class="index_container">
                    <div class="index">
                        <!-- svelte-ignore a11y-no-static-element-interactions -->
                        {#each relatedArticles as relatedArticle, index}
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <!-- svelte-ignore a11y-no-static-element-interactions -->
                            <!-- svelte-ignore a11y-missing-attribute -->
                            <a data-sveltekit-preload-data on:click={() => navigateToArticle(relatedArticle)} style="cursor: pointer;" data-sveltekit-reload>
                                <p3>#{0}{index+1}: {@html relatedArticle.articleTitle}</p3>
                            </a>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 1">
                                <path d="M0 0.555664H330"/>
                            </svg>
                        {/each}
                    </div>

                    <div class="buybuttons">
                        {#each [1, 2, 3] as _}
                            <BuyButtons on:toggle={handleSliderToggle} />
                        {/each} 
                    </div>
                </div>
                
                    <img src={TbdLogo} alt="">
                        <div class="index_container">
                            <div class="index">
                                <p3>
                                    <!-- Parte di: --> <span> <d2 style="font-style: italic;">TBD {parentIssue} </d2></span>
                                </p3>

                                <p3>
                                    <!-- Scritto da: --> <span> <d2 style="font-style: italic;">{autore}</d2></span>
                                </p3>

                                <p3>
                                    <!-- Editing di: --> <span> <d2 style="font-style: italic;">{note_autore} </d2></span>
                                </p3>
                            </div>
                        </div>
            </div>

        <read id="READ">
            <div style="display: flex; flex-direction: column; gap: var(--spacing_s);">
                <h2>
                    {articleTitle}
                </h2>

                {#each Object.keys(articleContent) as key (key)}
                    {#if key.startsWith('p') && articleContent[key]}
                        <!-- Render each line of the paragraph separately with <p> tags -->
                        {#each articleContent[key].split('\n') as line}
                            <p2>{@html line}</p2>
                        {/each}
                    {:else if key.startsWith('img') && articleContent[key]}
                        <!-- Render an image -->
                        <ArticleImg imagePath={articleContent[key]} />
                    {:else if key.startsWith('gallery') && articleContent[key]}
                        <!-- Render a gallery -->
                        <ArticleGallery galleryFolderPath={articleContent[key]}/>
                    {/if}
                {/each}
                
            </div>
            
                <d2>
                    {#if showDidascalie}
                        <span style="font-weight: 800;">Didascalie:</span>
                        <br>
                        <br>
                        {#each rowsDidascalie as didascalia, index}
                            <p>[{index + 1}] {@html didascalia}</p>
                        {/each}
                    {/if}
                </d2>
                
                <d2>
                    {#if showBibliografia}
                        <span style="font-weight: 800;">Bibliografia:</span>
                        <br>
                        <br>
                        {#each rowsBibliografie as bibliografia}
                            <p>● {@html bibliografia}</p>
                        {/each}
                    {/if}
                </d2>

            

        </read>
    </section>
</article_2>


<BuyingSlider
{isSliderOpen}
issueCover={currentIssueData.issueCover}
issuePrice={currentIssueData.issuePrice}
{issueNumber} />


<style>
    d2 > p {
        margin: 0px;
        padding: 0px;
    }

</style>