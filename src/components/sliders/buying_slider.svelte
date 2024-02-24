
<script>
    import { onMount } from 'svelte';
  
    export let issueCover = '';
    export let issueNumber = '';
    export let issuePrice = '';
    export let isSliderOpen = '';
    export let spedTracciata = 7;
    export let globalCost = (issuePrice + spedTracciata);
  
    function closeSlider() {
      isSliderOpen = false;
      // console.log("Slider is closed:",isSliderOpen )
    }
  
    // The PayPal SDK script should be loaded asynchronously when the component mounts
    onMount(() => {
      loadPaypalSdk().then(() => {
        initPayPalButton();
      });
    });
  
    async function loadPaypalSdk() {
      // Only load the PayPal SDK if it hasn't been loaded already
      if (!window.paypal) {
        const script = document.createElement('script');
        script.src = 'https://www.paypal.com/sdk/js?client-id=AcB7uWSJdzRWxye8YgzdDEOPAiX8ser0PljQTiJNpSH3yOS-jKom4cj9IfABUDBavkQvSHXFbPjRoqDg&enable-funding=venmo&currency=EUR';
        document.body.appendChild(script);
        await new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
        });
      }
    }
  
    function initPayPalButton() {
      if (window.paypal) {
        window.paypal.Buttons({
          style: {
            shape: 'pill',
            color: 'black',
            layout: 'vertical',
            label: 'buynow',
          },
          createOrder: function(data, actions) {
            const selectedItemDescription = `TBD Magazine - Issue ${issueNumber} - SPED. GRATUITA`;
            const selectedItemPrice = issuePrice;
            const shipping = 0;
            const tax = 0; // Assuming there's no tax to be added
            const quantity = 1; // Assuming a single issue purchase
  
            return actions.order.create({
              purchase_units: [{
                description: selectedItemDescription,
                amount: {
                  currency_code: 'EUR',
                  value: selectedItemPrice,
                  breakdown: {
                    item_total: {
                      currency_code: 'EUR',
                      value: selectedItemPrice,
                    },
                    shipping: {
                      currency_code: 'EUR',
                      value: shipping,
                    },
                    tax_total: {
                      currency_code: 'EUR',
                      value: tax,
                    }
                  }
                },
                items: [{
                  name: selectedItemDescription,
                  unit_amount: {
                    currency_code: 'EUR',
                    value: selectedItemPrice,
                  },
                  quantity: quantity
                }]
              }]
            });
          },
          onApprove: function(data, actions) {
            return actions.order.capture().then(function(orderData) {
              // Handle successful transaction here
              const element = document.getElementById('paypal-button-container');
              element.innerHTML = '<h3>Thank you for your purchase!</h3>';
            });
          },
          onError: function(err) {
            console.error('PayPal Button Error:', err);
          },
        }).render('#paypal-button-container');
      } else {
        console.error('PayPal SDK not loaded!');
      }
    }
  </script>

{#if issuePrice}
    <div class="buying_slider {isSliderOpen ? 'open' : ''}">
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <!-- svelte-ignore a11y-missing-attribute -->
      {#key issuePrice}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <a class="exit_slider" on:click={closeSlider} on:touchend={closeSlider}>
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
            <path d="M2 1.5L25 24.5" stroke-width="3" stroke-linecap="round"/>
            <path d="M25 1.5L2 24.5" stroke-width="3" stroke-linecap="round"/>
        </svg>
      </a>
      {/key}
        

        <img src={issueCover} alt={issueNumber}>

        <div class="paypal_button" id={issueNumber}>
            <div id="smart-button-container" class="paypal_button_container">
                <div style="text-align: center;">
                    <div class="Title_drop_container">
                        <p1>PRE ORDER ISSUE {issueNumber}</p1>
                    <select id="item-options">
                        <option value="{issueNumber} - SPED. GRATUITA" price={issuePrice}>SPED. GRATUITA - {issuePrice} EUR</option>
                        <option value="{issueNumber} - SPED. ESPRESSA (TRACCIATA)" price={globalCost}>SPED. ESPRESSA (TRACCIATA) - {globalCost} EUR</option>
                    </select>
                    <select style="visibility: hidden" id="quantitySelect">

                    </select>   
                </div>

                <div id="paypal-button-container">
                </div>
                
            </div>
                <div style="height: var(--spacing_xl);">   
                </div>
                <div style="height: var(--spacing_xl);">   
                </div>
            </div>
            
        </div>
    </div>
{/if}

    