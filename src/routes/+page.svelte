<script>

    import Header from '$components/header/header.svelte';
    import Footer from '$components/footer/footer.svelte';
    import LandHero from '$components/landing_hero/landing_hero.svelte';
    import IssueContainer from '$components/issue_container/issue_container.svelte';
    import LatestIssue from '$components/latest_issue/latest_issue.svelte';
    import Ultrabutton from '$components/ULTRABUTTON/ultrabutton.svelte';
    import About from '$components/about/landingAbout.svelte';

    let contentPrev = "TBD, acronimo di “To Be Defined”, è un progetto editoriale che dal 2019 pubblica volumi tematici e collabora con artist* per la realizzazione di eventi a essi collegati. Il percorso critico di ogni numero si sviluppa a partire da fatti d’attualità definiti zeitgeisting, notizie o icone virali che rivelano lo spirito culturale del tempo. Ogni fatto è sintomo e/o coadiuvante di tematiche più ampie, trattate sotto forma di saggi scritti e contenuti visivi. A partire da un focus specifico sulla contemporaneità"

</script>

<svelte:head>
    <title>TBD ULTRAMAGAZINE</title>
  <meta name="description" content={contentPrev} />

  <meta property="og:site_name" content="TBD ULTRAMAGAZINE" />
  <meta property="og:locale" content="it" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content="TBD ULTRAMAGAZINE" />
  <meta property="og:description" content={contentPrev} />
  <meta property="og:image" content={`/IDENTITY_IMAGES/tbd_LOGO.webp`} />
  <meta property="og:image:alt" content="TBD ULTRAMAGAZINE" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="627" />
</svelte:head>

<Header />
<LandHero />
<LatestIssue />
<IssueContainer />
<About />
<Footer />

<Ultrabutton />