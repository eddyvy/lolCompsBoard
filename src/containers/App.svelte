<script>
  import Map from '../components/Map.svelte'
  import BanBox from '../components/BanBox.svelte'
  import Player from '../components/Player.svelte'

  export let mesure = 35
  export let equipo1 = {
    nombre: 'azul',
    jugadores: [
      'Chay Norris',
      'BorisRP',
      'DrGallu',
      'Javirup',
      'firebird17'
    ]
  }
  export let equipo2 = {
    nombre: 'rojo',
    jugadores: [
      'Jugador1',
      'Jugador2',
      'Jugador3',
      'Jugador4',
      'Jugador5'
    ]
  }


</script>

<Map />
<div class="banBoxes">
  <BanBox equipo={equipo1.nombre}/>
  <BanBox equipo={equipo2.nombre}/>
</div>
<div class="players">
  {#each equipo1.jugadores as jugador}
  <Player equipo={equipo1.nombre} playerName={jugador} {mesure} />
  {/each}
  {#each equipo2.jugadores as jugador}
  <Player equipo={equipo2.nombre} playerName={jugador} {mesure} />
  {/each}
</div>

<style>
  :global(*) {
    margin: 5px;
  }
  :global(body) {
    background-color: slategray;
    font-family: 'Montserrat', sans-serif;
  }
  :global(main) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
  }
  :global(button, input[type="submit"], input[type="reset"]){
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;

    box-sizing: border-box;
    appearance: none;
    background-color: transparent;
    border: 2px solid rgb(7, 7, 112);
    border-radius: 0.6em;
    color: rgb(7, 7, 112);;
    cursor: pointer;
    display: flex;
    align-self: center;
    /* font-size: 1rem; */
    font-weight: 400;
    line-height: 1;
    /* margin: 20px; */
    padding: 5px 9px;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  }

  :global(button:hover, button:focus){
    color: #fff;
    outline: 0;
    box-shadow: 0 0 40px 40px rgb(7, 7, 112) inset;
  }

  .banBoxes {
    display: flex;
    flex-direction: row;  
  }
  .players {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    width: 100vw;
  }
</style>
