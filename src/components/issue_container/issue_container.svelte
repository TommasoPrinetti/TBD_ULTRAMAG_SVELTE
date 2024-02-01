<script>


  import SingleIssue from '../../components/issue_container/single_issue.svelte';

  import Divider from '../../components/issue_container/divider.svelte';

  import SingleSpecial from './single_special.svelte';
  import SingleCard from './single_card.svelte';

  let singleCards = [
    {
      id: 1,
      href: "/",
      img: "../../WEBRESOURCES/ISSUES_PUBLICATION_SPECIALS/TBD_FOREHEADVULVA_ARTICLES/IMG_1.webp",
      title: "Sofia Braga - Forhead Vulva",
      text:"Lorem ipsum dolor sit amet consectetur. Est velit eget sed nibh consequat. Et nisl sit amet eget eu commodo est. Orci arcu tincidunt...."
    },

    {
      id: 2,
      href: "/",
      img: "../../WEBRESOURCES/ISSUES_PUBLICATION_SPECIALS/TBD_LOOKATME_I_ARTICLES/GIULIA_THUMB.webp",
      title: "Look at me - Interviews Vol. I",
      text:"Lorem ipsum dolor sit amet consectetur. Est velit eget sed nibh consequat. Et nisl sit amet eget eu commodo est. Orci arcu tincidunt...."
    }

  ]
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

<div class="issues_container">
    
  <Divider SectionName="Altrotitolo"/>

  <section>
    {#each singleCards as singleCard (singleCard.id)}
        <SingleCard {singleCard}/>
    {/each}
  </section>

</div>

