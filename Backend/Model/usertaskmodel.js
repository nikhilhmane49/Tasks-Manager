
const mongoose = require('mongoose');

const taskschema = new mongoose.Schema({

    title:
    {
        type: String
    },
    description:
    {
        type: String
    },
    assignedTo: {
        type: String
    },
    status: {
      type: String,
      enum: ['To Do', 'In Progress', 'Done'],
      default: 'To Do'
    }

})
    const taskModel = mongoose.model('task',taskschema);

    module.exports = taskModel;