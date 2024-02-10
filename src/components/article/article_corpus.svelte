<script>

    export let articleTitle;
    export let showDidascalie;
    export let showBibliografia;
    export let rowsBibliografia;
    export let rowsDidascalie;
    export let autore;
    export let editor;
    export let parentIssue;
    export let issueNumber = parentIssue;
    export let article;

    import BuyButtons from "$components/buy_buttons.svelte";
    import { onMount } from 'svelte';
    import articlesData from '$lib/articles.json';
    import BuyingSlider from "../sliders/buying_slider.svelte";

    import ArticleGallery from "./article_gallery.svelte";
    import ArticleImg from "./article_img.svelte";
    import ArticleText from "./article_text.svelte";
    
    const TbdLogo = '/IDENTITY_IMAGES/tbd_LOGO.webp';

    let relatedArticles = [];

    onMount(() => {
        if (article && 'parentIssue' in article) {
            relatedArticles = articlesData.filter(a => a.parentIssue === article.parentIssue);
        } else {
            
        }
    });

    console.log("RelatedArticles:",relatedArticles)

    export let articleContent = { };


    //// SLIDER OPENING

    import issuesData from "$lib/issues.json";

    console.log("issuesData", issuesData);
    let currentIssueData = issuesData.find(issue => issue.issueNumber === issueNumber);
    console.log("currentIssueData", currentIssueData);

    let isSliderOpen = false;

    function handleSliderToggle() {
    isSliderOpen = !isSliderOpen;
    console.log("PREMUTO DI QUA")
    }

</script>

<article_2>
    <section>
        <div class="side_menu">
            <div class="index_container">
                <div class="index">
                    {#each relatedArticles as relatedArticle}
                        <a href={`/issues/${relatedArticle.parentIssue}/articles/${relatedArticle.articleName}`}>
                            <p3>{relatedArticle.articleTitle}</p3>
                        </a>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 2">
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
                    {#if key.startsWith('p')}
                        <ArticleText paragraph={articleContent[key]} />
                    {:else if key.startsWith('img')}
                        <ArticleImg imagePath={articleContent[key]} />
                    {:else if key.startsWith('gallery')}
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
                  {#each rowsBibliografia as bibliografia}
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
  issueNumber={issueNumber} />