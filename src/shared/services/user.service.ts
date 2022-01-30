import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "@shared/models/user.model";
import { Observable, of } from "rxjs";
import { adjectives, starWars, uniqueNamesGenerator } from "unique-names-generator";

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(
        private _httpClient: HttpClient
    ) { }

    generateUsers(count: number): Observable<User> {
        let users: any = [];
        for (let t = 0; t < count; t++) {
            let user = new User();
            user.id = t + 1;

            const starWarsName = uniqueNamesGenerator({ dictionaries: [starWars] }).split(' ');
            if (starWarsName.length === 2) {
                [user.firstName, user.lastName] = starWarsName;
            } 
            else {
                user.firstName = uniqueNamesGenerator({ dictionaries: [adjectives]});
                [user.lastName] = starWarsName;
            }
            
            users.push(user);
        }
        return of (users);
    }
    
}