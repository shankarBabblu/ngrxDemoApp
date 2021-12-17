import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn : 'root'
})
export class authService {
    constructor(private http : HttpClient ) {}
    
    login(email:string, password:string) {
        // return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIREBASE_API_KEY}`,{email, password, returnSecureToken : true} )
        return this.http.post('http://localhost:3000/auth', {"email": email, "password":password})
    }
}