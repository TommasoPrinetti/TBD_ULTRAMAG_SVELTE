
<script>
   export let callToAction = "CLICK ME TO READ"
    export let MagGalleryImg1
    export let MagGalleryImg2
    export let MagGalleryImg3
    export let MagGalleryImg4
</script>

<gallery class="default_appear">
    <h2>    
        {callToAction}
    </h2>
    <section>
        <a id="image1">
            <img src={MagGalleryImg1} alt="">
        </a>
        <a id="image2">
            <img src={MagGalleryImg2} alt="">
        </a>
        <a id="image3">
            <img src={MagGalleryImg3} alt="">
        </a>
        <a id="image4">
            <img src={MagGalleryImg4} alt="">
        </a>
    </section>
    
</gallery>