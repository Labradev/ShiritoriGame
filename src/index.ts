
const playableDictionary = [
  'allergic',
  'cat',
  'data',
  'end',
  'tongue'
  ]

export default class shiritoriGame {
  checkWord(wordToCheck:string){
    return playableDictionary.includes(wordToCheck)
  }
  getDictionary(){
    return playableDictionary
  }
  
};
