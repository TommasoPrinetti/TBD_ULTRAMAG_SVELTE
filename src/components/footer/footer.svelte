<script>
    // Define constants for image paths and URLs
    const footerImg = '/IDENTITY_IMAGES/FOOTERTEXT.svg';
    const mailchimpActionUrl = "https://polimi.us21.list-manage.com/subscribe/post?u=2088942308759df62fadb3c02&id=8b4532ecd0&f_id=00b7ece6f0";

    // You may want to add a function to dynamically load the Mailchimp script if needed
    function loadMailchimpScript() {
        const script = document.createElement('script');
        script.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
        script.onload = () => {
        };
        document.body.appendChild(script);
    }

    import { onMount } from 'svelte';
    onMount(() => {
        loadMailchimpScript();
    });

</script>

<footer>
    <div class="footer_high">
        <img src={footerImg} alt="Footer Text">
    </div>
    <section>
        <div class="footer_button_container">
            <a class="button" href="https://www.instagram.com/tbd.ultramagazine/">
                <p2>INSTAGRAM</p2>
            </a>
            <a class="button" href="https://www.facebook.com/TBDultramagazine/">
                <p2>FACEBOOK</p2>
            </a>
        </div>

        <div class="newsletter_container">
            <div id="mc_embed_signup">
                <form action={mailchimpActionUrl} method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
                    <div id="mc_embed_signup_scroll">
                        <h3>Subscribe to the newsletter</h3>
                        <div class="mc-field-group">
                            <input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" placeholder="Your Email address here">
                        </div>
                        <div id="mce-responses" class="clear">
                            <div class="response" id="mce-error-response" style="display:none;"></div>
                            <div class="response" id="mce-success-response" style="display:none;"></div>
                        </div>
                        <div style="position: absolute; left: -5000px;" aria-hidden="true">
                            <input type="text" name="b_2088942308759df62fadb3c02_8b4532ecd0" tabindex="-1" value="">
                        </div>
                        <div class="clear">
                            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" style="color: white;">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</footer>

<style>
    #mc_embed_signup_scroll {
        display: flex;
        flex-direction: column;
        row-gap: 5px   ;
    } 

    #mc_embed_signup > :nth-child(2) {
        margin: 0px 0px 0px 0px;
    }
</style>
