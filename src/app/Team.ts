//This class contains the details of the poll for a particular team.
//This is all based on the questionId which will link these to a particular question
export class Team {
    constructor (
        public teamId: string,
        public teamName: string,
        public teammatesFull: string,
        public teammates: string[],
        public questionIds: string[]
    ){}
}