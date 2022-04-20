
const playableDictionary = [
  'allergic',
  'cat',
  'data',
  'end',
  'tongue'
  ]

  export default class shiritoriGame {
  initialTime:number = 0;
  finalTime:number = 0
  gameStatus:boolean = false

  isConcatenated(firstWord:string, secondWord:string){
    return firstWord[firstWord.length-1] === secondWord[0]
  }
  checkWord(wordToCheck:string){
    return playableDictionary.includes(wordToCheck)
  }
  getDictionary(){
    return playableDictionary
  }

  playerOne(word:string){
    if(this.checkWord(word)){
      this.initialTime = new Date().getTime();
    }
    this.checkTime()
  }

  playerTwo(word:string){
    if(this.checkWord(word)){
      this.finalTime = new Date().getTime();
    }
    this.checkTime()
  }

  checkTime(){
    if (this.initialTime != 0 && this.finalTime != 0){
      if ((this.finalTime - this.initialTime) <= 10000){
        this.gameStatus = true
      } else {
        this.gameStatus = false
      }
    }
  }
};