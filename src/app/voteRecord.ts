//This class contains the details of the poll for a particular team.
//This is all based on the questionId which will link these to a particular question
export class VoteRecord {
    constructor (
        public questionId: number,
        public teamName: string,
        public teammates: string[],
        public voteCasted: Map<string, string>,
    ){}
}