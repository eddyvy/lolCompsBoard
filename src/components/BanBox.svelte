<script>
    export let equipo
</script>

<div class="BanBox">
    <h3>Bans Equipo {equipo}</h3>
    <div
        class="BanBox-container"
    />
</div>

<style>
    .BanBox {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .BanBox-container {
        width: 30vw;
        height: 7vh;
        border: 2px solid black;
        border-radius: 10px;
    }
</style>