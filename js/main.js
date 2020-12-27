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
      
        let alphabetLetter = this.innerText;
        let firstLetter;
        this.words = WordsList.words
    //    console.log(this.words);
        this.words.forEach(word => {
            firstLetter = word.charAt(0);
            // console.log(firstLetter.toUpperCase(), alphabetLetter)
            if(firstLetter.toUpperCase() === alphabetLetter){
                const imgSrc = `../img/words/${word}.svg`;
                document.querySelector(".mainImg img").src = imgSrc;
                const mixedword = this.wordsBuilder.mixLetters(word)
                const newImg = this.wordsBuilder.getLetter( mixedword);
            }
       })
    }
}

const changeImg = new ChangeImage();

class WordsBuilder {
    constructor() {
        this.words = WordsList.words;
        this.lettersUl = document.querySelector(".letters ul");
        // this.mixLetters("kot")
    }

    resetUl() {
       while(this.lettersUl.firstChild){
           this.lettersUl.removeChild(this.lettersUl.firstChild)
       }
    }
    
    createLetters(letter) {
       this.newLi = document.createElement("li");
       this.newLi.innerText = letter;
       this.lettersUl.appendChild(this.newLi);

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

    getLetter(word) {
        this.wordLenght = word.length;
        for (let i = 0; i < this.wordLenght; i++) {
            this.letter = word.slice(i, i+1);
            this.createLetters(this.letter)
        }
    }    
}

const newWord = new WordsBuilder()

class RandomLetter {
    constructor () {
        this.alphabet = "aąbcćdeęfghijklłmnńoóprsśtuwyzźż";
        this.letter = this.drawLetter(this.alphabet);
        console.log(this.letter);
    }

    drawLetter(alphabet){
        const alphabetArr = alphabet.split("");
        let i = Math.floor(Math.random() * alphabetArr.length);
        const letter = alphabetArr[i];
        return letter
    }
}

const newRandom = new RandomLetter();


class Permut {
    constructor() {
        this.randomPermut = [];
        
        this.permutationArr = this.findPermutations("kosz");
        this.max = this.permutationArr.length;
        
        this.randomInt = this.getRandomInt(5);

        console.log(this.permutationArr, this.max, this.randomInt)
    
    }

    findPermutations(string) {

        console.log(string)
        
        if (!string || typeof string !== "string"){
          return "Please enter a string"
        }
        
        else if (string.length < 2 ){
          return string
        }

        let permutationsArray = [] 
         
        for (let i = 0; i < string.length; i++){

          let char = string[i]
          console.log(char)
      
          if (string.indexOf(char) != i) 
          continue
      
          let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
          console.log(remainingChars)
      
          for (let permutation of this.findPermutations(remainingChars)){
            console.log(permutation)
            permutationsArray.push(char + permutation) }
        }
        
 
        return permutationsArray
    }
    
    getRandomInt(max) {
        max = Math.floor(max);
        return Math.floor(Math.random() * max);
    }

}

const newPermut = new Permut();

function findPermutations(string) {
    if (!string || typeof string !== "string"){
      return "Please enter a string"
    } else if (string.length < 2 ){
      return string
    }
  
    let permutationsArray = [] 
     
    for (let i = 0; i < string.length; i++){
      let char = string[i]
  
      if (string.indexOf(char) != i)
      continue
  
      let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
  
      for (let permutation of findPermutations(remainingChars)){
        permutationsArray.push(char + permutation) }
    }

    const selectedElement = permutationsArray
    return permutationsArray
  }

 