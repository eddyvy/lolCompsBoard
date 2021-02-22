<script>
    import CHAMPS from '../store/champs.js'
    import { selected, showChamp, hideChamp } from '../store/store.js'

    export let idSelection
    export let mesure

    function selectChamp(targ) {
        const box = targ.target
        // const champName = box.id.match(/\-(\w+)$/)[1]
        // console.log(champName)
        
        if (!$selected[box.id]) {
            box.style.border = "4px solid #F30F23"
            $selected[box.id] = true
            $showChamp(box.id)
        } else {
            box.style.border = "4px solid rgb(0, 0, 0, 0)"
            $selected[box.id] = false
            $hideChamp(box.id)
        }
    }
    
    function hideChampSelect() {
      const container = document.getElementById(idSelection)
      container.style.display = 'none'
    }

</script>


<div class="ChampSelect">
    <div class="ChampSelect-container" id={idSelection} >
        <button class="ok-button" on:click={hideChampSelect}>OK</button>
        {#each CHAMPS.images as champion, i}
            <div
                class="champion-container"
                id={idSelection}-{CHAMPS.names[i]}
                style="
                    width: {mesure}px;
                    height: {mesure}px;
                    background-size: cover;
                    background-image: url({champion});
                    border-radius: {mesure}px;
                    margin: 5px;
                    padding: 8px;
                    border: 4px solid rgb(0, 0, 0, 0);
                "
                on:click={selectChamp}
            />
        {:else}
            <p>Loading...</p>
        {/each}
    </div>
</div>


<style>
.ChampSelect-container {
    display: none;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-evenly;
    position: fixed;
    top: 10vh;
    left: 5vw;
    width: 90vw;
    border: 2px solid gray;
    border-radius: 20px;
    background-color: rgba(206, 191, 235, 0.5);
}
button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    width: 20%;
    margin-left: 40%;
    margin-right: 40%;
    height: 50px;
}


</style>