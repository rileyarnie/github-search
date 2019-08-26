import { Injectable } from '@angular/core';
import { User } from './user';
import { Repos } from './repos';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class UserserviceService {
    userIdentity: User;
    totalrepos: Repos;
    // tslint:disable-next-line: variable-name
    up_key = '2248a8bd35eb376f0b586b764c50c76b67be3a1b';

    constructor(private http: HttpClient) {
        this.userIdentity = new User('', '', '', '', 0, 0, 0, '');
        // tslint:disable-next-line: new-parens
        this.totalrepos = new Repos('', '', '', new Date);
    }

    searchUSer(searchName: string) {

        interface response {
            url: string;
            login: string;
            html_url: string;
            location: string;
            public_repos: number;
            followers: number;
            following: number;
            avatar_url: string;
        }

        return new Promise((resolve, reject) => {
            this.http.get<response>('https://api.github.com/users/' + searchName + '?access_token=' + this.up_key).toPromise().then(
                (result) => {
                    this.userIdentity = result;
                    console.log(this.userIdentity);
                    resolve();
                },
                (error) => {
                    console.log(error);
                    reject();
                }
            );
        });
    }
    getrepos(searchName) {
        // tslint:disable-next-line: no-shadowed-variable
        interface Repos {
            name: string;
            html_url: string;
            description: string;
            forks: number;
            watchers: number;
            language: string;
            created_at: Date;
        }
        return new Promise((resolve, reject) => {
            // tslint:disable-next-line: max-line-length
            this.http.get<Repos>('https://api.github.com/users/' + searchName + '/repos?order=created&sort=asc?access_token=' + this.up_key).toPromise().then(
                (results) => {
                    this.totalrepos = results;
                    resolve();
                },
                (error) => {
                    console.log(error);
                    reject();
                }
            );
        });
    }
}

