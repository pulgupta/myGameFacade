//This class contains the question record
//Each question will be linked to the voteRecord which will contain the vote patterns
export class Question {
    constructor (
        public questionId: string,
        public question: string,
        public optionsFull: string,
        public options: string[],
        public tags: string,
        public date: number,
        public ownerId: string //This will be the teamId to which this question is assigned.
        //^^^^ we can keep the name as teamId also but we may need sometimes when the owner is not a team
    ){}
}