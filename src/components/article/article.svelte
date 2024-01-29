<script>
    export let ArticleImg
    export let ArticleTitle
    export let ArticleText
    export let ParentIssue

    export let TextImage
    export let showDidascalie = false;
    export let RowsDidascalie = [];

    export let showBibliografia = true;
    export let RowsBibliografia = [];

    export let Autore
    export let Editor

    import LogoImg from "../../WEBRESOURCES/IDENTITY_IMAGES/tbd_LOGO.webp"
    import BuyButton from "../../components/buy_buttons.svelte"
</script>

<hero>
    <section>

        <div class="heroimgcontainer">
            <img class="heroimgcontainer" src={ArticleImg} alt={ArticleTitle}>
        </div>

        <div class="herotextcontainer">
            <h1>
                {ArticleTitle}
            </h1>

            <h3>
                ../ {ParentIssue}
            </h3>

            <p2>
                {ArticleText}
            </p2>

            <div style="display: flex; flex-direction: row; gap: 15px;">
                <a class="button">
                    <p2>
                        #ARTICLE
                    </p2>
                </a>

                <a class="button">
                    <p2>
                        #{ParentIssue}
                    </p2>
                </a>
            </div>
        </div>
    </section>
</hero>

<article_2>
    <section>
        <div class="side_menu">
            <div class="index_container">
                <div class="index">
                    <a href=""><h3>ARTICLES</h3></a>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 2">
                            <path d="M0 0.555664H330"/>
                        </svg>
                    <a href="ISSUE_1_ANIMAL_TURN_ISSUE.HTML"><p3> #01: THE ANIMAL TURN ISSUE </p3></a>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 2">
                            <path d="M0 0.555664H330"/>
                        </svg>
                    <a href="ISSUE_1_UPON_THE_ORCHID_PAINTER.HTML"><p3> #02: DELL'ORCHIDEA PITTRICE </p3></a>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 2">
                            <path d="M0 0.555664H330"/>
                        </svg>
                    <a href="ISSUE_1_OVERCOMING_CAGES.HTML"><p3> #03: SUPERARE LE GABBIE </p3></a>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 2">
                            <path d="M0 0.555664H330"/>
                        </svg>
                    <a href="ISSUE_1_IMMERSIVE_EXPERIENCE.HTML"><p3> #04: ESPERIENZE IMMERSIVA </p3></a>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 2">
                            <path d="M0 0.555664H330"/>
                        </svg>
                    <a href="ISSUE_1_ENEA_LEFONS.HTML"><p3> #05: INTERVISTA ENEA LEFONS </p3></a>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 2">
                            <path d="M0 0.555664H330"/>
                        </svg>
                    <a href="ISSUE_1_ORNAMENTAL_IMMERSIVITY.HTML"><p3> #06: CONTRO L'IMMERSIVO ORNAMENTALE </p3></a>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 2">
                            <path d="M0 0.555664H330"/>
                        </svg>
                    <a href="ISSUE_1_ON_MUTATION.HTML"><p3> #07: DEL MUTARE DELLE FORME </p3></a>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 2">
                            <path d="M0 0.555664H330"/>
                        </svg>
                </div>

                <div class="buybuttons">
                    <BuyButton />
                    <BuyButton />
                    <BuyButton />
                    
                </div>
            </div>
            
                <img src={LogoImg}>
                    <div class="index_container">
                        <div class="index">
                            <p3>
                                Parte di: <span> <d2 style="font-style: italic;">TBD {ParentIssue} </d2></span>
                            </p3>

                            <p3>
                                Scritto da: <span> <d2 style="font-style: italic;">{Autore}</d2></span>
                            </p3>

                            <p3>
                                Editing di: <span> <d2 style="font-style: italic;">{Editor} </d2></span>
                            </p3>
                        </div>
                    </div>
        </div>

        <read>
            <div style="display: flex; flex-direction: column; gap: var(--spacing_s);">
                <h2>
                    {ArticleTitle}
                </h2>
                <p2>
                    {ArticleText}
                </p2>
            </div>

            <img src={TextImage} alt="TextImage">

            <d2>
                {#if showDidascalie}
                    <span style="font-weight: 800;">Didascalie:</span>
                {/if}
                <br>
                {#each RowsDidascalie as didascalia}
                    <p>{didascalia}</p>
                {/each}
            </d2>
            
            <d2>
                {#if showBibliografia}
                    <span style="font-weight: 800;">Bibliografia:</span>
                {/if}
                <br>
                {#each RowsBibliografia as bibliografia}
                    <p>{bibliografia}</p>
                {/each}
            </d2>

        </read>
    </section>
</article_2>