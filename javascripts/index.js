const endPoint =  "http://localhost:3000/pets"
const form = document.getElementById("pet-form")
form.addEventListener("submit", handleSubmit)
const container = document.getElementById("petsContainer")
const ul = document.getElementById("petList")


document.addEventListener("DOMContentLoaded", init)


function init() {
    getPets();
}

function handleSubmit(e) {
    e.preventDefault();
    const newPetInput = {
        name: e.target[0].value,
        about: e.target[1].value,
        img_url: e.target[2].value
    }

    fetch(endPoint, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPetInput)
        })
    .then(r => r.json())
    .then(data => addToDom(data))
    }


function getPets() {
    fetch(endPoint)
    .then(r => r.json())
    .then(handlePets)
    }

    function handlePets(petsArr) {
        petsArr.pets.map(p => {
            addToDom(p)
        });
    }

function addToDom(p) {
    let img = document.createElement("img")
    let h1 = document.createElement("h1")
    let h4 = document.createElement("h4")
    let maybeBtn = document.createElement("button")
    let span = document.createElement("span")
    

    h1.innerText = p.name
    h4.innerText = p.about
    img.src = p.img_url
    maybeBtn.innerText = "Click here to show interest!!"
    maybeBtn.id = p.id
    span.innerText = p.inquiries
    maybeBtn.append(span)

    
    ul.append(h1, h4, img, maybeBtn)
    container.append(ul)

    maybeBtn.addEventListener("click", this.inquiryClicks)
}  