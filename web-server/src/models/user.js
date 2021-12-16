const mongoose = require('mongoose');
const validator = require('validator'); 


const user = mongoose.model('user', {
    id: {
        type: int,
        required:true
    },
    emai: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("email is not valid")
            }
        }
    },
    password: {
        type: String,
        required: true,
    }
});

module.exports = user;
