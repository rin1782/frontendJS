class Pet{

    static all = []
    static container = document.querySelector("div#petsContainer")

    constructor({id, name, about, img_url, user_id}){
        this.id = id
        this.name = name
        this.about = about
        this.img_url = img_url
        this.user_id = user_id

        this.element = document.createElement('li')
        this.element.dataset["id"] = id
        this.element.id = `${id}`

        

        Pet.all.push(this)
    }
}

// creatPet(){
//     const p = new Pet({id: pet.id, name: pet.name, about: pet.about, img_url: pet.img_url, user_id: pet.user_id})
//     p.attachToDom()
// }

function renderPet(){
    container.innerHTML = `
        <div data-id="${this.id}">
            <h2 class="name">${this.name}</h2>
            <h4>${this.about}<h4>
            <img src=${this.img_url}/>
        </div>
        <button class="delete" data-id="${this.id}">Delete</button>
        `

        return this.element
}

// handleClick = (e) => {
//     if (e.target.innerText === "Delete") {
//         this.deletePet(e)
//     }
// }

// attachToDom() 
//     this.renderPet()
//     Pet.container.appendChild(this.element)

//     this.element.addEventListener('click', handleClick)
// }

// handleClick = (e) => {
//     if (e.target.innerText === "Delete") {
//         this.deletePet(e)
//     }
// }















