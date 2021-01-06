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
        this.letters.forEach(letter => {
         letter.addEventListener("click", this.clickFunction)
        })
      
    }
    clickFunction() {
      
        this.wordsBuilder = new WordsBuilder();
        this.lettersUl = this.wordsBuilder.lettersUl;
        this.solutionUl = this.wordsBuilder.solutionUl;

        this.wordsBuilder.resetUl(this.lettersUl);  
        this.wordsBuilder.resetUl(this.solutionUl);  

        let alphabetLetter = this.innerText;
        let firstLetter;
        this.words = WordsList.words;
        for (let i = 0; i < this.words.length; i++)  {
            let word = this.words[i]
            firstLetter = word.charAt(0);
            // console.log(firstLetter.toUpperCase(), alphabetLetter)
            if(firstLetter.toUpperCase() === alphabetLetter){
                const imgSrc = `../img/words/${word}.svg`;
                document.querySelector(".mainImg img").src = imgSrc;
                const wordRandomLetters = this.wordsBuilder.mixLetters(word).join("");
                const newPermut= new Permut(wordRandomLetters);
                const mixedWord = newPermut.mixedword;
                const newImg = this.wordsBuilder.getLetter( mixedWord, this.lettersUl);
                const newInput = this.wordsBuilder.getInput(word, this.solutionUl);


                this.letterBtns = this.wordsBuilder.lettersUl.querySelectorAll("li");
                this.nbr = 1;

                for (let i = 0; i < this.letterBtns.length; i++) {
                    this.letterBtns[i].addEventListener("click", () => {
                        console.log(this.letterBtns[i]);
                        
                        this.button = this.letterBtns[i];
                        this.solution =  this.solutionUl;
                     
                        this.wordsBuilder = new WordsBuilder();  
                  
                        this.letterBtns = this.wordsBuilder.lettersUl.querySelectorAll("li");
                        this.solutionBtns = this.wordsBuilder.solutionUl.querySelectorAll("li");
                        
                        this.solutionField = this.solution.querySelector(`li:nth-child(${this.nbr})`);
                        const buttonLetter = this.button.innerText;
                     
                        const solutionLetter = this.solutionField.getAttribute("data-letter");
                        if (solutionLetter.toUpperCase() === buttonLetter) {
                            this.solutionField.innerText = buttonLetter;
                            this.nbr++;
                        }

                        console.log(this.solutionField.getAttribute("data-nbr"), this.solutionBtns.length);
                        if (this.solutionField.getAttribute("data-nbr") == this.solutionBtns.length) {
                            console.log("brawo")
                        }

                       })
                }
            }
       }
    }
 
}

const changeImg = new ChangeImage();
class WordsBuilder {
    constructor() {
        this.words = WordsList.words;
        this.lettersUl = document.querySelector(".letters ul");
        this.solutionUl = document.querySelector(".solution ul");
    }

    resetUl(ul) {
       while(ul.firstChild){
           ul.removeChild(ul.firstChild)
       }
    }
    
    createLetters(letter, ul) {
       this.newLi = document.createElement("li");
       this.newLi.innerText = letter;
       ul.appendChild(this.newLi);
    }

    createInput(letter, ul, nbr) {
        this.newLi = document.createElement("li");
        this.newLi.innerText = "";
        this.newLi.setAttribute("data-letter", letter);
        this.newLi.setAttribute("data-nbr", nbr);
        ul.appendChild(this.newLi);
     }

    mixLetters(word) {
        this.wordArr = Array.from(word);
        this.randomOne = new RandomLetter;
        this.firstRdmLet = this.randomOne.letter;
        this.randomTwoe = new RandomLetter;
        this.secondRdmLet = this.randomTwoe.letter;
        this.wordArr.push(this.firstRdmLet, this.secondRdmLet)
        return this.wordArr
    }

    getLetter(word, ul) {
        this.wordLenght = word.length;
        for (let i = 0; i < this.wordLenght; i++) {
            let letter = word.slice(i, i+1);
            this.createLetters(letter, ul);
        }
    }
    
    getInput(word, ul) {
        this.wordLenght = word.length;
        for (let i = 0; i < this.wordLenght; i++) {
            let letter = word.slice(i, i+1);
            let nbr = i;
            nbr++;
            this.createInput(letter, ul, nbr);    
        }
    }   
}

// const newWord = new WordsBuilder()

class RandomLetter {
    constructor () {
        this.alphabet = "aąbcćdeęfghijklłmnńoóprsśtuwyzźż";
        this.letter = this.drawLetter(this.alphabet);
    }

    drawLetter(alphabet){
        const alphabetArr = alphabet.split("");
        let i = Math.floor(Math.random() * alphabetArr.length);
        const letter = alphabetArr[i];
        return letter
    }
}

// const newRandom = new RandomLetter();
class Permut {
    constructor(word) {
        this.permutationArr = this.findPermutations(word);
        let max = this.permutationArr.length;
        let randomInt = this.getRandomInt(max);
        this.mixedword = this.permutationArr[randomInt];  
    }

    findPermutations(string) {
        if (!string || typeof string !== "string"){
          return "Please enter a string"
        }
        else if (string.length < 2 ){
          return string
        }
        let permutationsArray = [] 
        for (let i = 0; i < string.length; i++){
          let char = string[i]
          if (string.indexOf(char) != i) 
          continue
          let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length);
          for (let permutation of this.findPermutations(remainingChars)){
            permutationsArray.push(char + permutation) }
        }
        return permutationsArray
    }
    getRandomInt(max) {
        max = Math.floor(max);
        return Math.floor(Math.random() * max);
    }
}



// const newSolution = new GetSolution()

