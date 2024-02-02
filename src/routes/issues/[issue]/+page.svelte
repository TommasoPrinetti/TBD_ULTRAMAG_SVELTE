<script>
  // this is [issues]/page.svelte
    // Import the components you need
    import CowElement from '../../../components/issue_page/cow-element.svelte';
    import IssueHero from '../../../components/issue_page/issue-hero.svelte';
    import MagGallery from '../../../components/issue_page/mag-gallery.svelte';
    import Header from '../../../components/header/header.svelte';

    import Footer from '../../../components/footer/footer.svelte';
    import IssueArticle from '../../../components/issue_page/issue-article.svelte';
    import Divider from '../../../components/issue_container/divider.svelte';

  
    // Export the props from the load function
    export let data;
    console.log("ISSUE", data.props.issue);
    console.log("ARTICLE", data.props.articles);
    
    let sectionNames = [];

    // Derived state to get unique section labels
    $: if (data && data.props && data.props.articles) {
      const labels = data.props.articles.map(article => article.sectionLabel);
      sectionNames = [...new Set(labels)];
    }

  console.log("Articles", data.props.articles);
  </script>
  
  <Header/>
  <IssueHero {...data.props.issue}/>
  <MagGallery {...data.props.issue}/>
  <CowElement {...data.props.issue}/>

  <div class="article_list_container" id="ARTICLES">
    {#each sectionNames as sectionName}
      <Divider SectionName={sectionName} />
      {#each data.props.articles.filter(article => article.sectionLabel === sectionName) as articleContent}
        <IssueArticle {...articleContent} />
      {/each}
    {/each} 
  </div>

<Footer />
  
