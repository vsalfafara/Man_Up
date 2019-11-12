import * as mongoose from 'mongoose';

export const Schema = new mongoose.Schema({
   full_name: String,
   username: String,
   password: String,
   email_address: String,
   overall_rate: Number,
   coordinates: {
      latitude: Number,
      longitude: Number
   },
   photo: String,
   total_rate: Number,
   mobile_number: Number
}, {
   collection: 'user'
});