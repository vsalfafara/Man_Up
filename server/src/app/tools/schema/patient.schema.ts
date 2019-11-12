import * as mongoose from 'mongoose';

export const Schema = new mongoose.Schema({
   historical_data: {
      hereditary_diseases: {},
      intake: String,
      others: String
   },
   prescription: String,
   user_id: String
}, {
   collection: 'patient'
});