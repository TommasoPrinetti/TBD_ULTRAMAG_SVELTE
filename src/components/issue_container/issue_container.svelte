<script>


  import SingleIssue from '../../components/issue_container/single_issue.svelte';

  import Divider from '../../components/issue_container/divider.svelte';

  import SingleSpecial from './single_special.svelte';

</script>

<div class="issues_container">
    
    <Divider SectionName="Issues"/>

    <section> 
      <SingleIssue issue=1 IssuePrice=13/>
      <SingleIssue issue=2 IssuePrice=13/>
      <SingleIssue issue=3 IssuePrice=13/>
      <SingleIssue issue=4 IssuePrice=13/>
      <SingleIssue issue=5 IssuePrice=13/>
    </section>

</div>

<div class="issues_container">
    
  <Divider SectionName="Special Projects"/>

  <section>  
    <SingleSpecial special=1 SpecialPrice=13/>
    <SingleSpecial special=2 SpecialPrice=13/>
  </section>

</div>