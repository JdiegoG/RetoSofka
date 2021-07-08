import {v4 as uuidv4} from 'uuid';
import Car from './Car';

export default class Game {
    constructor(data) {
        this.id = (data && data.id) || uuidv4();
        this.carList = (data && data.carList) || [];
        this.podium = (data && data.podium) || {first: null, second: null, third: null};
        this.speedwaylength = (data && data.speedwaylength) || 0;
        this.isfinished = (data && data.isfinished) || false;
    }
    startgame(playersNumber, speedwaylength) {
        this.carList = []
        this.speedwaylength = speedwaylength;
        for (let i = 0; i < playersNumber; i++) {
            this.carList.push(new Car());  
        }
    } 
}