import { LoginModel } from '../models/login.model';
import { appConfig } from '@/config/app-config';
import { Token } from '../models/token.model';
import { User } from '../models/user.model';
import { appStorage } from  './storage.service';
import { APP_STATE_KEY, INITIAL_STATE, appState } from './state.service';

const AUTH_TOKEN_KEY = 'AUTH_TOKEN_KEY';
const AUTH_USER_KEY = 'AUTH_USER_KEY';

export class AuthService {
    public login(loginModel: LoginModel){
        console.log('START AUTH USER ON', `${appConfig.apiEndpoint}/auth/login`);
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
              console.log('AUTH SERVICE FINISHED, RETURN TO LOGIN');
        });
    }

    public logout(): Promise<void> {
        appStorage.removeItem(AUTH_TOKEN_KEY);
        appStorage.setItem(APP_STATE_KEY, INITIAL_STATE);
        return Promise.resolve();
    }

    public isLoggedIn(): boolean {
        const hasToken = !!this.getToken();
        const hasUser = !!this.getUserId();
        return hasToken && hasUser;
    }

    private setUser(authUser: User) {
        appState.setStateItem('currentUser', authUser);
    }

    public getUser() {
        return appState.getStateItem('currentUser');
    }

    public getUserId(): number {
        const user = this.getUser();
        if(user){
            return user.id;
        }
        return undefined;        
    }

    private setToken(authToken: Token) {
        appStorage.setItem(AUTH_TOKEN_KEY, authToken);
    }

    public getToken() {
        return appStorage.getItem(AUTH_TOKEN_KEY);
    }
}

export const authService = new AuthService();