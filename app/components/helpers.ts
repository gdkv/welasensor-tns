import { Sensor } from '../core/models/sensor.model';
import { appConfig } from '@/config/app-config';

export function fetchData(method: string) {
    console.log("API: ", appConfig.apiEndpoint);
    console.log(`${appConfig.apiEndpoint}${method}`);
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${appConfig.jwtToken}`);
    myHeaders.append("Cookie", "XSRF-TOKEN=eyJpdiI6Im9pbit0MzhXZ3NsMHNMWkZBT1JQYXc9PSIsInZhbHVlIjoienZteEx5Wk5xWXYrMnVHa01rQXJOQ2N5U3libXRyVCt4VHRiS3F3WHV6NkJ5WU9XRGlCOG52SFBRTExFcXJXNiIsIm1hYyI6Ijg0NGQwZmRiYmU0MDI1MWMyNmRhYzllNjAyN2U3NzI0NDkxYmEwN2I3MWY2ODFkYTY3ZTlmMWM5ZmJjOGUzZjUifQ");

    return fetch(`${appConfig.apiEndpoint}${method}`, {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    });
}