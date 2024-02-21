<script>
    //Article_gallery
    import { onMount } from 'svelte';
    export let galleryFolderPath;
    export let lengthNumber = 0;
    let currentImageIndex = 1;

    // Function to cycle through images
    function cycleImages() {
        currentImageIndex = (currentImageIndex % lengthNumber) + 1;
    }
    
</script>

<gallery>
    <section>
        {#each Array.from({ length: lengthNumber }, (_, i) => i + 1) as imageIndex}
            <a id={`image${imageIndex}`} class:current={currentImageIndex === imageIndex}>
                <img src={`${galleryFolderPath}/GALLERY_${imageIndex}.webp`} alt={`GALLERY_${imageIndex}`}>
            </a>
        {/each}
    </section>
    <div class="switch_container" on:click={cycleImages}>
        <p1>NEXT →</p1>
    </div>
</gallery>