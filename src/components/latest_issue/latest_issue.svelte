<script>
  import { onMount } from 'svelte';
  import issuesData from "$lib/issues.json";
  const latestIssue = issuesData.find(issue => issue.isLatestIssue === true)

  import BuyButtons from '../buy_buttons.svelte';
  import BuyingSlider from '../sliders/buying_slider.svelte';

  // Initialize exported variables
  export let issueHref = '';
  export let issueTitle = '';
  export let issueCover = '';
  export let issueHeroText = '';
  export let latestFloatingLogoPath = '';

  let isSliderOpen = false;

  // Function to find and set the latest issue data
  function setLatestIssueData() {
    const latestIssue = issuesData.find(issue => issue.isLatestIssue === true);
    if (latestIssue) {
      issueHref = latestIssue.issueHref;
      issueTitle = latestIssue.issueTitle;
      issueCover = latestIssue.issueCover;
      issueHeroText = latestIssue.issueHeroText;
      latestFloatingLogoPath = latestIssue.latestFloatingLogoPath;
    }
    console.log('issueCover', issueCover )
  }

  onMount(() => {
    setLatestIssueData();
  });

  function handleSliderToggle() {
    isSliderOpen = !isSliderOpen;
  }

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
        <div class="buybuttons" style="transform: rotate(0%);">
          {#each [1] as _}
              <BuyButtons on:toggle={handleSliderToggle} />
          {/each}
        </div>
      </div>

      <p2>
        {issueHeroText}
      </p2>
    </div>
  
</last_issue>

<BuyingSlider
  {isSliderOpen}
  issueCover={latestIssue?.issueCover}
  issuePrice={latestIssue?.issuePrice}
  issueNumber={latestIssue?.issueNumber}
/>
