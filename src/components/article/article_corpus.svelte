<script>
    export let articleTitle;
    export let articleText;
    export let textImage;
    export let showDidascalie;
    export let showBibliografia;
    export let rowsBibliografia;
    export let rowsDidascalie;
    export let autore;
    export let editor;
    export let parentIssue;

    import BuyButton from "../buy_buttons.svelte";
    import LogoImg from '../../WEBRESOURCES/IDENTITY_IMAGES/tbd_LOGO.webp'
</script>
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
            
                <img src={LogoImg} alt="">
                    <div class="index_container">
                        <div class="index">
                            <p3>
                                Parte di: <span> <d2 style="font-style: italic;">TBD {parentIssue} </d2></span>
                            </p3>

                            <p3>
                                Scritto da: <span> <d2 style="font-style: italic;">{autore}</d2></span>
                            </p3>

                            <p3>
                                Editing di: <span> <d2 style="font-style: italic;">{editor} </d2></span>
                            </p3>
                        </div>
                    </div>
        </div>

        <read>
            <div style="display: flex; flex-direction: column; gap: var(--spacing_s);">
                <h2>
                    {articleTitle}
                </h2>
                <p2>
                    {articleText}
                </p2>
            </div>

            <img src={textImage} alt="TextImage">

            <d2>
                {#if showDidascalie}
                  <span style="font-weight: 800;">Didascalie:</span>
                  <br>
                  {#each rowsDidascalie as didascalia}
                    <p>{didascalia}</p>
                  {/each}
                {/if}
              </d2>
              
              <d2>
                {#if showBibliografia}
                  <span style="font-weight: 800;">Bibliografia:</span>
                  <br>
                  {#each rowsBibliografia as bibliografia}
                    <p>{bibliografia}</p>
                  {/each}
                {/if}
              </d2>

        </read>
    </section>
</article_2>