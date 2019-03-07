import mongoose from 'mongoose';

const recordModel = mongoose.model('Records');
const tilesModel = mongoose.model('Tiles');

export function listAllRecords(request, response) {
  recordModel.find({}, (error, record) => {
    if (error) {
      response.send(error);
    }
    response.json(record);
  });
}

export function listAllTiles(request, response) {
  tilesModel.find({}, (error, record) => {
    if (error) {
      response.send(error);
    }
    response.json(record);
  });
}