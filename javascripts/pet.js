class Pet {

    static all = []
    constructor(id, name, about, img_url, inquiries, user_id) {
          this.id = id; 
          this.name = name; 
          this.about = about;
          this.img_url = img_url;
          this.inquiries = inquiries;
          this.user_id = user_id; 
          Pet.all.push(this)
      }

    //   addToDom(p) {
    //     let img = document.createElement("img")
    //     let h1 = document.createElement("h1")
    //     let h4 = document.createElement("h4")
    //     let maybeBtn = document.createElement("button")
    //     let span = document.createElement("span")
        
    
    //     h1.innerText = p.name
    //     h4.innerText = p.about
    //     img.src = p.img_url
    //     maybeBtn.innerText = "Click here to show interest!!"
    //     maybeBtn.id = p.id
    //     span.innerText = p.inquiries
    //     maybeBtn.append(span)

        
    //     ul.append(h1, h4, img, maybeBtn)
    //     container.append(ul)

    //     maybeBtn.addEventListener("click", this.inquiryClicks)
    // }  

        inquiryClicks(e) {
            let inquiries;
            inquiries = parseInt(e.target.children[0].innerText);
            fetch(endPoint + `/${e.target.id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({inquiries: inquiries += 1 })
            })
        
                .then(res => res.json())
                .then(data => Pet.updateDom(data,e.target.id))
        }
    

        static updateDom(data,id) {
        let button = document.getElementById(`${id}`);   
        button.children[0].innerText = data.inquiries
    }
    
}