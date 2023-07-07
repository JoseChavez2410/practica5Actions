import * as mongoose from 'mongoose';

export const ApostadorSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    identificacion: { type: String, required: true },
  },
  { timestamps: true },
);

ApostadorSchema.index({ identificacion: 1 }, { unique: true });
ApostadorSchema.index({ nombre: 1 }, { unique: true });
