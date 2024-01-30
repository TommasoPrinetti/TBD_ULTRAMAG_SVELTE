<script>
  // this is [issues]/page.svelte
    // Import the components you need
    import CowElement from '../../../components/issue_page/cow-element.svelte';
    import IssueHero from '../../../components/issue_page/issue-hero.svelte';
    import MagGallery from '../../../components/issue_page/mag-gallery.svelte';
    import Header from '../../../components/header/header.svelte';
    import ArticleListContainer from '../../../components/issue_page/article_list_container.svelte';
    import Footer from '../../../components/footer/footer.svelte'
  
    // Export the props from the load function
    export let issue;
    console.log("Page - Issue:", issue);
  </script>

  
<Header />
  <IssueHero {issue} />
<Footer />
  
