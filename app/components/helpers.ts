import { Sensor } from '../core/models/sensor.model';
import { appConfig } from '@/config/app-config';
import { authService } from '@/core/services/auth.service';

export function fetchData(method: string) {
    console.log("API: ", appConfig.apiEndpoint);
    console.log(`${appConfig.apiEndpoint}${method}`);
    console.log('User:', authService.getUser());
    console.log('JWT:', authService.getToken());

    let myHeaders = new Headers();
    const token = authService.getToken();

    myHeaders.append("Authorization", `Bearer ${token.access_token}`);

    return fetch(`${appConfig.apiEndpoint}${method}`, {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    });
}