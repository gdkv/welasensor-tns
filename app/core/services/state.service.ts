import { State } from '../models/state.model';
import { Storage } from  './storage.service';

const APP_STATE_KEY = 'APP_STATE_KEY';

export const INITIAL_STATE: State = {
    sensorItems: []
};

export class AppState {
    constructor() {
        Storage.setItem(APP_STATE_KEY, INITIAL_STATE);
    }
    public getStateItem(name: string) {
        const appState = Storage.getItem(APP_STATE_KEY);
        return appState[name];
    }

    public setStateItem(name, state) {
        Storage.setItem(APP_STATE_KEY, {
            ...Storage.getItem(APP_STATE_KEY),
            [name]: state
        });
    }
}

const appState = new AppState();