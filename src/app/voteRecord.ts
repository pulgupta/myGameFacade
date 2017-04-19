export class voteRecord {
    constructor (
        public teamName: string,
        public questionId: number,
        public teammates: string[],
        public voteCasted: string[],
    ){}
}