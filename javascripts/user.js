class User {
    static all=[]

    constructor({name, id, pets}){
        this.name = name
        this.id = id
        pets.forEach(pet => new Pet(pet))
        User.all.push(this)
    }

    get pets(){
        return User.all.filter(pet => pet.user_id === this.id)
    }
}