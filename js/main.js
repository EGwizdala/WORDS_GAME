let pointNumber = 0;



class Aside {
    constructor() { 
        this.elements = [document.querySelector("aside"), document.querySelector(".arrow div")];
        this.className = ["showAside", "arrowRotate"];
      
        document.querySelector(".arrow").addEventListener("click", this.toggleVar.bind(this));
        
        // document.querySelector(".arrow").addEventListener("ontouchstart", this.aside.toggleVar.bind(this));
    }

    toggle(element, className) {
        element.classList.toggle(className);
}

    toggleVar(e) {
        const child = e.target.matches(".arrow div, .arrow div *");
        console.log(child)
        if (child) {
            alert("clik")
            for(let i = 0; i < this.elements.length; i++ ){
                this.elements[i].classList.toggle(this.className[i]);
        }
        
        }
}
}

const aside = new Aside()

class StaticClass {
    static words = ["arbuz", "banan", "cytryna", "dzik", "elf", "foka", "gitara", "hamburger", "igła", "jabłko", "kot", "lis", "motyl", "niedźwiedź", "okno", "pies", "rower", "serce", "telefon", "ucho", "xrays", "yeti", "wilk", "ząb" ];

    static medal =  document.querySelector(".medal img");

    static mainImg =  document.querySelector(".mainImg img");
}

class ChangeImage {
    constructor() {
        this.letters = [...document.querySelectorAll(".alphabet li")];
        for (let i = 0; i < this.letters.length; i++) {
            this.letters[i].addEventListener("click", this.clickSideLetter)
        }
    }
   
    clickSideLetter() {
        this.caption = document.querySelector(".caption");
        this.caption.innerText = "Wybierz literkę!";
        this.wordsBuilder = new WordsBuilder();
        this.lettersUl = this.wordsBuilder.lettersUl;
        this.solutionUl = this.wordsBuilder.solutionUl;

        this.wordsBuilder.resetUl(this.lettersUl);  
        this.wordsBuilder.resetUl(this.solutionUl);  

        let alphabetLetter = this.innerText;
        let firstLetter;
        this.words = StaticClass.words;
       
        
        for (let i = 0; i < this.words.length; i++)  {
            let word = this.words[i]
            firstLetter = word.charAt(0);
         
            if(firstLetter.toUpperCase() === alphabetLetter){
                StaticClass.mainImg.src =`WORDS_GAME/`+`../img/words/${word.toLowerCase()}.svg`;
                const wordRandomLetters = this.wordsBuilder.mixLetters(word).join("");
                const newPermut= new Permut(wordRandomLetters);
                const mixedWord = newPermut.mixedword;
                const newImg = this.wordsBuilder.getLetter(mixedWord, this.lettersUl);
                const newInput = this.wordsBuilder.getInput(word, this.solutionUl);

                this.letterBtns = this.wordsBuilder.lettersUl.querySelectorAll("li");
                let nbr = 1;
                // this.hint = new Hint;

                // let newNbr = this.hint.getHint();
                
                
               

                for (let i = 0; i < this.letterBtns.length; i++) {
                    this.letterBtns[i].addEventListener("click", () => { 
                        
                        this.button = this.letterBtns[i];
                        this.solution =  this.solutionUl;
                     
                        this.wordsBuilder = new WordsBuilder();  
                  
                        this.letterBtns = this.wordsBuilder.lettersUl.querySelectorAll("li");
                        this.solutionBtns = this.wordsBuilder.solutionUl.querySelectorAll("li");
                        
                        this.solutionField = this.solution.querySelector(`li:nth-child(${nbr})`);
                        const buttonLetter = this.button.innerText;
                        const solutionLetter = this.solutionField.getAttribute("data-letter");


                        if (solutionLetter.toUpperCase() === buttonLetter) {
                            const butttonDisable = new ButtnDisabled;
                            butttonDisable.disable(this.button);
                            butttonDisable.addLetter(this.solutionField, buttonLetter)
                            nbr++;
                            const newsun = new UpDownSun;
                            newsun.updown();
                        }
                       
                        if (this.solutionField.getAttribute("data-nbr") == this.solutionBtns.length) {
                            this.caption.innerText = "Brawo! Wyraz gotowy!";
                            //dodawanie punktów
                            this.hearts = document.querySelectorAll(".heart li i");
                            this.medal = document.querySelector(".medal");
                            this.hearts[pointNumber].style.color = "#EB4D4B";
                            pointNumber++                            
                        }

                        if(pointNumber === 6) {
                           const medal = StaticClass.medal;
                           medal.src = "img/score/sky.jpg"
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
        this.words = StaticClass.words;
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

class ButtnDisabled {
    disable(button) {
        button.style.backgroundColor = "#95AFC0";
        button.style.color = "rgba(235,235,235, 0.8)";
        button.style.boxShadow = "0px 0px 0px 0px #3A336B";
        button.style.textShadow = "0.5px 0.5px 0.5px #95AFC0, 0 0 0 #000, 0.5px 0.5px 0.5px #95AFC0";
    }

    addLetter(solutionField, buttonLetter) {
       solutionField.innerText = buttonLetter;
    }
}
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

class Points {
    constructor() {
        this.hearts = document.querySelectorAll(".heart li i");
        this.medal = document.querySelector(".medal");
        this.pointsNumber = 0;
    }

    addPoint() {
        console.log(this.pointsNumber)
        this.hearts[this.pointsNumber].style.color = "#EB4D4B";
      this.pointsNumber++
    }

}

const points = new Points


class UpDownSun {
    updown() {
        const sunFace = document.querySelector(".sun img:last-child");
        sunFace.classList.add("animationSunFace" );
        setTimeout(function() {
            sunFace.classList.remove("animationSunFace" );
        }, 2000)
    }
}

class NewGame {
    constructor() {
        this.newGameBtn = document.getElementById("newGame");

        this.newGameBtn.addEventListener("click", this.gameReset)
    }

    gameReset(){

        console.log("klik")
        this.wordsBuilder = new WordsBuilder();
        this.lettersUl = this.wordsBuilder.lettersUl;
        this.solutionUl = this.wordsBuilder.solutionUl;
        this.wordsBuilder.resetUl(this.lettersUl);  
        this.wordsBuilder.resetUl(this.solutionUl); 

        for (let i = 0; i < 5; i++){
            this.newLi = document.createElement("li");
            this.newLi.innerText = "";
            this.lettersUl.appendChild(this.newLi);
        }

        for (let i = 0; i < 4; i++){
                this.newLi = document.createElement("li");
                this.newLi.innerText = "";
                this.solutionUl.appendChild(this.newLi);
        }

       StaticClass.medal.src = "img/score/medal.svg";
       StaticClass.mainImg.src = "img/words/sowa.svg";
        }

}

const newGame = new NewGame


class Hint {
    constructor() {
        this.hintBtn = document.getElementById("hint");
        this.nbr = 0;
        this.hintBtn.addEventListener("click", this.getHint.bind(this));
        
    }

    getHint() {
        this.wordsBuilder = new WordsBuilder();  
        this.solution = this.wordsBuilder.solutionUl;
        this.solutionBtns = this.wordsBuilder.solutionUl.querySelectorAll("li");
        this.solutionBtn = this.solutionBtns[this.nbr];
        this.solutionBtn.innerText = this.solutionBtn.getAttribute("data-letter");
        this.nbr++;
        return this.nbr
    }
    
}

const hints = new Hint

console.log(hints.nbr)

