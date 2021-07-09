import { db } from '../firebase';

class GameService {
  async getGames() {
    const data = await db.collection('gameCol').orderBy('id').get();
    const gameList = [];
    data.docs.map((doc) => gameList.push({
      id: doc.data().id,
      carList: JSON.parse(doc.data().carList),
      podium: JSON.parse(doc.data().podium),
      speedwaylength: doc.data().speedwaylength,
      isfinished: doc.data().isfinished
    }));
    return gameList;
  }
  createGame(payload) {
    console.log(payload)
    const id = payload.id 
    return db.doc(`gameCol/${id}`).set({
      id: payload.id,
      carList: JSON.stringify(payload.carList),
      podium: JSON.stringify(payload.podium),
      speedwaylength: payload.speedwaylength,
      isfinished: payload.isfinished
    });
  }
}

export default new GameService();