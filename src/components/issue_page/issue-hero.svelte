<script>
    // This is issue-hero.svelte
    export let IssueNumber
    export let IssueTitle
    export let IssueHeroText
    export let IssueThumbnail
    export let UltraIssueTitle
    export let UltraIssueHeroText
    export let UltraIssueThumbnail

    import BuyButtons from "../buy_buttons.svelte";
</script>


<hero id="ISSUE" class="default_appear">
    <section id="READ THE WHOLE ARTICLE">           
        <div class="herotextcontainer"> 
            <h1>
                {IssueTitle}
            </h1>

            <h3>
                ../ {IssueNumber}
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