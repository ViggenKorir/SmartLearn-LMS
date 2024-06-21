// models/Course.js
const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {  
    type: String,
    required: true
  }
  // Add more fields as needed (e.g., videos, quizzes)
});

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  modules: [moduleSchema]
});

module.exports = mongoose.model('Course', courseSchema);
