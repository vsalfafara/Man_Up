import { Document } from 'mongoose'

interface Diseases extends Document {
   asthma: Boolean,
   diabetes: Boolean,
   high_blood_pressure: Boolean,
   low_blood_pressure: Boolean,
   cancer: Boolean
}

interface Historical_Data extends Document {
   hereditary_diseases: Diseases,
   intake: String,
   others: String
}

export interface Patient extends Document {
   historical_data: Historical_Data,
   prescription: String,
   user_id: String
}
