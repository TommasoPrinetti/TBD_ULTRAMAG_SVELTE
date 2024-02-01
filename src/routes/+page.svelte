<script>
    import Header from '../components/header/header.svelte';
    import Footer from '../components/footer/footer.svelte';
    import LandHero from '../components/landing_hero/landing_hero.svelte';
    import IssueContainer from '../components/issue_container/issue_container.svelte';
    import LatestIssue from '../components/latest_issue/latest_issue.svelte';
    import Ultrabutton from '../components/ULTRABUTTON/ultrabutton.svelte';
    import About from '../components/about/landingAbout.svelte'
    import SingleCard from '../components/issue_container/single_card.svelte';
</script>

<svelte:head>
	<script src="/Users/tommasoprinetti/Documents/TBD-SVELTE-FINAL/tbd_ultramag_svelte/src/lib/general.js"></script>
</svelte:head>

<Header />
<LandHero />
<LatestIssue/>
<IssueContainer />
<About />
<Footer />

<Ultrabutton />