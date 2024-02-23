<script>
    const TbdLogo = '/IDENTITY_IMAGES/tbd_LOGO.webp';
    const ultraAboutImg = '/IDENTITY_IMAGES/ABOUT_ultra.png';
    const aboutRoute = '/about';
</script>

<about class="default_appear">
    <section id="ABOUT">
      <div class="about_text_container">
        <h1>
          ABOUT
        </h1>
        <p1>
          TBD - To Be Defined is an ultra-editorial project which provides the publication of a thematic magazine and the collaboration with artists for the realization of events related to it. Artists are invited to react to contents, theories and critical positions expressed in the magazine through the presentation of an action or an artwork.
        </p1>
        <a class="button" href={aboutRoute}>
          <p2>
            IL TEAM DI TBD
          </p2>

        </a>
      </div>
      
        <div class="about_image_container">
          <a href={aboutRoute}>
            <img src={TbdLogo} alt="">
          </a>
        </div>
    </section>
</about>

<about class="ultra_appear">
  
  <section id="ABOUT">
    <div class="about_text_container">
      <h2>
        ABOUT
      </h2>
      <p2>
        TBD - To Be Defined is an ultra-editorial project which provides the publication of a thematic magazine and the collaboration with artists for the realization of events related to it. Artists are invited to react to contents, theories and critical positions expressed in the magazine through the presentation of an action or an artwork.
      </p2>
      <a class="button" href={aboutRoute}>
        <p2>
          IL TEAM DI TBD
        </p2>
      </a>
    </div>
    
    <div class="about_image_container">
      <a href={aboutRoute}>
        <img src={ultraAboutImg} alt="">
      </a>
    </div>

  </section>
</about>