<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  const TbdLogo = '/IDENTITY_IMAGES/tbd_LOGO.webp';
  export let headerVar = 'COMMON';

  let issueNumber = '';
  let issueHref = '';
  let issueCover = '';

  const logoHref = '/';

  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
  }

  // Questo serve a settare lo striscione in alto sull'ultima ISSUE automaticamente
  import issuesData from "$lib/issues.json";

  function setLatestIssueData() {
    const latestIssue = issuesData.find(issue => issue.isLatestIssue === true);
    if (latestIssue) {
      issueHref = latestIssue.issueHref;
      issueNumber = latestIssue.issueNumber;
      issueCover = latestIssue.issueCover;
    }
}

  onMount(() => {
    setLatestIssueData();
  });

  //Ripetizioni banner
  let repeatText;
  $: repeatCount = 100;
  $: if (issueNumber) {
    const baseText = ` © TBD ULTRAMAGAZINE - ${issueNumber} CALL FOR NARRATIVES - `;
    repeatText = baseText.repeat(repeatCount);
  }

</script>

<!-- Creare variante componente header -->
 
{#if headerVar === 'COMMON'}

  <header id={headerVar}>
      <a class="header_top" href='../../../issues/{issueNumber}'>
        <div class="banner">
          <p3> 
            {@html repeatText}
          </p3> 
        </div>
      </a>
      
      <div class="header_lower">
          <div class="header_buttons_container">
              <!-- svelte-ignore a11y-missing-attribute -->
              <a class="header_anchor" href="#LATEST">
                <p2> 
                    LATEST
                </p2>
              </a>

              <!-- svelte-ignore a11y-missing-attribute -->
              <a class="header_anchor" href="#ISSUES">
                <p2> 
                    ISSUES
                </p2>
              </a>

              <!-- svelte-ignore a11y-missing-attribute -->
              <a class="header_anchor" href="#ABOUT">
                <p2> 
                    ABOUT
                </p2>
              </a>
          </div>

          <a style="height: 100%; flex-shrink: 0" on:click={() => goto(logoHref)}>
              <img style="height: 100%;" src={TbdLogo} alt="TBDLogoImage">
          </a>

          <div class="header_burger_container">

              <div class="slider">
                <div class="black_slider"></div>
                <div class="white_slider"></div>
                <p3 class="IT">IT</p3>
                <p3 class="EN">EN</p3>
              </div>

              <!-- svelte-ignore a11y-missing-attribute -->
              <a class="headeranchors" style="align-items: center; vertical-align: middle;">
                <div class="burger-icon" on:click={toggleMenu}>
                    <div class="burger-line"></div>
                    <div class="burger-line"></div>
                    <div class="burger-line"></div>
                </div>
              </a>
          </div>
      </div>
  </header>

  {:else if headerVar === 'ARTICLES'}

    <header id={headerVar}>
      <a class="header_top" href='../../../issues/{issueNumber}'>
        <div class="banner">
          <p3> 
            {@html repeatText}
          </p3> 
        </div>
      </a>
      
      <div class="header_lower">

          <a style="height: 100%; flex-shrink: 0" on:click={() => goto(logoHref)}>
            <img style="height: 100%;" src={TbdLogo} alt="TBDLogoImage">
          </a>

          <div class="header_burger_container">

              <div class="slider">
                <div class="black_slider"></div>
                <div class="white_slider"></div>
                <p3 class="IT">IT</p3>
                <p3 class="EN">EN</p3>
              </div>

              <!-- svelte-ignore a11y-missing-attribute -->
              <a class="headeranchors" style="align-items: center; vertical-align: middle;">
                <div class="burger-icon" on:click={toggleMenu}>
                    <div class="burger-line"></div>
                    <div class="burger-line"></div>
                    <div class="burger-line"></div>
                </div>
              </a>
          </div>
      </div>
    </header>

  {:else if headerVar === 'ISSUES'}

    <header id={headerVar}>
      <a class="header_top" href='../../../issues/{issueNumber}'>
        <div class="banner">
          <p3> 
            {@html repeatText}
          </p3> 
        </div>
      </a>
      
      <div class="header_lower">
          <div class="header_buttons_container">
              <!-- svelte-ignore a11y-missing-attribute -->
              <a class="header_anchor" href="#ISSUE">
                <p2> 
                    ISSUE
                </p2>
              </a>

              <!-- svelte-ignore a11y-missing-attribute -->
              <a class="header_anchor" href="#ABSTRACT">
                <p2> 
                    ABSTRACT
                </p2>
              </a>

              <!-- svelte-ignore a11y-missing-attribute -->
              <a class="header_anchor" href="#ARTICLES">
                <p2> 
                    ARTICLES
                </p2>
              </a>
          </div>

          <a style="height: 100%; flex-shrink: 0" on:click={() => goto(logoHref)}>
              <img style="height: 100%;" src={TbdLogo} alt="TBDLogoImage">
          </a>

          <div class="header_burger_container">

              <div class="slider">
                <div class="black_slider"></div>
                <div class="white_slider"></div>
                <p3 class="IT">IT</p3>
                <p3 class="EN">EN</p3>
              </div>

              <!-- svelte-ignore a11y-missing-attribute -->
              <a class="headeranchors" style="align-items: center; vertical-align: middle;">
                <div class="burger-icon" on:click={toggleMenu}>
                    <div class="burger-line"></div>
                    <div class="burger-line"></div>
                    <div class="burger-line"></div>
                </div>
              </a>
          </div>
      </div>
    </header>
  
{/if}


<!-- Questo è il burger menu che spunta fuori -->
<div class="slide_in_container" class:open={isOpen}>

  <div class="slide_in_container_2">

      <div class="slide_in_horizontal">

          <div class="slide_in_latest_project">
              
            <div class="latest_project_mobile_container">
              <h3>
                {issueNumber}
              </h3>

              <div class="appear_mobile"> 
                  <a class="button" href={issueHref}>
                      <p3>
                        IS OUT NOW!
                      </p3>
                  </a> 
              </div>

            </div>

              <img src={issueCover} href={issueHref} alt="">

              <div class="disappear_mobile">
                  <a class="button" href="../../../issues/{issueNumber}">
                  <p3>
                      IS OUT NOW!
                  </p3>
                  </a> 
              </div>
          
              
          </div>

          <div class="slide_in_vertical">
              
              <div class="slide_in_threecard">

                  <!-- svelte-ignore a11y-missing-attribute -->
                  <div class="slide_in_card_vertical">
                      <a class="title_container" on:click={() => {goto('/#ISSUES'); toggleMenu(); }}>
                        <p1>
                          ISSUES:
                        </p1>
                      </a>
                    

                      <a class="arrow_container_slider">
                        <p2>
                          →
                        </p2>
                      </a>

                      <!-- svelte-ignore a11y-no-static-element-interactions -->
                      <div>
                          <!-- svelte-ignore a11y-click-events-have-key-events -->
                          <!-- svelte-ignore a11y-missing-attribute -->
                          <a on:click={() => { goto(`/issues/ISSUE1`); toggleMenu(); }} style="cursor: pointer;">
                              <p1> → 1ST Issue </p1>
                          </a>

                          <a on:click={() => { goto(`/issues/ISSUE2`); toggleMenu(); }} style="cursor: pointer;">
                              <p1> → 2ND Issue </p1>
                          </a>
                          
                          <a on:click={() => { goto(`/issues/ISSUE3`); toggleMenu(); }} style="cursor: pointer;">
                              <p1> → 3RD Issue </p1>
                          </a>

                          <a on:click={() => { goto(`/issues/ISSUE4_VOL_I`); toggleMenu(); }} style="cursor: pointer;">
                            <p1> → 4RD Issue_Vol I </p1>
                          </a>

                          <a on:click={() => { goto(`/issues/ISSUE4_VOL_II`); toggleMenu(); }} style="cursor: pointer;">
                            <p1> → 4RD Issue_Vol II </p1>
                          </a>

                          <a on:click={() => { goto(`/issues/ISSUE4_VOL_III`); toggleMenu(); }} style="cursor: pointer;">
                            <p1> → 4RD Issue_Vol III</p1>
                          </a>

                      </div>

                    </div>

                  <div class="slide_in_card_vertical">
                    <a class="title_container" on:click={() => { goto('/#ISSUES'); toggleMenu(); }}>
                      <p1>
                        PUBLICATIONS:
                      </p1>
                    </a>

                      <!-- svelte-ignore a11y-missing-attribute -->
                      <a class="arrow_container_slider">
                        <p2>
                          →
                        </p2>
                      </a>

                      <div>
                          <a on:click={() => { goto(`/issues/XPOST`); toggleMenu(); }}
                            style="cursor: pointer;" >
                              <p1> → X Post </p1>
                          </a>

                          <a on:click={() => { goto(`/issues/BLASTINGTHEORY`); toggleMenu(); }} style="cursor: pointer;">
                              <p1> → Blasting Theory </p1>
                          </a>
                      </div>
                  </div>

                  <div class="slide_in_card_vertical">
                      
                    <a class="title_container" on:click={() => { goto('/#ISSUES'); toggleMenu(); }}>
                      <p1>
                        SPECIAL PROJECTS:
                      </p1>
                    </a>

                      <a class="arrow_container_slider">
                        <p2>
                          →
                        </p2>
                      </a>

                      <div>
                          <a on:click={() => { goto(`/issues/FOREHEADVULVA`); toggleMenu(); }}>
                              <p1> → Forehead vulva </p1>
                          </a>

                          <a on:click={() => { goto(`/issues/LOOKATME_VOL_I`); toggleMenu(); }}>
                              <p1> → Look at me Vol.I </p1>
                          </a>
                          
                          <a on:click={() => { goto(`/issues/LOOKATME_VOL_II`); toggleMenu(); }}>
                              <p1> → Look at me Vol.II </p1>
                          </a>
                      </div>
                  </div>


              </div>
              
              <div class="slide_in_card_horizontal">
                  <a on:click={() => { goto('../../../about'); toggleMenu(); }}>
                      <h3>
                          ABOUT: COSA è TBD?
                      </h3>
                  </a>
              </div>

              <div class="slide_in_card_horizontal">
                <a href="https://www.instagram.com/tbd.ultramagazine/?next=%2Fmkhtrrjby%2Ffeed%2F&hl=it" 
                  target="_blank" 
                  on:click={toggleMenu}
                  rel="noopener noreferrer">
                  <h3>
                    INSTAGRAM
                  </h3>
                </a>
            </div>
              
          </div>

      </div>

      <footer>
          <section>
            <div class="footer_text_container">
                <p1>
                © TBD ULTRA MAGAZINE 2024
                </p1>
                <a href="mailto:info@tbdultramagazine.com">
                  <p3>
                    info@tbdultramagazine.com
                  </p3>
                </a>
            </div>
          </section>
      </footer>

  </div>
</div>