<script>

    export let special;
    export let SpecialCover;
    export let SpecialPrice
    
    import(`../../WEBRESOURCES/ISSUE_COVERS/SPECIAL-${special}.webp`).then(module => {
        SpecialCover = module.default;
    });
    
</script>
    
<a class="single_issue" href="ISSUE_1.HTML">

    <img src={SpecialCover} alt={special} />

    <p3>
        TBD ISSUE #{special}
    </p3>

    <p3>
        {SpecialPrice}€
    </p3>
</a>