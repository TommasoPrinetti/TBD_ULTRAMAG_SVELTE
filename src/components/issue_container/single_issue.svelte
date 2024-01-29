<script>


export let issue;
export let IssueCover;
export let IssuePrice

import(`../../WEBRESOURCES/ISSUE_COVERS/ISSUE-${issue}.webp`).then(module => {
    IssueCover = module.default;
});

</script>

<a class="single_issue" href="ISSUE_1.HTML">

    <img src={IssueCover} alt={issue} />

    <p3>
      TBD ISSUE #{issue}
    </p3>

    <p3>
      {IssuePrice}€
    </p3>
</a>