<script>
export let singleCard
</script>

<card>
    <!-- svelte-ignore a11y-missing-content -->
    <a href={singleCard.href}></a>
    <div class="card_image_container">
      <img src={singleCard.img} alt="">
    </div>
    <div class="card_text_container">
      <h3>
        {singleCard.title}
      </h3>
      <p3>
        {singleCard.text}
      </p3>
    </div>
</card>