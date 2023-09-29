import mongoose, { Schema, Document } from 'mongoose';

interface IDemand extends Document {
  title: string;
  description: string;
  user: mongoose.Types.ObjectId;
}

const demandSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }
});

const Demand = mongoose.model<IDemand>('Demand', demandSchema);

export default Demand;