class Toggle {
    toggle() {
        this.elements.forEach((element) => {
            console.log(element)
            element.classList.toggle(this.className)
        })

       
    }
}

class Aside {
    constructor() { 
        
        this.elements = [document.querySelector("aside")];
        this.className = ["showAside"];
        this.newToggle = new Toggle();


    
        document.querySelector(".arrow").addEventListener("click", this.newToggle.toggle.bind(this));
       


    }

   


}

const aside = new Aside()

