<script>
  // this is [issues]/page.svelte
    // Import the components you need
    import CowElement from '../../../components/issue_page/cow-element.svelte';
    import IssueHero from '../../../components/issue_page/issue-hero.svelte';
    import MagGallery from '../../../components/issue_page/mag-gallery.svelte';
    import Header from '../../../components/header/header.svelte';

    import Footer from '../../../components/footer/footer.svelte'
    import IssueArticle from "../../../components/issue_page/issue-article.svelte";
    import Divider from '../../../components/issue_container/divider.svelte';
  
    // Export the props from the load function
    export let data;
    console.log("Page - Issue:", data);

    console.log("Articles", ...data.props.articles);

    // A derived array of unique section names
    $: sectionNames = Array.from(new Set(data.props.articles.map(article => article.SectionName)));
  </script>
  
<Header/>
  <IssueHero {...data.props.issue}/>
  <MagGallery {...data.props.issue}/>
  <CowElement {...data.props.issue}/>

  <div class="article_list_container" id="ARTICLES">
    {#each sectionNames as sectionName}
      <Divider SectionName={sectionName} />
      {#each data.props.articles.filter(article => article.SectionName === sectionName) as article}
        <IssueArticle {...article} />
      {/each}
    {/each}
  </div>

<Footer />
  
