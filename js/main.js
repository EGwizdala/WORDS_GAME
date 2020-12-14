class Toggle {
    toggle() {
        this.elements.forEach((element) => {
            console.log(element)
            element.classList.toggle(this.className)
        })
    }

    toggleVar() {
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


class ChangeImage {
    constructor() {
        

        // this.imgSrc = `../img/words/${imgName}.svg`;
        this.letters = [...document.querySelectorAll(".alphabet li")];
        this.mainImg = document.querySelector(".mainImg img");
        
       this.letters.forEach(item => {
          item.addEventListener("click", this.clickFunction)
        })

    }

    clickFunction() {
        console.log(this.innerText);
        let alphabetLetter = this.innerText;
        let firstLetter;
        const words = ["arbuz"," banan", "cytryna", "dzik", "elf", "foka", "gitara", "hamburger", "igła", "jabłko", "kot", "lis", "motyl", "niedźwiedź", "okno", "pies", "rower", "serce", "telefon", "ul", "wilk", "zebra" ];

        words.forEach(item => {
            firstLetter = item.charAt(0);
            console.log(firstLetter.toUpperCase(), alphabetLetter)
            if(firstLetter.toUpperCase() === alphabetLetter){
                console.log("ta sama litera");
                let newImg = item;
                console.log(newImg)
                const imgSrc = `../img/words/${newImg}.svg`;
                document.querySelector(".mainImg img").src = imgSrc;

            }
       })
        
    }
   
    // pushImg() {
    //     this.mainImg.src = this.imgSrc;
    //     console.log("klik");
    // }
   checkLetter(innerText) {
    let firstLetter 
       this.words.forEach(item => {
         firstLetter = item.charAt(0);
         if(firstLetter === innerText){
            console.log("ta sama litera")
         }
       })

    }
  

    getLetters(firstLetter, innerText) {
        if(firstLetter === innerText){
           console.log("ta sama litera")
        }
        
    }
}

const changeImg = new ChangeImage()