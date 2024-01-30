<script>
    // This is issue-hero.svelte
    export let IssueNumber
    export let IssueTitle
    export let IssueHeroText
    export let IssueThumbnail

    export let UltraIssueNumber
    export let UltraIssueTitle
    export let UltraIssueHeroText
    export let UltraIssueThumbnail

    import BuyButtons from "../buy_buttons.svelte";

    // console.log("Issue Hero - IssueNumber:", IssueNumber); // Log IssueNumber
    //console.log("Issue Hero - IssueTitle:", IssueTitle); // Log IssueTitle
    //console.log("Issue Hero - IssueHeroText:", IssueHeroText); // Log IssueHeroText
    //console.log("Issue Hero - IssueThumbnail:", IssueThumbnail); // Log IssueThumbnail
    //console.log("Issue Hero - UltraIssueNumber:", UltraIssueNumber); // Log UltraIssueNumber
    //console.log("Issue Hero - UltraIssueTitle:", UltraIssueTitle); // Log UltraIssueTitle
    //console.log("Issue Hero - UltraIssueHeroText:", UltraIssueHeroText); // Log UltraIssueHeroText
    //console.log("Issue Hero - UltraIssueThumbnail:", UltraIssueThumbnail); // Log UltraIssueThumbnail

</script>


<hero id="ISSUE" class="default_appear">
    <section id="READ THE WHOLE ARTICLE">           
        <div class="herotextcontainer"> 
            <h1>
                {IssueNumber}
            </h1>

            <h3>
                ../ {IssueTitle}
            </h3>

            <p2>
                {IssueHeroText}
            </p2>

            <div class="buybuttons">
                <BuyButtons />
                <BuyButtons />
                <BuyButtons />
            </div>
        </div>
        
        <div class="heroimgcontainer">
            <img class="heroimgcontainer" src={IssueThumbnail} alt="">
        </div>

    </section>
</hero>

<hero class="ultra_appear">
    <section id="READ THE WHOLE ARTICLE">           
        <div class="herotextcontainer"> 
            <h1>
                {UltraIssueTitle}
            </h1>

            <h3>
                ../ {IssueNumber}_ULTRA
            </h3>

            <p2>
                {UltraIssueHeroText}
            </p2>
        </div>
        
        <div class="heroimgcontainer">
            <img class="heroimgcontainer" src={UltraIssueThumbnail}>
        </div>

    </section>
</hero>