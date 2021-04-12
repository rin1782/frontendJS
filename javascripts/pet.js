class Pet{

    static all = []
    static container = document.querySelector("div#petsContainer")

    constructor({id, name, about, img_url, user_id}){
        this.id = id
        this.name = name
        this.about = about
        this.img_url = img_url
        this.user_id = user_id
        

        Pet.all.push(this)
    }
}

    
 

// function renderPet(){
//     const p = new Pet({id: p.id, name: p.name, about: p.about, img_url: p.img_url, user_id: p.user_id})
//     container.innerHTML = `
//         <div data-id="${p.id}">
//             <h2 class="name">${p.name}</h2>
//             <h4>${this.about}<h4>
//             <img src="${p.img_url}" height=250px width=300px/>
//         </div>
//         <button class="delete" data-id="${p.user.id}">Delete</button>
//         `;
// }

// // handleClick = (e) => {
// //     if (e.target.innerText === "Delete") {
// //         this.deletePet(e)
// //     }
// // }

// // attachToDom() 
// //     this.renderPet()
// //     Pet.container.appendChild(this.element)

// //     this.element.addEventListener('click', handleClick)


// // handleClick = (e) => {
// //     if (e.target.innerText === "Delete") {
// //         this.deletePet(e)
// //     }
// // }















