<script>
  import { onMount } from 'svelte';

  import issuesData from "$lib/issues.json";

  // Initialize exported variables
  export let issueHref = '';
  export let issueTitle = '';
  export let issueCover = '';
  export let issueHeroText = '';
  export let latestFloatingLogoPath = '';

  // Function to find and set the latest issue data
  function setLatestIssueData() {
    const latestIssue = issuesData.find(issue => issue.isLatestIssue === 'TRUE');
    if (latestIssue) {
      issueHref = latestIssue.issueHref;
      issueTitle = latestIssue.issueTitle;
      issueCover = latestIssue.issueCover;
      issueHeroText = latestIssue.issueHeroText;
    }
  }

  onMount(() => {
    setLatestIssueData();
  });

</script>

<last_issue id="LATEST">
      
    <h2 id="HEROTEXT_FILLING">
      Issue {issueTitle} Out now.
    </h2>

    <!-- svelte-ignore a11y-missing-attribute -->
    <img class="last_issue_floating" src={latestFloatingLogoPath}>
    <img class="last_issue_img" src={issueCover} alt="Last Issue" href={issueHref}>

    <div class="last_issue_text">
      <div style="display: flex; flex-direction: row; gap: var(--spacing_s);">
        <a class="button" style="z-index: 2;" href={issueHref}>
          <p2>READ MORE</p2>
        </a>
        <a class="buybutton" id="BUY_ACTIVE" style="z-index: 2;">
          <p2>BUY NOW</p2>
        </a>
      </div>

      <p2>
        {issueHeroText}
      </p2>
    </div>
  
</last_issue>
