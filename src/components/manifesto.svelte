<script>
//Manifesto.svelte

export let manifestoTitle
export let manifestoText
export let downloadPath
export let downloadText
export let fileDownloadButton

</script>

<manifesto id="ABSTRACT">
    <section> 
        <h2>
            {manifestoTitle}
        </h2>
        <p2>
            {@html manifestoText}
        </p2>
        {#if fileDownloadButton === true}
            <a class="button" href={downloadPath} download={manifestoTitle}>
                <p3>{downloadText}</p3>
            </a>
        {/if}
    </section>
</manifesto>



