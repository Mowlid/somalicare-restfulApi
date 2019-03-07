import { listAllTiles, listAllRecords } from './recordController';

function recordRoutes(app) {
  app.route('/records').get(listAllRecords);
  app.route('/tiles').get(listAllTiles)
}

export default recordRoutes;
