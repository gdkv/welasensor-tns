import * as appSettings from 'tns-core-modules/application-settings';

export class StorageService {
    public setItem(key: string, value): void {
        appSettings.setString(key, JSON.stringify(value));
    }

    public getItem(key: string) {
        let value = appSettings.getString(key);
        if (value){
            return JSON.parse(value);
        } else {
            return undefined;
        }
    }

    public removeItem(key: string): void {
        appSettings.remove(key);
    }

    public clearAll(): void {
        appSettings.clear();
    }
}
export const appStorage = new StorageService();