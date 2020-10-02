import * as mongoose from 'mongoose';

export const EmployeeSchema = new mongoose.Schema(
  {
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    role: { type: String, required: true },
    isActif: { type: Boolean, default: false },
    businessUnit: { type: String },
  },
  {
    timestamps: true,
  },
);

export interface Employee {
  readonly _id: string;
  readonly phone: string;
  readonly email: string;
  firstname: string;
  lastname: string;
  role: string;
  businessUnit: string;
  isActif: boolean;
}
