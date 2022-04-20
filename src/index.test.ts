import shiritoriGame from "./index"

describe("Shiritori Game", () => {
  it("checks if the game has the dictionary", () => {
    const expectedDictionary = [
      'allergic',
      'cat',
      'data',
      'end',
      'tongue'
      ]

    const recivedDictionary = new shiritoriGame().getDictionary();

    expect(recivedDictionary).toEqual(expectedDictionary);
  })

  it("checks if the word is not in the playable dictionary", () => {

    const isInTheDictionary = new shiritoriGame().checkWord("book");

    expect(isInTheDictionary).toEqual(false);
  })

  it("checks if, given two words, the last letter from the first word matches the last letter of the second word", () => {
    const firstWord = "cat"
    const secondWord = "tongue"
    const isConcatenated = new shiritoriGame().isConcatenated(firstWord, secondWord);

    expect(isConcatenated).toEqual(true);
  })

  it("checks if user is in time", async () => {

    let game = new shiritoriGame()
    
    game.playerOne("cat");

    //await new Promise((r) => setTimeout(r, 4000))
    jest.setTimeout(11000);

    game.playerTwo("tongue");
  
    expect(game.gameStatus).toEqual(true);
  })
})