const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  countryIcon: { type: String }, 
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  companyImage: { type: String } 
});

companySchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
