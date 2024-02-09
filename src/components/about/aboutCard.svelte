<script>
    
    export let member

</script>

<team_card>
    <section>
        <div class="profile_container">
            <div class="arrow_container">
                <h3>↘︎</h3>
            </div>
            <div class="info_container">
                <h3> {member.name} </h3>
                <p2> {member.role}</p2>
                <a class="button" href={member.link}>
                    <p3>LINKEDIN</p3>
                </a>
            </div>
        </div>

        <div class="team_text_container">
            <p2>
                {member.bio}
            </p2>
        </div>
    </section>
</team_card>