import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public server: string = 'http://localhost:8080/';
    public questionUrl: string = 'question';
    public ServerWithApiUrl = this.server + this.questionUrl;
}