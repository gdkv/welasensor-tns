import { LoginModel } from '../models/login.model';
import { appConfig } from '@/config/app-config';
import { Token } from '../models/token.model';
import { User } from '../models/user.model';
import { Storage } from  './storage.service';

const AUTH_TOKEN_KEY = 'AUTH_TOKEN_KEY';
const AUTH_USER_KEY = 'AUTH_USER_KEY';

export class AuthService {

    private loggedIn = false;

    public isLoggedIn() {
        return this.loggedIn;
    }

    public login(loginModel: LoginModel){
        // this.loggedIn = true;
        // return Promise.resolve(true);
        console.log('START LOGIN');
        return fetch(`${appConfig.apiEndpoint}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: loginModel.username,
                password: loginModel.password
            })
        })
        .then(response => response.json())
        .then((data: { token: Token, user: User }) => {
              this.setToken(data.token);
              this.setUser(data.user);
              console.log(data);
        });
    }
    private setUser(authUser: User) {
        Storage.setItem('user', authUser);
        this.loggedIn = true;
        // throw new Error("Method not implemented.");
    }
    
    private setToken(authToken: Token) {
        Storage.setItem(AUTH_TOKEN_KEY, authToken);
        // console.log(authToken);
        // throw new Error("Method not implemented.");
    }

    public getUser() {
        Storage.getItem(AUTH_USER_KEY);
    }

    public getToken() {
        Storage.getItem(AUTH_TOKEN_KEY);
    }
}

export const authService = new AuthService();