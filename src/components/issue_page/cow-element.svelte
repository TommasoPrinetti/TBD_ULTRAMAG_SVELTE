<script>
    export let CowElementText
    export let CowElementImg
    export let CowImgDidascalia

    export let UltraCowElementText
    export let UltraCowElementTitle

    export let UltraGallery1
    export let UltraGallery2
    export let UltraGallery3
    export let UltraGallery4
    export let UltraGallery5
    export let UltraGallery6
    export let UltraGallery7
    export let UltraGallery8
    export let UltraGallery9
    export let UltraGallery10

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