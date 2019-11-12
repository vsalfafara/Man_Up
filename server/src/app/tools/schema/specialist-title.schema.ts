import * as mongoose from 'mongoose';

export const Schema = new mongoose.Schema({
   title: String
}, {
   collection: 'specialist-title'
});