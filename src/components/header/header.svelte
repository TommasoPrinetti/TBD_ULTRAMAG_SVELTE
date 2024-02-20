<script>
  import { onMount } from 'svelte';

  const TbdLogo = '/IDENTITY_IMAGES/tbd_LOGO.webp';
  export let headerVar = 'COMMON';

  export let issueNumber;
  export let issueHref = '';

  const logoHref = '/';

  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
  }

  // Questo serve a settare lo striscione in alto sull'ultima ISSUE automaticamente

  import { goto } from '$app/navigation';

  import issuesData from "$lib/issues.json";

  function setLatestIssueData() {
    const latestIssue = issuesData.find(issue => issue.isLatestIssue === 'TRUE');
    if (latestIssue) {
      issueHref = latestIssue.issueHref;
      issueNumber = latestIssue.issueNumber;
    }
  }

  onMount(() => {
    setLatestIssueData();
  });

  //Ripetizioni banner
  let repeatText;
  $: repeatCount = 100;
  $: if (issueNumber) {
    const baseText = `© TBD ULTRAMAGAZINE - ${issueNumber} CALL FOR NARRATIVES -`;
    repeatText = baseText.repeat(repeatCount);
  }

</script>

<!-- Creare variante componente header -->
 
{#if headerVar === 'COMMON'}

  <header id={headerVar}>
      <a class="header_top" href={issueHref}>
        <div class="banner">
          <p3> 
            {@html repeatText}
          </p3> 
        </div>
      </a>
      
      <div class="header_lower">
          <div class="header_buttons_container">
              <!-- svelte-ignore a11y-missing-attribute -->
              <a class="header_anchor" data-target="#LATEST">
                <p2> 
                    LATEST
                </p2>
              </a>

              <!-- svelte-ignore a11y-missing-attribute -->
              <a class="header_anchor" data-target="#ISSUES">
                <p2> 
                    ISSUES
                </p2>
              </a>

              <!-- svelte-ignore a11y-missing-attribute -->
              <a class="header_anchor" data-target="#ABOUT">
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
      <a class="header_top" href="../../">
        <text>
          <p3>  
            {@html repeatText}
          </p3> 
        </text>
      </a>
      
      <div class="header_lower">

          <a style="height: 100%; flex-shrink: 0" href={logoHref}>
              <img style="height: 100%;" src={TbdLogo} alt="">
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
                <div class="burger-icon">
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
    <a class="header_top" href={issueHref}>
      <div class="banner">
        <p3> 
          {@html repeatText}
        </p3> 
      </div>
    </a>
    
    <div class="header_lower">
        <div class="header_buttons_container">
            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="header_anchor" data-target="#ISSUE">
              <p2> 
                  ISSUE
              </p2>
            </a>

            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="header_anchor" data-target="#ABSTRACT">
              <p2> 
                  ABSTRACT
              </p2>
            </a>

            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="header_anchor" data-target="#ARTICLES">
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

              <img src="/ISSUE_COVERS/ISSUE-5.webp" href={issueHref}>

              <div class="disappear_mobile">
                  <a class="button" href="/issues/ISSUE5">
                  <p3>
                      IS OUT NOW!
                  </p3>
                  </a> 
              </div>
          
              
          </div>

          <div class="slide_in_vertical">
              
              <div class="slide_in_threecard">

                  <div class="slide_in_card_vertical">
                      <p1>
                          ISSUES:
                      </p1>

                      <a class="arrow_container_slider" href="index.html#ISSUES">
                        <p2>
                          →
                        </p2>
                      </a>

                      <div>
                          <a href="ISSUE_1.HTML">
                              <p1> → 1ST Issue </p1>
                          </a>

                          <a href="ISSUE_2.HTML">
                              <p1> → 2ND Issue </p1>
                          </a>
                          
                          <a href="ISSUE_3.HTML">
                              <p1> → 3RD Issue </p1>
                          </a>

                          <a href="ISSUE_4_VOL1.HTML">
                            <p1> → 4RD Issue_Vol I </p1>
                          </a>

                          <a href="ISSUE_4_VOL2.HTML">
                            <p1> → 4RD Issue_Vol II </p1>
                          </a>

                          <a href="ISSUE_4_VOL3.HTML">
                            <p1> → 4RD Issue_Vol III</p1>
                          </a>

                      </div>

                  </div>

                  <div class="slide_in_card_vertical">
                      <p1>
                          PUBLICATIONS:
                      </p1>

                      <a class="arrow_container_slider" href="index.html#PUBLICATIONS">
                        <p2>
                          →
                        </p2>
                      </a>

                      <div>
                          <a href="TBD_X_POST.HTML">
                              <p1> → X Post </p1>
                          </a>

                          <a href="TBD_BLASTINGTHEORY.HTML">
                              <p1> → Blasting Theory </p1>
                          </a>
                      </div>
                  </div>

                  <div class="slide_in_card_vertical">
                      
                        <p1>
                          SPECIAL PROJECTS:
                        </p1>
                      

                      <a class="arrow_container_slider" href="index.html#SPECIAL-PROJECTS">
                        <p2>
                          →
                        </p2>
                      </a>

                      <div>
                          <a href="TBD_FOREHEADVULVA.HTML">
                              <p1> → Forehead vulva </p1>
                          </a>

                          <a href="LOOKATMEVOL1.HTML">
                              <p1> → Look at me Vol.I </p1>
                          </a>
                          
                          <a href="LOOKATMEVOL2.HTML">
                              <p1> → Look at me Vol.II </p1>
                          </a>
                      </div>
                  </div>


              </div>
              
              <div class="slide_in_card_horizontal">
                  <a href="TBD_ABOUT.html">
                      <h3>
                          ABOUT: COSA è TBD?
                      </h3>
                  </a>
              </div>

              <div class="slide_in_card_horizontal">
                <a href="https://www.instagram.com/tbd.ultramagazine/?next=%2Fmkhtrrjby%2Ffeed%2F&hl=it">
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