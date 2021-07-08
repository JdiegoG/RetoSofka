import {v4 as uuidv4} from 'uuid';

export default class Driver {
    constructor(data) {
        this.id = (data && data.id) || uuidv4();
        this.name = (data && data.name) || '';
    }
}

