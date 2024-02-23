<script>
  // this is [issues]/page.svelte
    
    import CowElement from '$components/issue_page/cow-element.svelte';
    import IssueHero from '$components/issue_page/issue-hero.svelte';
    import MagGallery from '$components/issue_page/mag-gallery.svelte';
    import Header from '$components/header/header.svelte';

    import Footer from '$components/footer/footer.svelte';
    import IssueArticle from '$components/issue_page/issue-article.svelte';
    import Divider from '$components/issue_container/divider.svelte';

    import Ultrabutton from '$components/ULTRABUTTON/ultrabutton.svelte';

    import Manifesto from '$components/manifesto.svelte';

    let headerVar = 'ISSUES';
  
    // Export the props from the load function
    export let data;
    //console.log("ISSUE", data.props.articles.parentIssue);
    // console.log("ARTICLE", data.props.articles);
    
    let sectionNames = [];

    //mapping tramite labels
    $: if (data && data.props && data.props.articles) {
      const labels = data.props.articles.map(article => article.sectionLabel);
      sectionNames = [...new Set(labels)];
    }
    
  </script>

<svelte:head>
  <title>{data.props.issue.issueTitle}</title>
  <meta name="description" content={data.props.issue.issueHeroText} />

  <meta property="og:site_name" content="TBD ULTRAMAGAZINE" />

  <meta property="og:locale" content="it" />

  <meta property="og:type" content="issue" />

  <meta property="og:title" content={data.props.issue.issueTitle} />
  <meta property="og:description" content={data.props.issue.issueHeroText} />
  <meta property="og:image" content={data.props.issue.issueThumbnail} />

  <meta property="og:image:alt" content={data.props.issue.issueTitle} />

  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="627" />
</svelte:head>
  
  <Header {headerVar}/>
  <IssueHero {...data.props.issue} id="ISSUE"/>

  <!-- Varianti delle varie pagine basati sul db -->

  {#if data.props.issue.layoutOption === 'Classic'}
    <MagGallery {...data.props.issue}/>
    <CowElement {...data.props.issue}/>
  {:else if data.props.issue.layoutOption === 'Manifesto'}
    <Manifesto {...data.props.issue} id="ABSTRACT"/>
  {:else if data.props.issue.layoutOption === 'Ibrido'}
    <MagGallery {...data.props.issue}/>
    <Manifesto {...data.props.issue} id="ABSTRACT"/>
    <CowElement {...data.props.issue}/>
  {/if}

    <!-- Per ora c'è solo un caso in cui c'è una pagina con dei video -->

  {#if data.props.issue.issueNumber === 'ISSUE3'}
    <div class="video_gallery">
      <section>
          <div class="single_video" id="video_#1">
              <div style="padding:100% 0 0 0;position:relative;">
                  <iframe src="https://player.vimeo.com/video/637629288?h=66b3ae91f8" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>
                  </iframe>
              </div>
              <script src="https://player.vimeo.com/api/player.js"></script>
          </div>
          <div class="single_video" id="video_#2">
              <div style="padding:100% 0 0 0;position:relative;">
                  <iframe src="https://player.vimeo.com/video/637612946?h=13fe136ba9" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>
                  </iframe>
              </div>
              <script src="https://player.vimeo.com/api/player.js"></script>
          </div>
      </section>
      <section>
          <div class="single_video" id="video_#1">
              <div style="padding:100% 0 0 0;position:relative;">
                  <iframe src="https://player.vimeo.com/video/637618840?h=94b5d22c38" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>
                  </iframe>
              </div>
              <script src="https://player.vimeo.com/api/player.js"></script>
          </div>
          <div class="single_video" id="video_#2">
              <div style="padding:100% 0 0 0;position:relative;">
                  <iframe src="https://player.vimeo.com/video/637623042?h=365c31a28b" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>
                  </iframe>
              </div>
              <script src="https://player.vimeo.com/api/player.js"></script>
          </div>
      </section>
    </div>
  {/if}

  <!-- CONTAINER degli articoli di ciascuna issue -->

  <div class="article_list_container" id="ARTICLES">
    {#each sectionNames as sectionName}
      <Divider SectionName={sectionName} />
      {#each data.props.articles.filter(article => article.sectionLabel === sectionName) as articleContent}
        <IssueArticle {...articleContent} />
      {/each}
    {/each} 
  </div>

<Footer />

{#if data.props.issue.isIssueUltra === true}
  <Ultrabutton />
{/if}
  
