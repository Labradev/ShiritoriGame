
const playableDictionary = [
  'allergic',
  'cat',
  'data',
  'end',
  'tongue'
  ]

export default class shiritoriGame {
  isConcatenated(firstWord:string, secondWord:string){
    return firstWord[firstWord.length-1] === secondWord[0]
  }
  checkWord(wordToCheck:string){
    return playableDictionary.includes(wordToCheck)
  }
  getDictionary(){
    return playableDictionary
  }
  
};
