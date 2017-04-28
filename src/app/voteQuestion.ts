//This class contains the question record
//Each question will be linked to the voteRecord which will contain the vote patterns
export class VoteQuestion {
    constructor (
        public questionId: number,
        public question: string,
        public optionsFull: string,
        public options: string[],
        public tags: string,
        public date: number,
        public ownerId: number 
    ){}
}