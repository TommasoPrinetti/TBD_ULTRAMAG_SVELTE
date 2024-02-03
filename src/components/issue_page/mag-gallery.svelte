<script>
    export let callToAction = "CLICK ME TO READ";
    export let magGalleryFolder;
    export let lengthNumber = 5;
    let currentImageIndex = 1; // Start from 1 assuming your images start with 1

    // Function to cycle through images
    function cycleImages() {
        currentImageIndex = (currentImageIndex % lengthNumber) + 1;
    }
 </script>


 <gallery>
    <h2>{callToAction}</h2>
    <section>
        {#each Array.from({ length: lengthNumber }, (_, i) => i + 1) as imageIndex}
            <a id={`image${imageIndex}`} on:click={cycleImages} class:current={currentImageIndex === imageIndex}>
                <img src={`${magGalleryFolder}/GALLERY_${imageIndex}.webp`} alt={`GALLERY_${imageIndex}`}>
            </a>
        {/each}
    </section>
</gallery>