const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const failedJobSchema = new Schema({
    id: { type: Schema.Types.ObjectId, required: true, auto: true },
    uuid: { type: String, required: true, unique: true },
    connection: { type: String, required: true },
    queue: { type: String, required: true },
    payload: { type: Schema.Types.Mixed, required: true },
    exception: { type: Schema.Types.Mixed, required: true },
    failed_at: { type: Date, default: Date.now, required: true }
});

const FailedJob = mongoose.model('FailedJob', failedJobSchema);

module.exports = FailedJob;
