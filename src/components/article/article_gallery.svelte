<script>
    export let galleryFolderPath
    export let lengthNumber = 5;
</script>


<gallery>
    <section>
        {#each Array.from({ length: lengthNumber }, (_, i) => i + 1) as imageIndex}
            <a id={`image${imageIndex}`}>
                <img src={`${galleryFolderPath}/GALLERY_${imageIndex}.webp`} alt={`GALLERY_${imageIndex}`}>
            </a>
        {/each}
    </section>
    <div class="switch_container">
        <p1>NEXT →</p1>
    </div>
</gallery>