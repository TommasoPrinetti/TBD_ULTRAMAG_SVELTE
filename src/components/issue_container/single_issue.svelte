<script>
  export let issueTitle;
  export let issuePrice;
  export let issueHref = '';
  export let issueCover;
  export let issueNumber;
  
</script>

<a class="single_issue" href={issueHref}>

    <img src={issueCover} alt={issueTitle} />

    <p3>
      TBD #{issueTitle}
    </p3>

    <p3>
      {issuePrice}€
    </p3>
</a>