'use strict';

module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
  
    const UserSchema = new Schema({
      name: { type: String  },
      age: { type: Number  },
      company: { type: String}
    });
    return mongoose.model('Bank', UserSchema,'col');
}