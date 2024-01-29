<script>
import Header from '../components/header/header.svelte';
import Footer from '../components/footer/footer.svelte';
import LandHero from '../components/landing_hero/landing_hero.svelte';
import IssueContainer from '../components/issue_container/issue_container.svelte';
import LatestIssue from '../components/latest_issue/latest_issue.svelte';
</script>

<Header />
<LandHero />
<LatestIssue/>
<IssueContainer />
<Footer />

<a href="/issue-pages">
    <button>Go to Issue Page</button>
</a>