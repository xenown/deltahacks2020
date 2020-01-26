const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({

 /*   title: {    
        type: String,
        required: true
    },
    name: String,
    description: String,
    date: {
        type: Date,
        default: Date.now
    
    }
*/
    name: String,
    date: {
        type: Date,
        default: Date.now
    
    },
    Question1: {    
        type: String,
        required: true
    },
    Question2: {    
        type: String,
        required: true
    },
    Question3: {    
        type: String,
        required: true
    },
    Question4: {    
        type: String,
        required: true
    },
    Question5: {    
        type: String,
        required: true
    },
    Question6: {    
        type: String,
        required: true
    },

    Question7: {    
        type: String,
        required: true
    },
    Question8: {    
        type: String,
        required: true
    },
    Question9: {    
        type: String,
        required: true
    },
    Question10: {    
        type: String,
        required: true
    },
    Question11: {    
        type: String,
        required: true
    },
    Question12: {    
        type: String,
        required: true
    },
    Company: {    
        type: String,
        required: true
    },
    Survey: {    
        type: String,
        required: true
    }

});

module.exports = mongoose.model('posts', PostSchema);