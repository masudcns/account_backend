import mongoose from "mongoose";

export const Website = mongoose.model(
  "Website",
  new mongoose.Schema({
    name: { type: String, required: true },
    transactionType: { type: String },
    walletBalance: { type: Number },
    withdrawAmount: { type: Number },
    depositAmount: { type: Number },
    subAdminId: { type: String },
    subAdminName: { type: String },
    date: { type: Date },
  }),
  "Website"
);
