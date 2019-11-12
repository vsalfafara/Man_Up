import { Document } from 'mongoose'

export interface Specialist extends Document {
   title: String,
   fee: Number,
   type: String,
   standby: Boolean
   user_id: String
}