const endPoint = "http://localhost:3000/pets"
const container = document.querySelector("div#petsContainer")
const newPetsContainer = document.querySelector("div#newPets")


document.addEventListener('DOMContentLoaded', () => {
    fetch(endPoint)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        container.innerHTML = data.pets.map(pet => {
            return `
        <div data-id="${pet.user.id}">
            <img src="${pet.img_url}" style="border-radius:30%", height=250px width=300px/>
            <span style="float:right,color:white">
            <h1>${pet.name}</h1>
            <p>${pet.about}</p>
            </span>
            </div>
        `;
        })
    })
})
