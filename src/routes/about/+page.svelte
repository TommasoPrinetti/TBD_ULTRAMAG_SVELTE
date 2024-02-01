<script>
    // welcome to about.tbd
    import AboutCard from "../../components/about/aboutCard.svelte";
    import Header from "../../components/header/header.svelte";
    import Footer from "../../components/footer/footer.svelte";

   let members = [
    {
        id: 1,
        name: "Iacopo Prinetti",
        role: "Chief designer",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim",
        link: "linkino"
    },
    
    {
        id: 2,
        name: "Giulio cherci",
        role: "Second designer",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim",
        link: "linkino"
    },
]
</script>

    <Header />
    
    <manifesto id="MANIFESTO">
        <section>
            <h1>
                MANIFESTO
            </h1>
            <p2>
                TBD, acronimo di “To Be Defined”, è un progetto editoriale che dal 2019 pubblica volumi tematici e collabora con artist* per la realizzazione di eventi a essi collegati. Il percorso critico di ogni numero si sviluppa a partire da fatti d’attualità definiti zeitgeisting, notizie o icone virali che rivelano lo spirito culturale del tempo. Ogni fatto è sintomo e/o coadiuvante di tematiche più ampie, trattate sotto forma di saggi scritti e contenuti visivi. A partire da un focus specifico sulla contemporaneità, TBD apre quindi finestre di dialogo e un’interrogazione continua sull’arte e sull’estetica. Ogni pubblicazione si accompagna alla realizzazione di una o più opere commissionate per l’occasione, che vengono intese quale parte integrante della riflessione. L’intento è quello di mettere in discussione il rapporto tra artist*, critic* e curator*, e soprattutto tra arte e teoria, nell’ottica di definire una pratica che solleciti uno scambio reciproco di idee e apra molteplici possibilità interpretative, non gerarchiche e non esclusive.
                TBD ULTRAMAGAZINE è un progetto di Irene Sofia Comi, Camilla Compagni, Roberto Malaspina, Sofia Pirandello, Iacopo Prinetti e Miriam Rejas Del Pino.
            </p2>
        </section>
    </manifesto>

    {#each members as member (member.id)}
        <AboutCard {member}/>
    {/each}

    <Footer />
   
