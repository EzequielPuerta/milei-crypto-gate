<script lang="ts">
    import {
        Heading,
        Card,
        Hr
    } from 'flowbite-svelte';
    
    export let date: string;
    export let hTag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" = "h2";

</script>

<div id={date}>
    <Hr classHr="my-8" />
    <Card class="card mt-10 mb-10 lg:min-w-lg" border={false} shadow={false}>
        <br/>
        <Heading
            tag={hTag}
            class="mb-4"
            customSize="text-2xl font-extrabold md:text-2xl lg:text-4xl">
                {date}
        </Heading>
    </Card>
</div>