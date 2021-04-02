const endPoint = "http://localhost:3000/pets"
const container = document.querySelector("div#container")



document.addEventListener('DOMContentLoaded', () => {
    fetch(endPoint)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        // getPets(data)
    })
})

// function getPets(p){
//     p.pets.forEach
// }