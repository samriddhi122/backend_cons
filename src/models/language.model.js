import mongoose, {Schema} from 'mongoose';
const languageSchema = new Schema({
  code: { type: String, required: true },
  data: { type: Object, required: true },
});
export const Language = mongoose.model("Language",languageSchema )