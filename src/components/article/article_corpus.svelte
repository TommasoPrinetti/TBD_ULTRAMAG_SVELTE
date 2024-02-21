<script>
    // Directly export the individual properties expected from the article object
    export let articleTitle;
    export let showDidascalie;
    export let showBibliografia;
    export let autore;
    export let editor;
    export let parentIssue;
    export let issueNumber;
    export let bibliografie;
    export let didascalie;
    
    export let articleContent = {};
    let relatedArticles = [];
    let rowsDidascalie = [];
    let rowsBibliografie = [];
    let currentIssueData = {};

    
    import { onMount } from 'svelte';

    // NAVIGATIONAL
    import { goto } from '$app/navigation';
    function navigateToArticle(relatedArticle) {
        goto(`../../../issues/${relatedArticle.parentIssue}/articles/${relatedArticle.articleName}`);
    }

    import articlesData from '$lib/articles.json';
    import issuesData from '$lib/issues.json';

    import BuyButtons from "$components/buy_buttons.svelte";
    import BuyingSlider from "../sliders/buying_slider.svelte";
    import ArticleGallery from "./article_gallery.svelte";
    import ArticleImg from "./article_img.svelte";
    import ArticleText from "./article_text.svelte";
    const TbdLogo = '/IDENTITY_IMAGES/tbd_LOGO.webp';
    let isSliderOpen = false;

    
    onMount(() => {
        relatedArticles = articlesData.filter(a => a.parentIssue === parentIssue && a.articleName !== articleTitle); 
        currentIssueData = issuesData.find(issue => issue.issueNumber === issueNumber);
        if (didascalie) {
        rowsDidascalie = didascalie.split('*').filter(Boolean);
        }
        
        if (bibliografie) {
        rowsBibliografie = bibliografie.split('*').filter(Boolean);
        }
    });

    console.log("ROWS",rowsBibliografie)
    console.log("Didascalie", didascalie)

    function handleSliderToggle() {
        isSliderOpen = !isSliderOpen;
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
                        <a on:click={() => navigateToArticle(relatedArticle)} style="cursor: pointer;">
                            <p3>#{0}{index+1}: {relatedArticle.articleTitle}</p3>
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
                                Parte di: <span> <d2 style="font-style: italic;">TBD {parentIssue} </d2></span>
                            </p3>

                            <p3>
                                Scritto da: <span> <d2 style="font-style: italic;">{autore}</d2></span>
                            </p3>

                            <p3>
                                Editing di: <span> <d2 style="font-style: italic;">{editor} </d2></span>
                            </p3>
                        </div>
                    </div>
        </div>

        <read>
            <div style="display: flex; flex-direction: column; gap: var(--spacing_s);">
                <h2>
                    {articleTitle}
                </h2>

                {#each Object.keys(articleContent) as key (key)}
                    {#if key.startsWith('p') && articleContent[key]}
                        <ArticleText paragraph={articleContent[key]} />
                        {:else if key.startsWith('img') && articleContent[key]}
                            <ArticleImg imagePath={articleContent[key]} />
                        {:else if key.startsWith('gallery') && articleContent[key]}
                            <ArticleGallery galleryFolderPath={articleContent[key]}/>
                    {/if}
                {/each}
                
            </div>

            <d2>
                {#if showDidascalie}
                    <span style="font-weight: 800;">Didascalie:</span>
                    <br>
                    {#each rowsDidascalie as didascalia, index}
                        <p>[{index + 1}] {didascalia}</p>
                    {/each}
                {/if}
            </d2>
            
            <d2>
                {#if showBibliografia}
                    <span style="font-weight: 800;">Bibliografia:</span>
                    <br>
                    {#each rowsBibliografie as bibliografia}
                        <p>● {bibliografia}</p>
                    {/each}
                {/if}
            </d2>

        </read>
    </section>
</article_2>

<BuyingSlider
  {isSliderOpen}
  issueCover={currentIssueData?.issueCover}
  issuePrice={currentIssueData?.issuePrice}
  issueNumber={issueNumber}
/>