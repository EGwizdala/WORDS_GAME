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

class WordsList {
    static words = ["arbuz", "banan", "cytryna", "dzik", "elf", "foka", "gitara", "hamburger", "igła", "jabłko", "kot", "lis", "motyl", "niedźwiedź", "okno", "pies", "rower", "serce", "telefon", "ucho", "x-rays", "yeti", "wilk", "ząb" ];
}


class ChangeImage {
    constructor() {
        this.letters = [...document.querySelectorAll(".alphabet li")];
        this.mainImg = document.querySelector(".mainImg img");
        
        this.letters.forEach(item => {
          item.addEventListener("click", this.clickFunction)
        })
    }
    clickFunction() {
        this.wordsBuilder = new WordsBuilder();
        this.wordsBuilder.resetUl();
        console.log(this);
        let alphabetLetter = this.innerText;
        let firstLetter;
        this.words = WordsList.words
       console.log(this.words);
        this.words.forEach(item => {
            firstLetter = item.charAt(0);
            console.log(firstLetter.toUpperCase(), alphabetLetter)
            if(firstLetter.toUpperCase() === alphabetLetter){
                console.log("ta sama litera");
                let newImg = item;
                const imgSrc = `../img/words/${newImg}.svg`;
                document.querySelector(".mainImg img").src = imgSrc;
               

                const word = this.wordsBuilder.getLetter(newImg);


            }
       })
    }
}

const changeImg = new ChangeImage();

class WordsBuilder {
    constructor() {
        this.words = WordsList.words;
        this.lettersUl = document.querySelector(".letters ul");
    }

    resetUl() {
       while(this.lettersUl.firstChild){
           this.lettersUl.removeChild(this.lettersUl.firstChild)
       }
    }
    
    createLetters(letter) {
       this.newLi = document.createElement("li");
       this.newLi.innerText = letter
       this.lettersUl.appendChild(this.newLi)
    }

    getLetter(word) {
        this.wordLenght = word.length;
    
        for (let i = 0; i < this.wordLenght; i++) {
            this.letter = word.slice(i, i+1)
            console.log(this.letter);
            this.createLetters(this.letter)
        }
    }
}

const newWord = new WordsBuilder()

class Random {
    constructor () {
        this.alphabet = "aąbcćdeęfghijklłmnńoóprsśtuwyzźż";

    }

    drawLetter(){
        
    }

    
}