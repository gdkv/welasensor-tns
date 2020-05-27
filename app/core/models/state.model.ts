import { Sensor } from '../models/sensor.model';
import { User } from '../models/user.model';
// import { SensorData } from '../models/data.model';


export interface State {
    sensorItems: Sensor[];
    currentUser: User;
}

