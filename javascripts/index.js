const fosters = [];

function container() {
    return document.getElementById("container");
}

function nameInput(){
    return document.querySelector("#name");
}

function aboutInput(){
    return document.querySelector("#about_pet");
}

function form() {
    return document.getElementById("form");
  }
  



function resetInputs(){
    nameInput().value = "";
    aboutInput().value = "";
}

function resetContainer() {
    container().innerHTML = "";
}

function formTemplate() {
    return `
    <form id="form">
        <h3>Add a new Foster</h3>
            <div class="inputs">
                <label for="name">Name</label>
                <input type="text" name="name" id="name"/>
            </div>
            <div class="inputs">
                <label for="description">Description</label><br>
                <textarea name="about_pet" id="about_pet" cols="15" rows="5"></textarea>
            </div>
            <button type="submit" form="form" value="Submit">Submit</button>
        </form>
    `;
}

function renderForm(){
    resetContainer();
    container().innerHTML = formTemplate();
    form().addEventListener("submit", submitForm);
}

function submitForm(e){
    e.preventDefault();
    fosters.push({
        name: nameInput().value,
        description: aboutInput().value,
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderForm();
});