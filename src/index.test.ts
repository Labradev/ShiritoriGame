import { shiritoriGame } from "./index"

describe("Shiritori Game", () => {
  it("checks if the game has the dictionary", () => {
    const expectedDictionary = [
      'allergic',
      'cat',
      'data',
      'end',
      'tongue'
      ]

    const recivedDictionary = shiritoriGame();

    expect(recivedDictionary).toEqual(expectedDictionary);
  })
})
