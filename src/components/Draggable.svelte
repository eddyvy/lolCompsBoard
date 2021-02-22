<script>
	export let left = 0;
	export let top = 0;
	let moving = false; 

	function start(e) {
		moving = true

		const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
    	const scrollTop = window.pageYOffset || document.documentElement.scrollTop
		
		left = e.target.parentElement.getBoundingClientRect().left + scrollLeft
		top = e.target.parentElement.getBoundingClientRect().top + scrollTop

		e.target.parentElement.style.position = 'absolute'
	}

	function stop() {
		moving = false
	}

	function move(e) {
			if (moving) {
				left += e.movementX
				top += e.movementY
			}
	}

</script>

<svelte:window on:mouseup={stop} on:mousemove={move}  />

<section on:mousedown={start} style="left: {left}px; top: {top}px;" class="draggable">
	<slot></slot>
</section>

<style>
	.draggable {
		user-select: none;
		cursor: move;
		display: none;
		position: none;
	}
</style>