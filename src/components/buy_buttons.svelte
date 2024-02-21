<script>
    import { createEventDispatcher } from 'svelte';
  
    const dispatch = createEventDispatcher();
  
    function handleClick() {
      dispatch('toggle'); 
    }
</script>
  
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<a class="button" id="BUY_ACTIVE" on:click={handleClick} >
    <p2> BUY NOW </p2>
</a>