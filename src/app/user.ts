export class User {
    static result: any;
    // tslint:disable-next-line: variable-name
    constructor(public url: string, public login: string, public html_url: string, public location: string,
                // tslint:disable-next-line: variable-name
                public public_repos: number, public followers: number, public following: number, public avatar_url: string) {

    }
}
