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
        this.imgList = ["arbuz"," banan", "cytryna", "dzik", "elf", "foka", "gitara", "hamburger", "igła", "jabłko", "kot", "koza", "lis", "małpa", "motyl", "niedźwiedź", "okno", "pies", "rower", "serce", "telefon", "ul", "wilk", "zebra" ];

        // this.imgSrc = `../img/words/${imgName}.svg`;
        this.letters = [...document.querySelectorAll(".alphabet li")];
        this.mainImg = document.querySelector(".mainImg img");
        
       this.letters.forEach(item => {
          item.addEventListener("click", function ()  {
                console.log(this.innerText);
                return this.innerText

            })
        })


       

        
    }
   
    // pushImg() {
    //     this.mainImg.src = this.imgSrc;
    //     console.log("klik");
    // }
   checkLetter() {
       this.imgList.forEach(item => {
           item.charAt(0)
       })

      
    }
  

    getLetters(letters, element) {
        if(firstLetter = innerTex){
           
        }
        
    }
}

const changeImg = new ChangeImage()