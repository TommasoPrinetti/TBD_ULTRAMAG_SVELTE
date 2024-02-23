<!-- _error.svelte -->

<script context="module">
    export async function load({ error }) {

        if (error.status === 404) {
            return {
                status: 404,
                props: {}
            };
        }
    }
    import NotFound from "$components/notfound.svelte";
    import Header from "$components/header/header.svelte";
</script>

<Header />
<NotFound />