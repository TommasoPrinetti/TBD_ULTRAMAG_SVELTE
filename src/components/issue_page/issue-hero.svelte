<script>
    // This is issue-hero.svelte
    export let issueNumber
    export let issueTitle
    export let issueHeroText
    export let issueThumbnail
    export let UltraissueTitle
    export let UltraissueHeroText
    export let UltraissueThumbnail

    export let issueCover;
    export let issuePrice;

    import issuesData from "$lib/issues.json";
    let currentIssueData = issuesData.find(issue => issue.issueNumber === issueNumber);

    import BuyButtons from '$components/buy_buttons.svelte';
    import BuyingSlider from '../sliders/buying_slider.svelte';

    let isSliderOpen = false;

  function handleSliderToggle() {
    isSliderOpen = !isSliderOpen;
    console.log("PREMUTO DI QUA")
  }
  
</script>


<hero id="ISSUE" class="default_appear">
    <section id="READ THE WHOLE ARTICLE">           
        <div class="herotextcontainer"> 
            <h1>
                {issueTitle}
            </h1>

            <h3>
                ../ {issueNumber}
            </h3>

            <p2>
                {issueHeroText}
            </p2>

            <div class="buybuttons">
                {#each [1, 2, 3] as _}
                    <BuyButtons on:toggle={handleSliderToggle} />
                {/each}
            </div>
        </div>
        
        <div class="heroimgcontainer">
            <img class="heroimgcontainer" src={issueThumbnail} alt={issueNumber}>
        </div>

    </section>
</hero>

<hero class="ultra_appear">
    <section id="READ THE WHOLE ARTICLE">           
        <div class="herotextcontainer"> 
            <h1>
                {UltraissueTitle}
            </h1>

            <h3>
                ../ {issueNumber}_ULTRA
            </h3>

            <p2>
                {UltraissueHeroText}
            </p2>
        </div>
        
        <div class="heroimgcontainer">
            <img class="heroimgcontainer" src={UltraissueThumbnail}>
        </div>

    </section>
</hero>

<BuyingSlider
  {isSliderOpen}
  issueCover={currentIssueData?.issueCover}
  issuePrice={currentIssueData?.issuePrice}
  issueNumber={issueNumber} />