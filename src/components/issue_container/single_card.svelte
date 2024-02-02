<script>
export let issueCover;
export let issueHref;
export let issueTitle;
export let issueHeroText
</script>

<card>
    <!-- svelte-ignore a11y-missing-content -->
    <a href={issueHref}></a>
    <div class="card_image_container">
      <img src={issueCover} alt="">
    </div>
    <div class="card_text_container">
      <h3>
        {issueTitle}
      </h3>
      <p3>
        {issueHeroText}
      </p3>
    </div>
</card>