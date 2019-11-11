import * as mongoose from 'mongoose';

export const Schema = new mongoose.Schema({
   historical_data: {
      hereditary_diseases: {
         asthma: Boolean,
         diabetes: Boolean,
         high_blood_pressure: Boolean,
         low_blood_pressure: Boolean,
         cancer: Boolean
      },
      intake: String,
      others: String
   },
   prescription: String,
   user_id: String
}, {
   collection: 'patient'
});