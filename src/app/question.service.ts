import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';

import { Question } from './Question';
import { Configuration } from './configuration';

@Injectable()
export class QuestionService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private _http: Http, private _configuration: Configuration) {

        this.actionUrl = _configuration.ServerWithApiUrl;

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public saveQuestion = (question: Question): Observable<Question> => {

        return this._http.post(this.actionUrl, question, { headers: this.headers })
            .map((response: Response) => <Question>response.json())
            .catch(this.handleError);
    }

    public updateQuestion = (question: Question): Observable<Question> => {

        return this._http.put(this.actionUrl+'/'+question.questionId, question, { headers: this.headers })
            .map((response: Response) => <Question>response.json())
            .catch(this.handleError);
    }

    public getQuestion = (questionId: string): Observable<Question> => {
        var url = this.actionUrl + '/' + questionId;
        return this._http.get(url, { headers: this.headers })
            .map((response: Response) => <Question>response.json())
            .catch(this.handleError);
    }

    public addVote = (questionId: string, option: string): Observable<Question> => {

        return this._http.put(this.actionUrl+'/'+ questionId+'?'+option, { headers: this.headers })
            .map((response: Response) => <Question>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}