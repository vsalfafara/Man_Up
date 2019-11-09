import { Document } from 'mongoose'

export interface User extends Document {
   full_name: String
   username: String
   password: String
   email_address: String
   overall_rate: Number
   photo: String
   total_rate: Number
}
