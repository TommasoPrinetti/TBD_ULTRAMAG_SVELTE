
<script>
    // this is buying_slider.svelte
    export let issueCover;
    export let issueNumber;
    export let issuePrice;
    export let isSliderOpen

    function closeSlider() {
    isSliderOpen = false;
  }

</script>

<div class="buying_slider {isSliderOpen ? 'open' : ''}">
    <div class="exit_slider" on:click={closeSlider}>
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
            <path d="M2 1.5L25 24.5" stroke-width="3" stroke-linecap="round"/>
            <path d="M25 1.5L2 24.5" stroke-width="3" stroke-linecap="round"/>
        </svg>
    </div>

    <img src={issueCover} alt={issueNumber}>
    <div class="paypal_button" id={issueNumber}>
        <div id="smart-button-container" class="paypal_button_container">
            <div style="text-align: center;">
                <div class="Title_drop_container">
                    <p1>PRE ORDER ISSUE {issueNumber}</p1>
                <select id="item-options"><option value="{issueNumber} - SPED. GRATUITA" price={issuePrice}>SPED. GRATUITA - {issuePrice} EUR</option><option value="{issueNumber} - SPED. ESPRESSA (TRACCIATA)" price={{issuePrice}+7}>SPED. ESPRESSA (TRACCIATA) - {{issuePrice}+7} EUR</option></select>
                <select style="visibility: hidden" id="quantitySelect"></select>
            </div>

            <div id="paypal-button-container">
            </div>
        </div>
            <div style="height: var(--spacing_xl);">   
            </div>
            <div style="height: var(--spacing_xl);">   
            </div>
        </div>
        <script src="https://www.paypal.com/sdk/js?client-id=AcB7uWSJdzRWxye8YgzdDEOPAiX8ser0PljQTiJNpSH3yOS-jKom4cj9IfABUDBavkQvSHXFbPjRoqDg&enable-funding=venmo&currency=EUR" data-sdk-integration-source="button-factory"></script>
        <script>
            function initPayPalButton() {
                var shipping = 0;
                var itemOptions = document.querySelector("#smart-button-container #item-options");
            var quantity = parseInt();
            var quantitySelect = document.querySelector("#smart-button-container #quantitySelect");
            if (!isNaN(quantity)) {
            quantitySelect.style.visibility = "visible";
            }
            var orderDescription = 'TBD' && {issueNumber};
            if(orderDescription === '') {
            orderDescription = 'Item';
            }
            paypal.Buttons({
            style: {
                shape: 'pill',
                color: 'black',
                layout: 'vertical',
                label: 'buynow',
                
            },
            createOrder: function(data, actions) {
                var selectedItemDescription = itemOptions.options[itemOptions.selectedIndex].value;
                var selectedItemPrice = parseFloat(itemOptions.options[itemOptions.selectedIndex].getAttribute("price"));
                var tax = (0 === 0 || false) ? 0 : (selectedItemPrice * (parseFloat(0)/100));
                if(quantitySelect.options.length > 0) {
                quantity = parseInt(quantitySelect.options[quantitySelect.selectedIndex].value);
                } else {
                quantity = 1;
                }

                tax *= quantity;
                tax = Math.round(tax * 100) / 100;
                var priceTotal = quantity * selectedItemPrice + parseFloat(shipping) + tax;
                priceTotal = Math.round(priceTotal * 100) / 100;
                var itemTotalValue = Math.round((selectedItemPrice * quantity) * 100) / 100;

                return actions.order.create({
                purchase_units: [{
                    description: orderDescription,
                    amount: {
                    currency_code: 'EUR',
                    value: priceTotal,
                    breakdown: {
                        item_total: {
                        currency_code: 'EUR',
                        value: itemTotalValue,
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
                
                // Full available details
                console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

                // Show a success message within this page, e.g.
                const element = document.getElementById('paypal-button-container');
                element.innerHTML = '';
                element.innerHTML = '<h3>In a world full of Amazons, be a TBD. We value our shipments, but the independent nature of our project does not allow us to be as fast as the big retailers. We ask for a little patience, your TBD issue are on their way.</h3>';

                // Or go to another URL:  actions.redirect('thank_you.html');

                });
            },
            onError: function(err) {
                console.log(err);
            },
            }).render('#paypal-button-container');
        }
        initPayPalButton();
        </script>
        
    </div>
</div>