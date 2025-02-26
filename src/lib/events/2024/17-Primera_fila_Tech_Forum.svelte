<script lang="ts">
    import Event from '$lib/components/Event.svelte';
    import { Avatar as CustomAvatar } from '$lib/components/Avatar';
    import { Tweet } from 'sveltekit-tweet';

    export let data;
</script>

<Event
    title="Hayden Mark Davis, Julián Peh, Mauricio Novelli, Manuel Terrones Godoy, Sergio Morales y Manuel Adorni, entre los invitados a la primera fila"
    date="19 de octubre, 2024"
    avatar={CustomAvatar.HaydenMarkDavis}
    parties={["Javier Milei", "Hayden Mark Davis", "Julián Peh", "Mauricio Novelli", "Manuel Terrones Godoy", "Sergio Morales", "Manuel Adorni", "Thomas Davis", "Gideon Davis", "Bartosz Lipinski", "Emmanuel Danann"]}
    sources={[]}
>
    <p class="timeline-item-p">
        Durante el discurso de Javier Milei en el cierre de Tech Forum, en la primera fila estaban ubicados muchos de los personajes apuntados en el escándalo cripto, como Julián Peh, Hayden Mark Davis (junto a su padre y hermano), Bartosz Lipinski, Mauricio Novelli, Manuel Terrones Godoy, Sergio Morales, Manuel Adorni y hasta el influencer de extrema derecha, Emmanuel Danann (a la derecha de Julián Peh).
    </p>

    <Tweet tweet={data.Primera_fila_1_19_10_2024} />
    <Tweet tweet={data.Primera_fila_2_19_10_2024} />
</Event>