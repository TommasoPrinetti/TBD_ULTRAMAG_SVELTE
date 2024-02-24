<script>
  // issue_container.svelte
  import SingleIssue from '$components/issue_container/single_issue.svelte';

  import Divider from '$components/issue_container/divider.svelte';

  import SingleCard from './single_card.svelte';

  import issuesData from "$lib/issues.json";

  let issueNumber = '';

  // console.log("issuesData:", issuesData)

  // webresources TRANSFORMATION
  function transformPath(pathWithAlias) {
    return pathWithAlias.replace('$webresources', 'src/lib/webresources/');
  }

  const transformedIssuesData = issuesData.map(issue => ({
    ...issue,
    issueCover: transformPath(issue.issueCover)
  }));

  // Create a Map to hold categories and their issues
  const issuesByCategory = new Map();

  // Populate the Map with categorized issues
  transformedIssuesData.forEach(issue => {
    const category = issue.issueCategory;
    if (!issuesByCategory.has(category)) {
      issuesByCategory.set(category, []);
    }
    issuesByCategory.get(category).push(issue);
  });
 
 
</script>

{#each Array.from(issuesByCategory.entries()) as [category, issues]}
  <div class="issues_container" id="ISSUES">
    <Divider bind:SectionName={category} />
    <section>
      {#each issues as issue (issue.issueNumber)}
        {#if category === 'issues' || category === 'publications'}
          <SingleIssue 
            issueTitle={issue.issueTitle} 
            issuePrice={issue.issuePrice}
            issueHref={issue.issueHref}
            issueCover={issue.issueCover}
            ultraHoverImg={issue.ultraHoverImg || ''} />
        {:else if category === 'special projects'}
          <SingleCard 
            issueTitle={issue.issueTitle} 
            issueHeroText={issue.issueHeroText}
            issueHref={issue.issueHref}
            issueCover={issue.issueCover}
            />
        {/if}
      {/each}
    </section>
  </div>
{/each}

