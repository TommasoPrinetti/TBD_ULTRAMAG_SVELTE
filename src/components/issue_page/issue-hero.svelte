<script>
    // This is issue-hero.svelte
    export let issueNumber
    export let issueTitle
    export let issueHeroText
    export let issueThumbnail
    export let UltraissueTitle
    export let UltraissueHeroText
    export let UltraissueThumbnail

    import BuyButtons from "../buy_buttons.svelte";
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
                <BuyButtons />
                <BuyButtons />
                <BuyButtons />
            </div>
        </div>
        
        <div class="heroimgcontainer">
            <img class="heroimgcontainer" src={issueThumbnail} alt="">
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