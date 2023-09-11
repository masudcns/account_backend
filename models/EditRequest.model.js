import mongoose from "mongoose";

export const EditRequest = mongoose.model(
  "EditRequest",
  new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    transactionID: { type: String },
    transactionType: { type: String, required: true },
    amount: { type: String },
    paymentMethod: { type: String },
    userId: { type: String },
    subAdminId: { type: String },
    subAdminName: { type: String },
    depositAmount: { type: Number },
    withdrawAmount: { type: Number },
    currentBalance: { type: Number },
    beforeBalance: { type: Number },
    currentWebsiteBalance : { type: Number },
    currentBankBalance : { type: Number },
    remarks: { type: String },
    bankName: { type: String },
    websiteName: { type: String },
    accountHolderName: { type: String },
    bankName: { type: String },
    accountNumber: { type: Number },
    ifscCode: { type: String },
    upiId: { type: String },
    upiAppName: { type: String },
    upiNumber: { type: String },
    createdAt: { type: Date },
    message: { type: String },
    type: { type: String },
    changedFields: {},
    isSubmit: { type: Boolean, default: false },
    isApproved: { type: Boolean, default: false, required: true },
  }),
  "EditRequest"
);
