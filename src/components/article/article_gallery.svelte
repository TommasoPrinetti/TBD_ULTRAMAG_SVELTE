<script>
    import { onMount } from 'svelte';
    export let galleryFolderPath;
    let lengthNumber = 0;
    let currentImageIndex = 1;
    let consecutiveFailures = 0;
    const maxConsecutiveFailures = 3;

    function cycleImages() {
        currentImageIndex = (currentImageIndex % lengthNumber) + 1;
    }

    function preloadImage(index) {
        const img = new Image();
        img.onload = () => {
            lengthNumber = index;
            consecutiveFailures = 0; 
            preloadImage(index + 1);
        };
        img.onerror = () => {
            consecutiveFailures += 1;
            if (consecutiveFailures < maxConsecutiveFailures) {
                preloadImage(index + 1);
            }
        };
        img.src = `${galleryFolderPath}/GALLERY_${index}.webp`;
    }

    onMount(() => {
        preloadImage(1);
    });
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<gallery>
    <section>
        {#each Array.from({ length: lengthNumber }, (_, i) => i + 1) as imageIndex}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <a id={`image${imageIndex}`} class:current={currentImageIndex === imageIndex} on:click={cycleImages}>
                <img src={`${galleryFolderPath}/GALLERY_${imageIndex}.webp`} alt={`GALLERY_${imageIndex}`}>
            </a>
        {/each}
    </section>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="switch_container" on:click={cycleImages}>
        <p1>NEXT →</p1>
    </div>
</gallery>