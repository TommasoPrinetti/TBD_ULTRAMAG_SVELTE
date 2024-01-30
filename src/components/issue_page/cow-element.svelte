<script>
    let CowElementText
    let CowElementImg
    let CowImgDidascalia

    let UltraCowElementText
    let UltraCowElementTitle

    let UltraGallery1
    let UltraGallery2
    let UltraGallery3
    let UltraGallery4
    let UltraGallery5
    let UltraGallery6
    let UltraGallery7
    let UltraGallery8
    let UltraGallery9
    let UltraGallery10

</script>

<section id="ABSTRACT" class="default_appear"> 
    <!-- TYPO -->
    <div class="responsive-container">
        <p2>
            {CowElementText}
        </p2>
    </div>

    <!-- IMG -->
    <div class="imgcontainer">
        <img style="width: 100%;" src={CowElementImg} alt="">
        <d1>{CowImgDidascalia}</d1>
    </div>
</section>

<section id="ABSTRACT" class="ultra_appear"> 
    <!-- TYPO -->
    <div class="responsive-container">
        <p2>
            <strong>{UltraCowElementTitle}</strong>
            <br>
            <br>
            {UltraCowElementText}
        </p2>
    </div>

    <!-- IMG -->
    <div class="imgcontainer">
        <gallery>
            <section>
                <a id="image1">
                    <img src={UltraGallery1}>
                </a>
                <a id="image2">
                    <img src={UltraGallery2}>
                </a>
                <a id="image3">
                    <img src={UltraGallery3}>
                </a>
                <a id="image4">
                    <img src={UltraGallery4}>
                </a>
                <a id="image5">
                    <img src={UltraGallery5}>
                </a>
                <a id="image6">
                    <img src={UltraGallery6}>
                </a>
                <a id="image7">
                    <img src={UltraGallery7}>
                </a>
                <a id="image8">
                    <img src={UltraGallery8}>
                </a>
                <a id="image9">
                    <img src={UltraGallery9}>
                </a>
                <a id="image10">
                    <img src={UltraGallery10}>
                </a>
            </section>

            <div class="switch_container">
                <p1>NEXT →</p1>
            </div>
        </gallery>
    </div>
</section>