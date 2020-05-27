import { State } from '../models/state.model';
import { appStorage } from  './storage.service';

export const APP_STATE_KEY = 'APP_STATE_KEY';

export const INITIAL_STATE: State = {
    sensorItems: [],
    currentUser: undefined,
};

export class AppState {
    constructor() {
        appStorage.setItem(APP_STATE_KEY, INITIAL_STATE);
    }
    public getStateItem(name: string) {
        const appState = appStorage.getItem(APP_STATE_KEY);
        return appState[name];
    }

    public setStateItem(name, state) {
        appStorage.setItem(APP_STATE_KEY, {
            ...appStorage.getItem(APP_STATE_KEY),
            [name]: state
        });
    }
}

export const appState = new AppState();