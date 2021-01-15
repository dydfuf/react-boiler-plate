const mongoose = require('mongoose');
const Schema = mongoose.Schema



const favoriteSchema = mongoose.Schema({
    userFrom: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }, // 이것을 통해 유저 아이디를 가지고 유저 데이터를 모두 가져올 수 있다.
    movieId: {
        type: String
    },
    movieTitle: {
        type: String
    },
    moviePost: {
        type: String
    },
    movieRunTime: {
        type: String
    }
}, { timestamps: true} )

const Favorite = mongoose.model('Favorite', favoriteSchema) 

module.exports = { Favorite }