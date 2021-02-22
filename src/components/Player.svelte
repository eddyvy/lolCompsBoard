<script>
    import ChampSelect from '../components/ChampSelect.svelte'
    import ChampShown from '../components/ChampShown.svelte'

    export let mesure
    export let equipo
    export let playerName
    export let idSelection

    idSelection = `selection-${equipo}-${playerName}`
  
    function showChampSelect() {
      const container = document.getElementById(idSelection)
      container.style.display = 'flex'
    }

  </script>

  <div class="Player">
    <div class="Player-container">
        <h3>{playerName}</h3>
        <button on:click={showChampSelect}>Selecciona</button>
        <ChampSelect {idSelection} {mesure}/>
        <ChampShown {idSelection} {mesure}/>
        
    </div>
  </div>
  
  <style>
    .Player-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  </style>