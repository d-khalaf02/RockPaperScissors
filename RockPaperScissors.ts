export enum Move {
    Paper,
    Rock,
    Scissors,
}

export enum GameResult{
    PlayerWins,
    PlayerLoses,
    Tie
}

export class RockPaperScissors{
    private isTie: boolean = false;
    private playerWins: boolean = false;

    constructor(private playersMove: Move, private OpponentsMove: Move){}

    play(): GameResult{
        this.playing();

        if(this.isTie){
            return GameResult.Tie;
        }

        if(this.playerWins){
            return GameResult.PlayerWins;
        }

        return GameResult.PlayerLoses;
    }

    private playing(){
        this.isTie = this.playersMove === this.OpponentsMove;
        
        if(this.playersMove === Move.Paper){
            this.playerWins = (this.OpponentsMove === Move.Rock);
        }
        else if(this.playersMove === Move.Rock){
            this.playerWins = (this.OpponentsMove === Move.Scissors);
        }
        else if(this.playersMove === Move.Scissors){
            this.playerWins = (this.OpponentsMove === Move.Paper);
        }
    }
}