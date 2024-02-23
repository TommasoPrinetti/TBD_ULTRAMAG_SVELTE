<script>
  //ULTRABUTTON.SVELTE
  import { onMount } from 'svelte';
  let isUltra = false;
  let isDefault = false;

  function toggleUltraMode() {
    isUltra = !isUltra;

    if (isUltra) {
      setTimeout(updateBodyClass, 1000);
      isDefault = false;
    } else {
      setTimeout(updateBodyClass, 1000);
      isDefault = true;
    }
  }

  const TbdLogo = '/IDENTITY_IMAGES/tbd_LOGO.webp';

  function updateBodyClass() {
    if (typeof window !== "undefined") {
      const bodyClassList = document.body.classList;
      if (isUltra) {
        bodyClassList.add('ultra');
        bodyClassList.remove('default');
      } else {
        bodyClassList.add('default');
        bodyClassList.remove('ultra');
      }
    }
  }

  onMount(() => {
    updateBodyClass();
  });

</script>


<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<a class="ULTRABUTTON" on:click={toggleUltraMode}>
  <div class="bg_solid"></div>
  <div class="left_text">
    <p3>DEFAULT</p3>
  </div>

  <div class="right_text">
    <p3>ULTRA</p3>
  </div>
</a>

<div class="ultrawhiteblob">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 81">
    <path d="M0 29V95.5H1440V29H873.519C851.532 29 830.235 21.3233 813.305 7.29514C807.614 2.58019 800.456 0 793.066 0H645.919C639.242 0 632.832 2.62314 628.07 7.30424C613.926 21.2085 594.886 29 575.052 29H0Z"/>
  </svg>
</div>

<div class="ultra_transition" class:animate={isUltra}>
  <img src={TbdLogo} alt="">
</div>

<div class="default_transition" class:animate={isDefault}>
  <img src={TbdLogo} alt="">
</div>
