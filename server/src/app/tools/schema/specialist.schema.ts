import * as mongoose from 'mongoose';

export const Schema = new mongoose.Schema({
   title: String,
   fee: Number,
   type: String,
   standby: Boolean,
   user_id: String
}, {
   collection: 'specialist'
});