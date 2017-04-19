export class voteQuestion {
    constructor (
        public teamName: string,
        public questionId: number,
        public question: string,
        public options: string[],
        public tags: string[],
        public date: number,
        public ownerId: number 
    ){}
}