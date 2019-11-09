import * as mongoose from 'mongoose';

export const Schema = new mongoose.Schema({
   full_name: String,
   username: String,
   password: String,
   email_address: String,
   overall_rate: Number,
   photo: String,
   total_rate: Number,
}, {
   collection: 'user'
});