import { RockPaperScissors, Move, GameResult } from "./RockPaperScissors";

describe('Rock Paper Scissors Game', () => {
    describe('playing the Game : ', () => {
        describe('Player plays Paper', () => {
            test('Wins, when opponents move is "Rock"', () => {
                // Arrange
                const sut = new RockPaperScissors(Move.Paper, Move.Rock);
                const expected = GameResult.PlayerWins;

                // Act 
                const actual = sut.play();

                // Assert
                expect(actual).toBe(expected);
            })

            test('Loses, when opponents move is "Scissors"', () => {
                // Arrange
                const sut = new RockPaperScissors(Move.Paper, Move.Scissors);
                const expected = GameResult.PlayerLoses;

                // Act 
                const actual = sut.play();

                // Assert
                expect(actual).toBe(expected);
            })

        })

        describe('Player plays Rock', () => {
            test('Wins, when opponents move is scissors', () => {
                // Arrange
                const sut = new RockPaperScissors(Move.Rock, Move.Scissors);
                const expected = GameResult.PlayerWins;

                // Act
                const actual = sut.play();

                // Assert
                expect(actual).toBe(expected);
            })
            test('Loses, when opponents move is Paper', () => {
                // Arrange
                const sut = new RockPaperScissors(Move.Rock, Move.Paper);
                const expected = GameResult.PlayerLoses;

                // Act 
                const actual = sut.play();

                //Assert
                expect(actual).toBe(expected);
            })
        })

        describe('Player plays Scissors', () => {
            test('Wins, when opponents move is Paper', () => {
                // Arrange
                const sut = new RockPaperScissors(Move.Scissors, Move.Paper);
                const expected = GameResult.PlayerWins;

                // Act
                const actual = sut.play();

                // Assert
                expect(actual).toBe(expected);
            })
            test('Loses, when opponents move is Rock', () => {
                // Arrange
                const sut = new RockPaperScissors(Move.Scissors, Move.Rock);
                const expected = GameResult.PlayerLoses;

                // Act 
                const actual = sut.play();

                // Assert
                expect(actual).toBe(expected);
            })
        })

        describe('Same Move ', () => {
            test('The Game should be a tie if both the player and opponent make the same move.', () => {
                //Arrange
                let sut: RockPaperScissors[] = [
                    new RockPaperScissors(Move.Paper, Move.Paper),
                    new RockPaperScissors(Move.Rock, Move.Rock),
                    new RockPaperScissors(Move.Scissors, Move.Scissors)
                ];
                const expected = GameResult.Tie;

                // Assert
                expect(sut[0].play()).toBe(expected);
                expect(sut[1].play()).toBe(expected);
                expect(sut[2].play()).toBe(expected);
            })
        })


    })
})