<script>

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
            {manifestoText}
        </p2>
        {#if fileDownloadButton === 'TRUE'}
            <a class="button" href={downloadPath} download={manifestoTitle}>
                <p3>{downloadText}</p3>
            </a>
        {/if}
    </section>
</manifesto>



