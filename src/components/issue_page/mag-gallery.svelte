<script>
    export let callToAction = "CLICK ME TO READ";
    export let magGalleryFolder;
    export let lengthNumber = 5;
 </script>
 
 <gallery class="default_appear">
     <h2>{callToAction}</h2>
     <section>
         {#each Array.from({ length: lengthNumber }, (_, i) => i + 1) as imageIndex}
             <a id={`image${imageIndex}`}>
                 <img src={`${magGalleryFolder}/GALLERY_${imageIndex}.webp`} alt={`GALLERY_${imageIndex}`}>
             </a>
         {/each}
     </section>
 </gallery>