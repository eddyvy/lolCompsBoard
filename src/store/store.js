import { writable } from 'svelte/store'

export const selected = writable({})

export const showChamp = writable((champIdInSelected) => {
    const idToShow = champIdInSelected + '-shown'
    document.getElementById(idToShow).parentElement.style.display = 'flex'
})

export const hideChamp = writable((champIdInSelected) => {
    
    const idTohide = champIdInSelected + '-shown'
    document.getElementById(idTohide).parentElement.style.display = 'none'
})