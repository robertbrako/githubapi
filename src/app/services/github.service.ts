import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs/Observable";
import { Params } from "@angular/router";

@Injectable()
export class GHService {
    authToken: string;
    baseurl = 'https://api.github.com/';

    constructor(private http: HttpClient) {}

    getUsers(param: Params) {
        let query = new HttpParams()
            .set('per_page', '50')
            .set('since', param.userid);
        let options = {
            headers: new HttpHeaders(),
            observe: 'response' as 'response',
            params: query
        };
        return this.getResponseWithCustomField(this.http.get(this.baseurl + 'users', options), 'Link');
    }

    getResponseWithCustomField(response: Observable<HttpResponse<any>>, field: string) {
        return response.pipe(
            map<HttpResponse<any>, HttpResponse<any>>(response => {
                response.headers['link'] = response.headers.get(field);
                return response;
            })
        );
    }

    getUser(param: Params) {
        const query = '/' + param.login;
        const headers = new HttpHeaders();
        return this.http.get(this.baseurl + 'users' + query, { headers: headers });
    }
}
