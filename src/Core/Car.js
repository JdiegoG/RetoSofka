import {v4 as uuidv4} from 'uuid';
import Driver from './Driver';

export default class Car {
    constructor(data) {
        this.id = (data && data.id) || uuidv4();
        this.driver = (data && data.driver) || new Driver();
        this.currentposition = (data && data.currentposition) || 0;
    }
}