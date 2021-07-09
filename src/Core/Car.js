import {v4 as uuidv4} from 'uuid';

export default class Car {
    constructor(data) {
        this.id = (data && data.id) || uuidv4();
        this.driverName = (data && data.driver) || "";
        this.currentposition = (data && data.currentposition) || 0;
        this.isFinish = (data && data.isFinish) || false;
    }

    lanzardado(){
        const dado6caras = parseInt(6 * Math.random() + 1 );
        return dado6caras;
    }

    moverse(lanzamiento, game) {
        this.currentposition = this.currentposition + lanzamiento
        if(this.currentposition > game.speedwaylength){
            this.isFinish = true
            this.currentposition = game.speedwaylength
            game.podium.push(this)
        } 
    }
}