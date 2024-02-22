<script>
  export let issueTitle = '';
  export let issuePrice = '';
  export let issueHref = '';
  export let issueCover = '';

  export let ultraHoverImg;
  
</script>

<a class="single_issue" href={issueHref}>

    {#if ultraHoverImg}
    <div class="single_issue_ultrahover">
      <img src={ultraHoverImg} alt="{issueTitle} Ultra mode">
    </div>
    {/if}
    

    <img src={issueCover} alt={issueTitle} />

    <p3>
      TBD #{issueTitle}
    </p3>

    <p3>
      {issuePrice}€
    </p3>
</a>