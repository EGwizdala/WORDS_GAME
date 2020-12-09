class Toggle {
    toggle() {
        this.elements.forEach((element) => {
            console.log(element)
            element.classList.toggle(this.className)
        })
    }

    toggleVar() {
        console.log(this.elements)
        for(let i = 0; i < this.elements.length; i++ ){
            this.elements[i].classList.toggle(this.className[i])
        }
    }
}

class Aside {
    constructor() { 
        this.elements = [document.querySelector("aside"), document.querySelector(".arrow div")];
        this.className = ["showAside", "arrowRotate"];
        this.aside = new Toggle();
        document.querySelector(".arrow").addEventListener("click", this.aside.toggleVar.bind(this));
    }
}

const aside = new Aside()


// class ChangeImage {
//     this.imgs = 
// }

var fs = require('fs');
var files = fs.readdirSync('/assets/photos/');