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
            <h2 class="name">${pet.name}</h2>
            <h4>${pet.about}</h4>
            <img src="${pet.img_url}" height=250px width=300px/>
        </div>
        <button class="delete" data-id="${pet.user.id}">Delete</button>
        `;
        })
    })
})
