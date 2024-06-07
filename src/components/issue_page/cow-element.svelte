<script>
    export let CowElementText
    export let CowElementImg
    export let CowImgDidascalia

    export let UltraCowElementText
    export let UltraCowElementTitle

    export let UltraGalleryFolder
    export let lengthNumber = 10;

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
        <d1>{@html CowImgDidascalia}</d1>
    </div>
</section>

<section id="ABSTRACT" class="ultra_appear"> 
    <!-- TYPO -->
    <div class="responsive-container">
        <p2>
            <strong>{UltraCowElementTitle}</strong>
            <br>
            <br>
            {@html UltraCowElementText}
        </p2>
    </div>

    <!-- IMG -->
    <div class="imgcontainer">
        <gallery>
            <section>
                {#each Array.from({ length: lengthNumber }, (_, i) => i + 1) as imageIndex}
                    <a id={`image${imageIndex}`}>
                        <img src={`${UltraGalleryFolder}/GALLERY_${imageIndex}.webp`} alt={`GALLERY_${imageIndex}`}>
                    </a>
                {/each}
            </section>

            <div class="switch_container">
                <p1>NEXT →</p1>
            </div>
        </gallery>
    </div>
</section>