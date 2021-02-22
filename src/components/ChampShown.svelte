<script>
    import Draggable from '../components/Draggable.svelte';
    import CHAMPS from '../store/champs.js'

    export let idSelection
    export let mesure

</script>

<div class="ChampShown">
    <div class="ChampShown-container" id={idSelection} >
        {#each CHAMPS.images as champion, i}
            <Draggable>
                <div
                    class="champion-container"
                    id={idSelection}-{CHAMPS.names[i]}-{'shown'}
                    style="
                        width: {mesure}px;
                        height: {mesure}px;
                        background-size: cover;
                        background-image: url({champion});
                        border-radius: {mesure}px;
                        margin: 5px;
                        padding: 8px;
                    "
                />
            </Draggable>
        {:else}
            <p>Loading...</p>
        {/each}
    </div>
</div>


<style>
.ChampShown-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-evenly;
    /* position: absolute; */
    top: 10vh;
    left: 5vw;
    min-height: 25vh;
    min-width: 15vw;
    border: 2px solid gray;
    border-radius: 20px;
    background-color: rgba(206, 191, 235, 0.5);
}

</style>