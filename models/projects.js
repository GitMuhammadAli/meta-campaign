const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    project_name: { type: String, required: true },
    description: { type: String },
    created_at: { type: Date },
    updated_at: { type: Date },
    project_image: { type: String },
    icon: { type: String }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
